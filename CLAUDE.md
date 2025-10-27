# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TheGrandHub is a photography portfolio website built with Next.js 14 as a **static export** for deployment on Netlify. It features a three-theme system (Dark, OLED, Light), an admin panel for image management, and a responsive gallery with category filtering.

## Development Commands

```bash
# Development server
npm run dev

# Production build (creates static export in .next/)
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Architecture

### Static Export Configuration
- Next.js is configured for static export (`next.config.js`) with `images.unoptimized: true` and `trailingSlash: true`
- Build output directory changed from default `out/` to `.next/` (see recent commits)
- All pages must be pre-renderable (no dynamic server-side rendering)

### Data Management Pattern
This site uses **JSON files as the database** rather than a traditional database:
- `data/images.json` - Gallery image metadata and EXIF data
- `data/categories.json` - Photo category definitions with placeholder images
- `data/products.json` - Shop product listings

When modifying these files via API routes, the entire file must be read, modified in memory, and written back atomically.

### Theme System
- Three themes: `dark` (default), `oled` (true black), `light`
- Theme state managed by `ThemeContext` (`context/ThemeContext.jsx`)
- Theme persistence via `localStorage` with SSR-safe hydration
- CSS variables defined in `styles/globals.css` for each theme (`[data-theme="..."]`)
- Theme applied via `data-theme` attribute on `<html>` element
- Theme cycling function: Dark → OLED → Light → Dark

### Authentication System
- Session-based auth using `iron-session` (7-day cookie lifetime)
- Password hashing with `bcryptjs` (10 rounds)
- Session configuration in `lib/auth.js`
- Environment variables required:
  - `SECRET_COOKIE_PASSWORD` - 32+ character string for session encryption
  - `ADMIN_PASSWORD_HASH` - bcrypt hash of admin password
- Auth utilities: `getSession(req, res)`, `requireAuth(req, res)`
- Protected routes check `session.isLoggedIn` flag

### File Upload Architecture
- Uses `formidable` library for multipart form parsing (50MB max file size)
- Images organized by category in `public/images/gallery/{category}/`
- Filenames sanitized from image titles (lowercase, spaces to hyphens)
- API route: `POST /api/images/upload`
- Automatic metadata generation including `srcset` for responsive images

### Gallery System
- **Favorites**: Images with `favorite: true` flag displayed in dedicated section
- **Categories**: Dynamically filtered from `categories.json`
- **Filtering**: URL query param support (`?filter=Category`)
- **Lightbox**: Keyboard navigation (←/→ arrows, ESC, I for info toggle)
- **Layout**: CSS columns masonry grid (`columns-1 md:columns-2 lg:columns-3`)

### API Routes

All API routes in `pages/api/`:

**Auth Routes:**
- `POST /api/auth/login` - Authenticate admin
- `POST /api/auth/logout` - Clear session
- `GET /api/auth/session` - Check auth status

**Image Management (require auth):**
- `POST /api/images/upload` - Upload new image with metadata
- `DELETE /api/images/delete` - Delete image file and metadata entry
- `POST /api/images/toggle-favorite` - Toggle favorite flag

**Category Management:**
- `POST /api/categories/update-placeholder` - Update category placeholder image

## Key Technical Patterns

### JSON File Updates
When updating JSON files (images.json, categories.json), always:
1. Read current file with `fs.readFileSync()`
2. Parse JSON with `JSON.parse()`
3. Modify in memory
4. Write with proper formatting: `JSON.stringify(data, null, 2)`

### SSR-Safe Client State
Components using browser APIs (localStorage, matchMedia) must:
1. Check `typeof window !== 'undefined'`
2. Use `useState` with safe defaults
3. Apply client-only effects in `useEffect`
4. See `ThemeContext.jsx` for reference pattern

### Image Metadata Structure
```json
{
  "id": "unique-slug",
  "title": "Display Title",
  "category": "Macro|Wildlife|Night|Pets",
  "src": "/images/gallery/filename.jpg",
  "srcset": [
    "/images/gallery/filename.jpg 800w",
    "/images/gallery/filename.jpg 1600w"
  ],
  "alt": "Accessibility description",
  "favorite": true,  // optional
  "exif": {
    "iso": 400,
    "aperture": "f/2.8",
    "shutter": "1/250",
    "focal": "50mm"
  },
  "story": "Behind-the-scenes description"
}
```

## Admin Panel Workflow

1. Login at `/admin/login` with password from `.env.local`
2. Dashboard at `/admin/dashboard` (protected route)
3. Upload: Drag-and-drop or browse → Fill form → Submit
4. Images auto-organized to `public/images/gallery/{category}/`
5. Metadata auto-appended to `data/images.json`
6. Delete: Removes both file and JSON entry

## Security Considerations

- Never commit `.env.local` (already in `.gitignore`)
- Admin password must be changed from default `admin123` before production
- Session cookies are `httpOnly`, `sameSite: lax`, and `secure` in production
- All file uploads validated for size (50MB) and type
- No direct file path inputs (prevents path traversal)

## Deployment Notes

- Build creates static files in `.next/` directory
- Netlify publish directory: `.next`
- Environment variables must be set in Netlify dashboard:
  - `SECRET_COOKIE_PASSWORD`
  - `ADMIN_PASSWORD_HASH`
- Static export means no Next.js server-side features (API routes won't work in production as static export)
- **Note**: The admin panel API routes will NOT function in static export mode - consider migrating to Vercel or serverless functions for admin features

## Common Tasks

### Adding a New Category
1. Add entry to `data/categories.json` with id, name, description, placeholder
2. Create directory: `public/images/gallery/{category-name}/`
3. Category automatically appears in gallery filter UI

### Changing Theme Colors
Edit CSS variables in `styles/globals.css`:
- `:root` - Dark theme
- `[data-theme="oled"]` - OLED theme
- `[data-theme="light"]` - Light theme
- Variables: `--bg`, `--fg`, `--border`, `--accent`

### Generating Password Hash
```bash
node -e "console.log(require('bcryptjs').hashSync('your-password', 10))"
```

## Tech Stack

- **Framework**: Next.js 14 (Static Export mode)
- **Styling**: Tailwind CSS + CSS Variables
- **Auth**: iron-session + bcryptjs
- **File Upload**: formidable
- **EXIF Reading**: exifreader (available but not actively used)
- **Deployment**: Netlify-ready
