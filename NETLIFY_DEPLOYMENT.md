# Deploy TheGrandHub to Netlify

Your site is now configured as a **fully static Next.js export** and ready for Netlify deployment!

## ✅ What Was Fixed

1. **Generated `images.json`** with all 135 images from your repository with correct paths
2. **Updated `categories.json`** to include all 6 categories (Macro, Wildlife, Night, Pets, Nature, Human-Made)
3. **Fixed index page** image references to use correct category subdirectories
4. **Configured `next.config.js`** for static export (`output: 'export'`)
5. **Created `netlify.toml`** with proper build configuration
6. **Archived admin panel** (moved to `.archive/` folder since it won't work on static hosting)
7. **Tested static build** - everything builds successfully!

## 🚀 Deployment Steps

### Option 1: Deploy via Netlify UI (Easiest)

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for Netlify static deployment"
   git push
   ```

2. **Log in to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"

3. **Connect your repository:**
   - Choose GitHub
   - Select your TheGrandHub repository

4. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - Click "Deploy site"

5. **Done!** Your site will be live in 1-2 minutes

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

## 📁 Build Output

When you run `npm run build`, Next.js creates a static export in the `out/` directory:

```
out/
├── index.html           # Homepage
├── gallery/            # Gallery page
├── shop/              # Shop page
├── about/             # About page
├── links/             # Links page
├── images/            # All your images
│   └── gallery/
│       ├── macro/     # 31 images
│       ├── wildlife/  # 24 images
│       ├── night/     # 11 images
│       ├── pets/      # 10 images
│       ├── nature/    # 34 images
│       └── human-made/ # 26 images
└── _next/             # Next.js assets
```

## 🎨 Your Image Library

Your site now has **135 photos** properly organized and ready to display:

- **Macro**: 31 images
- **Nature**: 34 images
- **Human-Made**: 26 images
- **Wildlife**: 24 images
- **Night**: 11 images
- **Pets**: 10 images

## ⚙️ Site Features (Static-Only)

### ✅ What Works on Netlify:
- ✅ Homepage with hero image
- ✅ Full gallery with 135 images
- ✅ Category filtering
- ✅ Lightbox viewer
- ✅ Theme switching (Dark/OLED/Light)
- ✅ Shop page
- ✅ About page
- ✅ Links page
- ✅ Responsive design
- ✅ All 135 images properly referenced

### ❌ What Doesn't Work (Removed):
- ❌ Admin panel (moved to `.archive/`)
- ❌ Image upload functionality
- ❌ Dynamic API routes

## 📝 Adding New Images (Manual Process)

Since the admin panel won't work on static hosting, you'll add new images via Git:

1. **Add image file to category folder:**
   ```bash
   # Example: Add a new macro photo
   cp my-new-photo.jpg public/images/gallery/macro/
   ```

2. **Regenerate images.json:**
   ```bash
   node -e "
   const fs = require('fs');
   const path = require('path');

   function createId(filename) {
     return path.basename(filename, path.extname(filename))
       .toLowerCase()
       .replace(/[^a-z0-9]+/g, '-')
       .replace(/^-|-$/g, '');
   }

   function createTitle(filename) {
     const name = path.basename(filename, path.extname(filename));
     return name
       .replace(/[-_]/g, ' ')
       .replace(/\s+\(\d+\)/g, '')
       .split(' ')
       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join(' ');
   }

   const categoryMap = {
     'macro': 'Macro',
     'wildlife': 'Wildlife',
     'night': 'Night',
     'pets': 'Pets',
     'nature': 'Nature',
     'human-made': 'Human-Made'
   };

   const galleryPath = './public/images/gallery';
   const images = [];

   Object.entries(categoryMap).forEach(([folder, categoryName]) => {
     const categoryPath = path.join(galleryPath, folder);

     if (fs.existsSync(categoryPath)) {
       const files = fs.readdirSync(categoryPath);

       files.forEach(file => {
         if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
           const id = createId(file);
           const title = createTitle(file);
           const src = \`/images/gallery/\${folder}/\${file}\`;

           images.push({
             id,
             title,
             category: categoryName,
             src,
             srcset: [
               \`\${src} 800w\`,
               \`\${src} 1600w\`
             ],
             alt: title,
             exif: { iso: '', aperture: '', shutter: '', focal: '' },
             story: 'Captured by Lorenzo LDS in Brazil.'
           });
         }
       });
     }
   });

   const favoriteIds = [
     'mumbojumbo-zilda',
     'parrot-zilda',
     'oranges',
     'remela-zilda',
     'diabeetus',
     'yellow-door'
   ];

   images.forEach(img => {
     if (favoriteIds.includes(img.id)) {
       img.favorite = true;
     }
   });

   fs.writeFileSync('./data/images.json', JSON.stringify(images, null, 2));
   console.log(\`Generated images.json with \${images.length} images\`);
   "
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add new images"
   git push
   ```

4. **Netlify auto-deploys** (if you set up continuous deployment)

## 🔄 Continuous Deployment

If you connected Netlify to your GitHub repo:
- Every `git push` triggers an automatic rebuild
- Your site updates automatically in 1-2 minutes

## 🌐 Custom Domain

In Netlify dashboard:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions to configure DNS

## 📊 Build Status

- **Build command:** `npm run build`
- **Output directory:** `out/`
- **Build time:** ~30 seconds
- **Site size:** ~135 images + static assets

## ✨ You're All Set!

Your photography portfolio is now:
- ✅ Fully static and optimized
- ✅ Ready for Netlify deployment
- ✅ Featuring all 135 of your images
- ✅ Fast and responsive
- ✅ Free to host (Netlify free tier)

Just push to GitHub and deploy to Netlify - your portfolio will be live!
