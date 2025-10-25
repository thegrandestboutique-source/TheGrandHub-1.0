# TheGrandHub - Complete Website Package

## 🎉 What You've Got

A fully functional, production-ready photography portfolio website built to your exact specifications!

### ✨ Key Features Delivered

✅ **Minimalist Design** - Photography-first with generous whitespace  
✅ **Three Theme System** - Dark (default), OLED true-black, and Light  
✅ **Responsive Gallery** - Masonry grid with Macro/Wildlife/Night filters  
✅ **Interactive Lightbox** - Keyboard navigation (←/→/ESC/I) with EXIF display  
✅ **Shop Integration** - Direct Redbubble product links  
✅ **Links Hub** - All your social media and shop platforms  
✅ **About Page** - Your artist statement already included  
✅ **Fully Responsive** - Perfect on mobile, tablet, and desktop  
✅ **Accessibility First** - WCAG AA compliant, keyboard navigable  
✅ **Performance Optimized** - Static export, lazy loading, fast load times  
✅ **Netlify Ready** - Deploy in minutes to grandboutique.netlify.app  

### 📁 Complete File Structure

```
thegrandhub/
├── 📄 Documentation
│   ├── README.md          # Full documentation
│   ├── QUICKSTART.md      # 10-minute deployment guide
│   ├── SETUP_GUIDE.md     # Detailed step-by-step setup
│   └── IMAGE_SETUP.md     # How to add your photos
│
├── 🎨 Components
│   ├── Layout.jsx         # Navigation & footer
│   └── Lightbox.jsx       # Image lightbox with EXIF
│
├── 🎯 Context
│   └── ThemeContext.jsx   # Theme switching logic
│
├── 📊 Data (Edit these!)
│   ├── images.json        # Your gallery photos
│   └── products.json      # Your shop products
│
├── 📄 Pages
│   ├── index.jsx          # Homepage with hero
│   ├── gallery.jsx        # Photo gallery
│   ├── shop.jsx           # Redbubble shop
│   ├── links.jsx          # Social links hub
│   ├── about.jsx          # Artist statement
│   ├── 404.jsx            # Custom error page
│   ├── _app.jsx           # App wrapper
│   └── _document.jsx      # HTML document
│
├── 🎨 Styles
│   └── globals.css        # Theme variables & global styles
│
├── 📦 Config Files
│   ├── package.json       # Dependencies
│   ├── next.config.js     # Next.js config
│   ├── tailwind.config.js # Tailwind CSS config
│   ├── postcss.config.js  # PostCSS config
│   ├── netlify.toml       # Netlify deployment
│   └── .gitignore         # Git ignore rules
│
└── 📁 public/images/      # Put your photos here!
    ├── gallery/           # Gallery images
    └── shop/              # Product images
```

## 🚀 Getting Started (Choose Your Speed)

### ⚡ Fast Track (10 minutes)
Read: `QUICKSTART.md`

### 📚 Detailed Setup (30 minutes)
Read: `SETUP_GUIDE.md`

### 📖 Full Documentation
Read: `README.md`

## 🎯 Immediate Next Steps

