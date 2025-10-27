import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';
import { requireAuth } from '../../../lib/auth';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to create a URL-friendly ID from title
function createId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Helper to get category subdirectory
function getCategorySubdir(category) {
  const categoryMap = {
    'Macro': 'macro',
    'Wildlife': 'wildlife',
    'Night': 'night',
    'Pets': 'pets',
    'Nature': 'nature',
    'Human-Made': 'human-made',
  };
  return categoryMap[category] || 'nature';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check authentication
  const session = await requireAuth(req, res);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Parse form data
    const form = formidable({
      maxFileSize: 50 * 1024 * 1024, // 50MB max
      keepExtensions: true,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Extract field values (formidable v3 returns arrays)
    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const category = Array.isArray(fields.category) ? fields.category[0] : fields.category;
    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
    const alt = Array.isArray(fields.alt) ? fields.alt[0] : fields.alt || title;

    // Parse EXIF data from form
    const exifData = {
      iso: Array.isArray(fields.iso) ? fields.iso[0] : fields.iso || '',
      aperture: Array.isArray(fields.aperture) ? fields.aperture[0] : fields.aperture || '',
      shutter: Array.isArray(fields.shutter) ? fields.shutter[0] : fields.shutter || '',
      focal: Array.isArray(fields.focal) ? fields.focal[0] : fields.focal || '',
    };

    const uploadedFile = Array.isArray(files.image) ? files.image[0] : files.image;

    if (!uploadedFile || !title || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate unique ID
    const id = createId(title);

    // Get file extension
    const ext = path.extname(uploadedFile.originalFilename || uploadedFile.newFilename);
    const filename = `${id}${ext}`;

    // Determine category subdirectory
    const categorySubdir = getCategorySubdir(category);
    const destDir = path.join(process.cwd(), 'public', 'images', 'gallery', categorySubdir);
    const destPath = path.join(destDir, filename);

    // Ensure directory exists
    await fs.mkdir(destDir, { recursive: true });

    // Move file to destination
    await fs.copyFile(uploadedFile.filepath, destPath);
    await fs.unlink(uploadedFile.filepath); // Clean up temp file

    // Create image metadata object
    const imageData = {
      id,
      title,
      category,
      src: `/images/gallery/${categorySubdir}/${filename}`,
      srcset: [
        `/images/gallery/${categorySubdir}/${filename} 800w`,
        `/images/gallery/${categorySubdir}/${filename} 1600w`,
      ],
      alt: alt || title,
      exif: {
        iso: exifData.iso ? (isNaN(exifData.iso) ? exifData.iso : parseInt(exifData.iso)) : '',
        aperture: exifData.aperture || '',
        shutter: exifData.shutter || '',
        focal: exifData.focal || '',
      },
      story: description || 'Placeholder story - add your photo description here.',
    };

    // Read existing images.json
    const imagesJsonPath = path.join(process.cwd(), 'data', 'images.json');
    let images = [];

    try {
      const jsonData = await fs.readFile(imagesJsonPath, 'utf-8');
      images = JSON.parse(jsonData);
    } catch (error) {
      // File doesn't exist or is invalid, start with empty array
      images = [];
    }

    // Add new image to the beginning of the array
    images.unshift(imageData);

    // Write updated images.json
    await fs.writeFile(imagesJsonPath, JSON.stringify(images, null, 2), 'utf-8');

    return res.status(200).json({
      success: true,
      image: imageData,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
