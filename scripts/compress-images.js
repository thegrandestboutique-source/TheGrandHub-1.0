const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const config = {
  inputDir: './public/images/gallery',
  outputDir: './public/images/gallery',
  backupDir: './originals-backup/images/gallery',

  // Image sizes to generate
  sizes: [
    { width: 800, suffix: '-800w', quality: 85 },
    { width: 1600, suffix: '-1600w', quality: 82 },
  ],

  // Main display size (replaces originals)
  mainSize: {
    width: 2000,  // Max width
    quality: 85,   // Quality (0-100)
  },

  // Whether to also create WebP versions
  createWebP: true,
  webpQuality: 80,
};

// Statistics
const stats = {
  processed: 0,
  originalSize: 0,
  compressedSize: 0,
  errors: [],
};

// Get all image files recursively
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Get file size in bytes
function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

// Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Compress a single image
async function compressImage(inputPath) {
  try {
    const relativePath = path.relative(config.inputDir, inputPath);
    const dir = path.dirname(inputPath);
    const ext = path.extname(inputPath);
    const basename = path.basename(inputPath, ext);

    // Backup original
    const backupPath = path.join(config.backupDir, relativePath);
    ensureDir(path.dirname(backupPath));

    // Only backup if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`  📦 Backed up: ${relativePath}`);
    }

    const originalSize = getFileSize(inputPath);
    stats.originalSize += originalSize;

    // Load image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Compress main image (replaces original)
    const mainOutput = inputPath; // Overwrite original

    await image
      .resize(config.mainSize.width, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: config.mainSize.quality, progressive: true })
      .toFile(mainOutput + '.tmp');

    // Replace original with compressed version
    fs.renameSync(mainOutput + '.tmp', mainOutput);

    const compressedSize = getFileSize(mainOutput);
    stats.compressedSize += compressedSize;

    const savedPercent = Math.round((1 - compressedSize / originalSize) * 100);
    console.log(`  ✓ ${relativePath}`);
    console.log(`    ${formatBytes(originalSize)} → ${formatBytes(compressedSize)} (saved ${savedPercent}%)`);

    // Generate additional sizes for srcset (optional)
    for (const size of config.sizes) {
      const sizedOutput = path.join(dir, `${basename}${size.suffix}${ext}`);

      await sharp(inputPath)
        .resize(size.width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: size.quality, progressive: true })
        .toFile(sizedOutput);

      console.log(`    → Created ${size.width}w version`);
    }

    // Create WebP version (better compression)
    if (config.createWebP) {
      const webpOutput = path.join(dir, `${basename}.webp`);

      await sharp(inputPath)
        .resize(config.mainSize.width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: config.webpQuality })
        .toFile(webpOutput);

      const webpSize = getFileSize(webpOutput);
      console.log(`    → Created WebP version (${formatBytes(webpSize)})`);
    }

    stats.processed++;

  } catch (error) {
    console.error(`  ✗ Error processing ${inputPath}:`, error.message);
    stats.errors.push({ file: inputPath, error: error.message });
  }
}

// Main function
async function main() {
  console.log('\n🖼️  Image Compression Tool\n');
  console.log('Configuration:');
  console.log(`  Input: ${config.inputDir}`);
  console.log(`  Backup: ${config.backupDir}`);
  console.log(`  Max width: ${config.mainSize.width}px`);
  console.log(`  Quality: ${config.mainSize.quality}%`);
  console.log(`  WebP: ${config.createWebP ? 'Yes' : 'No'}`);
  console.log('');

  // Get all images
  const imageFiles = getImageFiles(config.inputDir);
  console.log(`Found ${imageFiles.length} images to process\n`);

  // Ensure backup directory exists
  ensureDir(config.backupDir);

  // Process each image
  for (const imagePath of imageFiles) {
    await compressImage(imagePath);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Compression Summary');
  console.log('='.repeat(60));
  console.log(`Total images processed: ${stats.processed}`);
  console.log(`Original total size: ${formatBytes(stats.originalSize)}`);
  console.log(`Compressed total size: ${formatBytes(stats.compressedSize)}`);

  if (stats.originalSize > 0) {
    const totalSaved = stats.originalSize - stats.compressedSize;
    const totalSavedPercent = Math.round((totalSaved / stats.originalSize) * 100);
    console.log(`Total saved: ${formatBytes(totalSaved)} (${totalSavedPercent}%)`);
  }

  if (stats.errors.length > 0) {
    console.log(`\n⚠️  Errors: ${stats.errors.length}`);
    stats.errors.forEach(err => {
      console.log(`  - ${err.file}: ${err.error}`);
    });
  }

  console.log('\n✅ Done! Your originals are backed up in: ' + config.backupDir);
  console.log('');
}

// Run
main().catch(console.error);
