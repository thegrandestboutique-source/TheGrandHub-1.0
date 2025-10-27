# Admin Panel Setup Guide

Your website now has a fully functional admin panel for managing gallery images! Here's everything you need to know.

## Quick Start

1. **Set Your Admin Password**

   The default password is `admin123`. You MUST change this before deploying to production!

   To set a new password:
   ```bash
   node -e "console.log(require('bcryptjs').hashSync('your-new-password-here', 10))"
   ```

   Copy the output and replace the `ADMIN_PASSWORD_HASH` value in `.env.local`

2. **Update Session Secret**

   In `.env.local`, change the `SECRET_COOKIE_PASSWORD` to a random string of at least 32 characters. This is used to encrypt your session cookies.

3. **Access the Admin Panel**

   - Navigate to: `http://localhost:3000/admin/login`
   - Enter your admin password
   - You'll be redirected to the dashboard

## Admin Dashboard Features

### Upload Images

1. **Drag & Drop or Browse**:
   - Drag an image file onto the upload area, or
   - Click the area to browse your computer for an image

2. **Fill in Image Details**:
   - **Title** (required): The display name for your image
   - **Category** (required): Choose from Macro, Wildlife, Night, Pets, Nature, or Human-Made
   - **Alt Text**: Accessibility description (defaults to title if left blank)
   - **EXIF Data**: Camera settings (ISO, Aperture, Shutter Speed, Focal Length)
   - **Description**: Tell the story behind the photo

3. **Click "Upload Image"**:
   - The image will be saved to the appropriate category folder
   - Metadata will be added to `data/images.json`
   - The image appears immediately in your gallery

### Manage Images

- **View All Images**: See all your uploaded images with thumbnails
- **Delete Images**: Click the "Delete" button on any image to remove it
  - This removes both the file and its metadata entry
  - A confirmation dialog will appear before deletion

## File Organization

Images are automatically organized by category:

```
public/images/gallery/
├── macro/          (Macro category images)
├── wildlife/       (Wildlife category images)
├── night/          (Night category images)
├── pets/           (Pets category images)
├── nature/         (Nature category images)
└── human-made/     (Human-Made category images)
```

## Security Notes

### Important Security Measures:

1. **Never commit `.env.local`**: This file is already in `.gitignore`
2. **Use a strong password**: At least 12 characters with mixed case, numbers, and symbols
3. **Change the session secret**: Use a truly random 32+ character string
4. **Enable HTTPS in production**: The session cookie is only secure over HTTPS in production mode

### Production Deployment Checklist:

- [ ] Change admin password hash in `.env.local`
- [ ] Update session secret to a strong random string
- [ ] Ensure `.env.local` is in `.gitignore`
- [ ] Set environment variables on your hosting platform (Vercel, Netlify, etc.)
- [ ] Test login functionality in production
- [ ] Verify file uploads work correctly

## How It Works

### Authentication
- Uses `iron-session` for secure, encrypted session cookies
- Password is hashed with `bcryptjs` (bcrypt algorithm, 10 rounds)
- Sessions last 7 days by default

### File Upload
- Uses `formidable` to handle multipart form data
- Maximum file size: 50MB
- Supported formats: JPEG, PNG, GIF, WebP
- Files are saved with SEO-friendly filenames based on the title

### Image Metadata
- Stored in `data/images.json`
- Automatically includes responsive image srcset
- EXIF data can be manually entered or left blank

## Troubleshooting

### "Unauthorized" Error
- Make sure you're logged in
- Check that your password hash is correct in `.env.local`
- Try logging out and back in

### Upload Fails
- Check file size (must be under 50MB)
- Verify the category directory exists in `public/images/gallery/`
- Check console for detailed error messages

### Images Don't Appear
- Refresh the page after upload
- Check `data/images.json` to verify the entry was added
- Verify the file exists in the correct category folder

## API Routes

The admin panel uses these API endpoints:

- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/session` - Check login status
- `POST /api/images/upload` - Upload new image
- `DELETE /api/images/delete` - Delete image

All image management routes require authentication.

## Support

If you encounter any issues, check:
1. Browser console for JavaScript errors
2. Terminal/server logs for API errors
3. File permissions on the `public/images/gallery/` directories

---

Enjoy your new admin panel! You can now manage your photography portfolio entirely from the web.
