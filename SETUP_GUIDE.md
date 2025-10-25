# TheGrandHub - Complete Setup Guide

This guide will walk you through setting up and deploying your photography portfolio website from scratch.

## 📦 Step 1: Initial Setup

### Install Node.js
1. Download Node.js from https://nodejs.org/ (version 16 or higher)
2. Install and verify:
   ```bash
   node --version
   npm --version
   ```

### Install Project Dependencies
```bash
cd thegrandhub
npm install
```

This will install Next.js, React, Tailwind CSS, and all required packages.

## 🖼️ Step 2: Add Your Images

### For Gallery Images

1. **Prepare your images:**
   - Export high-quality JPGs or PNGs
   - Create two versions:
     - `imagename-800.jpg` (800px wide)
     - `imagename-1600.jpg` (1600px wide)
   - Optionally convert to WebP for better performance

2. **Place images:**
   - Put all gallery images in `public/images/gallery/`

3. **Update `data/images.json`:**
   ```json
   {
     "id": "my-awesome-shot",
     "title": "Butterfly Wing Macro",
     "category": "Macro",
     "src": "/images/gallery/butterfly.jpg",
     "srcset": [
       "/images/gallery/butterfly-800.jpg 800w",
       "/images/gallery/butterfly-1600.jpg 1600w"
     ],
     "alt": "Extreme close-up of a blue morpho butterfly wing showing iridescent scales",
     "exif": {
       "iso": 400,
       "aperture": "f/4.0",
       "shutter": "1/200",
       "focal": "105mm"
     },
     "story": "Caught this beauty resting in morning light at the botanical garden."
   }
   ```

### For Shop Products

1. **Prepare product images:**
   - Square format works best (1:1 aspect ratio)
   - At least 1000x1000px
   - Can be product mockups or the actual photograph

2. **Place images:**
   - Put product images in `public/images/shop/`

3. **Get your Redbubble URLs:**
   - Go to your Redbubble shop
   - For each product, copy the full URL (e.g., `https://www.redbubble.com/people/lorenzolds/works/123456`)

4. **Update `data/products.json`:**
   ```json
   {
     "id": "product-butterfly",
     "title": "Butterfly Wing — Fine Art Print",
     "image": "/images/shop/butterfly-product.jpg",
     "category": "Macro",
     "description": "Stunning macro detail of iridescent butterfly scales",
     "priceRange": "$15-$45",
     "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/works/YOUR_ACTUAL_WORK_ID",
     "tags": ["macro", "butterfly", "nature", "print"]
   }
   ```

## 🎨 Step 3: Customize Your Site

### Update Homepage Hero
Edit `pages/index.jsx`:
- Change the hero background image
- Adjust the tagline if desired

### Update About Page
Edit `pages/about.jsx`:
- Add your portrait image to `public/images/`
- Update the artist statement
- Customize the philosophy section

### Update Social Links
Edit `pages/links.jsx`:
- Replace placeholder URLs with your actual social media links
- Add or remove platforms as needed

## 🧪 Step 4: Test Locally

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` and check:
- ✅ All images load correctly
- ✅ Gallery filters work
- ✅ Lightbox navigation works (try ←/→/ESC/I keys)
- ✅ Theme switcher cycles through Dark → OLED → Light
- ✅ All links work (especially Redbubble links)
- ✅ Mobile responsive (resize browser or use DevTools)

## 🚀 Step 5: Deploy to Netlify

### Method A: Drag & Drop (Fastest)

1. **Build the site:**
   ```bash
   npm run build
   ```
   This creates an `out/` folder with your static site.

2. **Deploy:**
   - Go to https://app.netlify.com/drop
   - Drag the entire `out/` folder onto the page
   - Wait for upload to complete
   - Your site is live!

3. **Customize subdomain:**
   - Click "Site settings"
   - Under "Site details" → "Change site name"
   - Enter `grandboutique` (or your preferred name)
   - Your site will be at `grandboutique.netlify.app`

### Method B: GitHub + Auto-Deploy (Recommended)

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it `thegrandhub`
   - Don't initialize with README

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TheGrandHub portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/thegrandhub.git
   git push -u origin main
   ```

3. **Connect to Netlify:**
   - Log in to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `thegrandhub` repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

4. **Automatic updates:**
   - Any push to the `main` branch will auto-deploy
   - Make changes → commit → push → site updates automatically!

## 🔄 Step 6: Updating Your Site

### Adding New Gallery Images

1. Add image files to `public/images/gallery/`
2. Add entry to `data/images.json`
3. Rebuild and redeploy:
   - **Drag & Drop**: `npm run build` → drag new `out/` folder
   - **GitHub**: Commit and push changes

### Adding New Products

1. Add product image to `public/images/shop/`
2. Add entry to `data/products.json`
3. Rebuild and redeploy

### Updating Text Content

1. Edit the relevant `.jsx` file in `pages/`
2. Rebuild and redeploy

## 📊 Step 7: Monitor Performance

Use Lighthouse to check your site:
```bash
npm run build
npm start
# In another terminal:
npx lighthouse http://localhost:3000 --view
```

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## ⚙️ Optional: Custom Domain

If you want to use `grandboutique.com` instead of `grandboutique.netlify.app`:

1. **Buy the domain** from:
   - Namecheap
   - Google Domains
   - Cloudflare
   - Porkbun
   (About $12/year for .com)

2. **In Netlify:**
   - Go to Domain settings
   - Click "Add custom domain"
   - Enter your domain: `grandboutique.com`
   - Follow the DNS setup instructions

3. **In your domain registrar:**
   - Add the DNS records Netlify provides
   - Usually:
     - A record pointing to Netlify's IP
     - CNAME for www subdomain
   - Wait 24-48 hours for DNS propagation

4. **Enable HTTPS:**
   - Netlify automatically provisions SSL certificate
   - Your site will be secure with https://

## 🐛 Common Issues

### Images not showing
- Check file paths match exactly (case-sensitive!)
- Ensure images are in `public/images/`
- Rebuild after adding new images

### Theme not working
- Clear browser cache
- Check console for JavaScript errors
- Make sure localStorage is enabled

### Build fails
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Changes not appearing
- Hard refresh browser: Cmd/Ctrl + Shift + R
- Clear Netlify deploy cache and retry

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review Next.js docs: https://nextjs.org/docs
- Netlify docs: https://docs.netlify.com/

## ✅ Deployment Checklist

Before going live:
- [ ] All images added and displaying correctly
- [ ] data/images.json updated with your photos
- [ ] data/products.json updated with Redbubble links
- [ ] Social links updated in pages/links.jsx
- [ ] About page customized with your bio
- [ ] Tested on mobile device
- [ ] All Redbubble links working
- [ ] Theme switcher working
- [ ] Gallery filters working
- [ ] Lightbox keyboard navigation tested
- [ ] 404 page working
- [ ] Lighthouse score 90+ on all metrics

---

**You're all set!** Your portfolio is now live and ready to showcase your photography to the world. 🎉
