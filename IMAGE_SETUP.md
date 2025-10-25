# 📸 IMAGE SETUP GUIDE

## IMPORTANT: Add Your Own Images!

This website template comes with placeholder image paths in the JSON files, but you need to add your actual image files.

## Required Images

### Gallery Images (public/images/gallery/)

Based on `data/images.json`, you need:
- dahlia.jpg (or dahlia-800.jpg, dahlia-1600.jpg)
- milkyway.jpg
- toucan.jpg
- dewdrop.jpg
- fireflies.jpg
- jaguar.jpg

### Shop Product Images (public/images/shop/)

Based on `data/products.json`, you need:
- dahlia-print.jpg
- milkyway-print.jpg
- toucan-print.jpg
- dewdrop-print.jpg
- fireflies-print.jpg
- jaguar-print.jpg

### Other Images

- A portrait photo for the About page (suggested: public/images/portrait.jpg)
- A hero image for the homepage (uses the dahlia image by default)

## How to Add Images

### Option 1: Use Your Own Photos

1. Export your photos as JPG or PNG
2. Optionally create multiple sizes:
   - Original full size
   - 1600px wide version (add -1600 to filename)
   - 800px wide version (add -800 to filename)
3. Place them in the appropriate folders
4. Update the JSON files to match your filenames

### Option 2: Use Placeholder Images (for testing)

For quick testing, you can use free stock photos from:
- https://unsplash.com (high quality, free)
- https://pexels.com (high quality, free)
- https://pixabay.com (free)

Search for:
- "macro flower" for dahlia
- "milky way" for night sky
- "toucan" for wildlife
- "water droplet macro" for dewdrop
- "fireflies" or "light trails" for fireflies
- "jaguar wildlife" for jaguar

Download, rename to match the JSON entries, and place in the correct folders.

## Image Optimization Tips

1. **Resize appropriately:**
   - Gallery: 1600-2400px on longest side
   - Thumbnails: 800px is plenty

2. **Compress images:**
   - Use https://squoosh.app/ (free, web-based)
   - Or ImageOptim (Mac), FileOptimizer (Windows)
   - Target: under 500KB for gallery images

3. **Use modern formats:**
   - WebP provides 25-35% better compression than JPEG
   - Export both JPG and WebP versions if possible

4. **Name files consistently:**
   - Use lowercase
   - Use hyphens not spaces: `macro-dahlia.jpg` not `Macro Dahlia.jpg`
   - Match the names in your JSON files exactly

## Quick Test

To test if your images are working:

1. Put ONE image in `public/images/gallery/test.jpg`
2. Add this to `data/images.json`:
   ```json
   {
     "id": "test-image",
     "title": "Test Image",
     "category": "Macro",
     "src": "/images/gallery/test.jpg",
     "srcset": ["/images/gallery/test.jpg 1600w"],
     "alt": "Test image description",
     "exif": {
       "iso": 400,
       "aperture": "f/2.8",
       "shutter": "1/250",
       "focal": "50mm"
     },
     "story": "This is a test"
   }
   ```
3. Run `npm run dev`
4. Visit the Gallery page - you should see your test image!

## Need Help?

If images aren't showing:
- Check the browser console for errors (F12)
- Verify file paths match exactly (case-sensitive!)
- Make sure images are in the `public/` directory, not anywhere else
- Try with a simple test image first to isolate the issue

---

Once you have your images in place, your beautiful photography portfolio will be complete! 🎨
