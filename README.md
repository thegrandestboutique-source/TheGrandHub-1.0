# TheGrandHub - Photography Portfolio Website

A minimalist, photography-first portfolio website for Lorenzo LDS featuring nature, night, and macro photography.

## 🎨 Features

- **Three Theme System**: Dark (default), OLED true-black, and Light themes with localStorage persistence
- **Responsive Gallery**: Masonry grid with category filters (Macro, Wildlife, Night)
- **Interactive Lightbox**: Keyboard navigation (←/→/ESC/I), EXIF data display, and smooth transitions
- **Shop Integration**: Direct links to Redbubble products
- **Performance Optimized**: Static export ready for Netlify, semantic HTML, accessibility-first
- **Mobile-First Design**: Fully responsive on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

3. **Build for production:**
```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 📁 Project Structure

```
thegrandhub/
├── components/
│   ├── Layout.jsx          # Navigation, footer, site structure
│   └── Lightbox.jsx        # Image lightbox with keyboard nav
├── context/
│   └── ThemeContext.jsx    # Theme management (Dark/OLED/Light)
├── data/
│   ├── images.json         # Gallery images data
│   └── products.json       # Shop products data
├── pages/
│   ├── index.jsx           # Homepage with hero
│   ├── gallery.jsx         # Photo gallery with filters
│   ├── shop.jsx            # Shop with Redbubble integration
│   ├── links.jsx           # Social/shop links hub
│   ├── about.jsx           # Artist statement
│   ├── _app.jsx            # App wrapper
│   └── _document.jsx       # HTML document
├── public/
│   └── images/
│       ├── gallery/        # Gallery images
│       └── shop/           # Product images
├── styles/
│   └── globals.css         # Global styles & theme variables
└── data/
    ├── images.json         # ADD YOUR IMAGES HERE
    └── products.json       # ADD YOUR PRODUCTS HERE
```

## 📸 Adding New Images

Edit `data/images.json`:

```json
{
  "id": "unique-id",
  "title": "Your Image Title",
  "category": "Macro",  // Macro, Wildlife, or Night
  "src": "/images/gallery/your-image.jpg",
  "srcset": [
    "/images/gallery/your-image-800.jpg 800w",
    "/images/gallery/your-image-1600.jpg 1600w"
  ],
  "alt": "Descriptive alt text for accessibility",
  "exif": {
    "iso": 400,
    "aperture": "f/2.8",
    "shutter": "1/250",
    "focal": "105mm"
  },
  "story": "Short behind-the-scenes story about the shot"
}
```

**Image Requirements:**
- Place images in `public/images/gallery/`
- Recommended: Create multiple sizes (800px, 1600px) for responsive loading
- Use WebP or AVIF formats for best performance
- Write meaningful alt text for accessibility

## 🛍️ Adding Shop Products

Edit `data/products.json`:

```json
{
  "id": "product-unique-id",
  "title": "Product Title — Print Type",
  "image": "/images/shop/product-image.jpg",
  "category": "Macro",
  "description": "Short product description",
  "priceRange": "$15-$45",
  "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/works/YOUR_WORK_ID",
  "tags": ["macro", "flower", "print"]
}
```

**Product Image Setup:**
- Place product images in `public/images/shop/`
- Use square or product mockup images
- Link to your actual Redbubble product URLs

## 🎨 Customizing Themes

Themes are defined in `styles/globals.css` using CSS variables:

```css
:root {
  --bg: #0B0B0C;        /* Background */
  --fg: #EAEAEA;        /* Foreground/text */
  --border: #232323;    /* Borders */
  --accent: #C8A45D;    /* Accent color */
}
```

To change colors, update the values for each theme (`:root`, `[data-theme="oled"]`, `[data-theme="light"]`).

## 🚢 Deploying to Netlify

### Option 1: Drag & Drop (Easiest)

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag the `out/` folder into the upload area

4. Your site will be live at `yoursite.netlify.app`

5. To customize subdomain:
   - Go to Site Settings → Domain management → Options → Edit site name
   - Change to `grandboutique.netlify.app`

### Option 2: GitHub Integration (Recommended)

1. Push your code to GitHub

2. In Netlify:
   - New site from Git
   - Connect to your GitHub repo
   - Build command: `npm run build`
   - Publish directory: `out`

3. Netlify will auto-deploy on every push to main branch

## 📱 Social Links

Update your social/shop links in `pages/links.jsx`:
- Instagram: https://www.instagram.com/the_grandboutique
- 500px: https://500px.com/lorenzolds
- Redbubble: https://www.redbubble.com/people/lorenzolds/shop
- Email: thegrandestboutique@gmail.com

## ⌨️ Keyboard Shortcuts

In the Lightbox:
- `←` / `→` : Navigate between images
- `ESC` : Close lightbox
- `I` : Toggle EXIF/story information

## 🎯 Performance Tips

1. **Optimize Images:**
   - Use WebP/AVIF formats
   - Generate multiple sizes (@800w, @1600w)
   - Compress with tools like Squoosh or ImageOptim

2. **Lazy Loading:**
   - Images are automatically lazy-loaded below the fold

3. **Lighthouse Score:**
   - Target 90+ on all metrics
   - Test with `npx lighthouse http://localhost:3000`

## ♿ Accessibility

- All images require meaningful `alt` text
- Keyboard navigation throughout
- ARIA labels on interactive elements
- Color contrast meets WCAG AA standards
- Focus states visible on all interactive elements
- Reduced motion support via CSS

## 🔧 Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Styling**: Tailwind CSS + CSS Variables
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Deployment**: Netlify-ready static export

## 📝 Content Management

All content is managed through simple JSON files—no database required:
- `data/images.json` - Gallery photos
- `data/products.json` - Shop items

This makes updates easy:
1. Edit the JSON file
2. Rebuild: `npm run build`
3. Redeploy (automatic if using GitHub + Netlify)

## 🐛 Troubleshooting

**Images not showing:**
- Check file paths in JSON match actual files in `public/images/`
- Ensure images are in `public/` directory (not `src/`)

**Theme not persisting:**
- Check browser localStorage is enabled
- Clear cache and reload

**Build errors:**
- Delete `node_modules/` and `.next/` folders
- Run `npm install` again
- Try `npm run build` again

## 📄 License

This is a custom portfolio site for Lorenzo LDS. Feel free to use the structure/code as inspiration for your own portfolio.

---

**Created for**: Lorenzo LDS  
**Location**: Brazil  
**Contact**: thegrandestboutique@gmail.com  
**Site**: grandboutique.netlify.app (pending deployment)