1. **Install dependencies:**
   ```bash
   cd thegrandhub
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

3. **Add your images:**
   - Place photos in `public/images/gallery/`
   - Update `data/images.json`
   - See `IMAGE_SETUP.md` for details

4. **Deploy to Netlify:**
   ```bash
   npm run build
   ```
   - Go to https://app.netlify.com/drop
   - Drag the `out/` folder
   - Set subdomain to `grandboutique`
   - Live at `grandboutique.netlify.app`! 🎉

## 🎨 Customization Points

### Essential Updates (Do These First)

1. **Add Your Images**
   - Edit: `data/images.json`
   - Add files to: `public/images/gallery/`

2. **Add Shop Products**
   - Edit: `data/products.json`
   - Add files to: `public/images/shop/`
   - Update Redbubble URLs

3. **Update Social Links**
   - Edit: `pages/links.jsx`
   - Your Instagram, 500px already included!

4. **Customize About Page**
   - Edit: `pages/about.jsx`
   - Add your portrait to: `public/images/`

### Optional Customizations

- **Change Colors**: Edit `styles/globals.css`
- **Modify Homepage**: Edit `pages/index.jsx`
- **Add Pages**: Create new `.jsx` files in `pages/`
- **Change Fonts**: Update imports in `styles/globals.css`

## 💻 Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **UI Library**: React 18
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Fonts**: Playfair Display (serif) + Inter (sans)
- **Deployment**: Netlify (optimized)
- **Performance**: Lazy loading, responsive images, minimal JS

## 📱 Features Breakdown

### Home Page
- Full-screen hero with tagline
- Call-to-action buttons (Gallery, Shop)
- Featured categories with images
- Introduction section

### Gallery Page
- Masonry/column layout (responsive)
- Category filters (All, Macro, Wildlife, Night)
- Hover effects showing title + category
- Click to open lightbox

### Lightbox
- Full-screen image viewing
- Keyboard navigation: ← → (navigate), ESC (close), I (toggle info)
- EXIF data display (ISO, aperture, shutter, focal length)
- "Behind the Shot" story text
- Previous/Next buttons

### Shop Page
- 6 featured products in grid
- Each product card shows:
  - Image
  - Title
  - Description
  - Price range
  - "Buy on Redbubble" button (opens in new tab)
- "View All on Redbubble" CTA at top & bottom

### Links Page
- Large, tappable cards for each platform
- Icons for: Instagram, 500px, Redbubble, Pinterest, YouTube/TikTok, Fine Art America, Email
- External link indicators

### About Page
- Artist portrait
- Your full artist statement (already written!)
- Photography focus areas (Macro, Wildlife, Night)
- Philosophy section
- Email contact button

### Theme System
- Dark theme (default): #0B0B0C background
- OLED theme: True black #000000 background
- Light theme: #FFFFFF background
- Toggle button in navigation
- Persists via localStorage
- System preference detection

## 🎯 Accessibility Features

- Semantic HTML throughout
- All images have meaningful alt text
- Keyboard navigation for all interactions
- ARIA labels on icons and controls
- Focus states visible
- Color contrast meets WCAG AA
- Reduced motion support

## 📊 Performance Optimizations

- Static export (no server needed)
- Lazy loading for images
- Responsive images with srcset
- Minimal JavaScript bundle
- CSS variables for theming (no JS theme switching overhead)
- Optimized fonts loading

## 🌟 Your Content (Pre-Loaded)

### Already Configured:
- ✅ Artist name: Lorenzo LDS
- ✅ Location: Brazil
- ✅ Tagline: "Nature, night, and macro — quiet moments turned into bold art."
- ✅ Instagram: @the_grandboutique
- ✅ 500px: lorenzolds
- ✅ Redbubble: lorenzolds
- ✅ Email: thegrandestboutique@gmail.com
- ✅ Artist statement (from your brief)

### You Need to Add:
- 📸 Your actual photo files
- 🖼️ Your portrait photo
- 🎨 Product mockup images (optional - can use gallery images)

## 🐛 Troubleshooting

Quick fixes for common issues:

**Images not showing?**
- Check file paths in JSON match actual files
- Ensure images are in `public/images/`

**Theme not persisting?**
- Clear browser cache
- Check localStorage is enabled

**Build errors?**
```bash
rm -rf node_modules .next
npm install
npm run build
```

Full troubleshooting in README.md

## 📞 Support Resources

- Full README: `README.md`
- Setup Guide: `SETUP_GUIDE.md`
- Quick Start: `QUICKSTART.md`
- Image Guide: `IMAGE_SETUP.md`

## ✅ Pre-Launch Checklist

Before deploying:
- [ ] Added gallery images to `public/images/gallery/`
- [ ] Updated `data/images.json` with your photos
- [ ] Added product images to `public/images/shop/`
- [ ] Updated `data/products.json` with Redbubble links
- [ ] Added portrait to About page
- [ ] Tested locally with `npm run dev`
- [ ] Tested theme switcher (Dark → OLED → Light)
- [ ] Tested gallery filters
- [ ] Tested lightbox keyboard navigation (←/→/ESC/I)
- [ ] Checked all links work
- [ ] Tested on mobile (Chrome DevTools)
- [ ] Built successfully with `npm run build`

## 🎉 You're Ready!

Everything is set up according to your specifications. Just add your images, deploy to Netlify, and your stunning photography portfolio will be live!

**Estimated time to go live:** 10-30 minutes (depending on how many photos you add)

---

**Built for**: Lorenzo LDS  
**Project**: TheGrandHub  
**Deployment**: grandboutique.netlify.app (pending your deployment)  
**Status**: Production-ready ✨
