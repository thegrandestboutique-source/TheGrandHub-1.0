# Quick Start - Get Your Site Live in 10 Minutes! 🚀

## 1. Download & Install (2 minutes)

```bash
cd thegrandhub
npm install
```

## 2. Test Locally (2 minutes)

```bash
npm run dev
```

Open http://localhost:3000 - Your site is running!

## 3. Add Your First Image (3 minutes)

1. Put an image in `public/images/gallery/` (e.g., `myshot.jpg`)

2. Edit `data/images.json` - add this entry:

```json
{
  "id": "my-first-shot",
  "title": "My Amazing Photo",
  "category": "Macro",
  "src": "/images/gallery/myshot.jpg",
  "srcset": ["/images/gallery/myshot.jpg 1600w"],
  "alt": "Description of my photo for accessibility",
  "exif": {
    "iso": 400,
    "aperture": "f/2.8",
    "shutter": "1/250",
    "focal": "50mm"
  },
  "story": "The story behind this shot"
}
```

Refresh your browser - image appears in gallery!

## 4. Deploy to Netlify (3 minutes)

### Option A: Drag & Drop (Easiest!)

```bash
npm run build
```

1. Go to https://app.netlify.com/drop
2. Drag the `out/` folder
3. Done! Your site is live at `random-name-123.netlify.app`

### Option B: Change the subdomain

1. In Netlify, click "Site settings"
2. "Change site name" → enter `grandboutique`
3. Your site is now at `grandboutique.netlify.app` ✨

## That's It! 🎉

Your minimalist photography portfolio is live!

### Next Steps:
- Add more images to `data/images.json`
- Add products to `data/products.json`
- Update social links in `pages/links.jsx`
- Customize the About page in `pages/about.jsx`

### Need More Details?
- See `README.md` for full documentation
- See `SETUP_GUIDE.md` for step-by-step instructions

### Quick Commands:

```bash
npm run dev      # Run locally
npm run build    # Build for production
```

---

**Pro Tip**: The site comes with placeholder data. Just start replacing images and info with your own!
