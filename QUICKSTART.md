# Quick Start Guide

## First Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Making Changes

### Edit Content
- **Hero text**: Open `app/page.tsx` and modify the content in the `DotGlobeHero` section
- **Capabilities**: Edit `components/sections/capabilities.tsx`
- **Security features**: Edit `components/sections/security.tsx`

### Change Colors
1. Open `app/globals.css`
2. Find the `:root` section
3. Modify the HSL values:
   ```css
   --primary: 168 76% 52%; /* Hue Saturation Lightness */
   ```

### Add New Sections
1. Create a new component in `components/sections/`
2. Import it in `app/page.tsx`
3. Add it between the existing sections

## Testing Your Build

Before deploying, always test the production build:

```bash
npm run build
```

If successful, you'll see:
```
✓ Compiled successfully
✓ Generating static pages
Route (app)
┌ ○ /
└ ○ /_not-found
```

## Deploying to GitHub Pages

### One-Time Setup

1. **Enable GitHub Pages in repository settings:**
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"
   - Click Save

### Every Deploy

Simply push to master:
```bash
git add .
git commit -m "Update website"
git push origin master
```

GitHub Actions will automatically build and deploy. Check the "Actions" tab in your repository to monitor progress.

## Common Issues

### Build fails with "module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Changes not showing after deploy
- Wait 2-3 minutes for GitHub Pages to update
- Hard refresh your browser (Cmd/Ctrl + Shift + R)
- Check GitHub Actions tab for deployment status

### 3D Globe not rendering
- Check browser console for errors
- Ensure WebGL is supported in your browser
- Try in Chrome/Firefox/Safari latest version

## Tips

- **Hot Reload**: Changes in dev mode update instantly
- **Component Preview**: Modify one section at a time
- **Mobile Testing**: Use browser dev tools device emulation
- **Performance**: Run Lighthouse in Chrome DevTools

## Need Help?

- Check `README.md` for detailed documentation
- Review the existing components for examples
- Contact: press@civicbase.ai
