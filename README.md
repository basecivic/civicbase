# Civic Base AI Website

Modern, interactive website for Civic Base AI built with Next.js, React, TypeScript, and Tailwind CSS. Features a 3D globe hero, animated text effects, and an interactive workflow builder.

## Features

- **3D Rotating Globe Hero** - Three.js powered interactive globe
- **Animated Text Effects** - Glitch-style text animations
- **Interactive Workflow Builder** - Drag-and-drop workflow nodes (inspired by n8n/Palantir)
- **Fully Responsive** - Mobile-first design
- **Static Export** - Optimized for GitHub Pages deployment
- **Dark Theme** - Professional mint green accent color

## Tech Stack

- **Next.js 16** - React framework with static export
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Three.js & React Three Fiber** - 3D graphics
- **shadcn/ui** - Beautiful component library

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

Build the static site:
```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment:

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Save

2. **Push to master branch:**
   ```bash
   git add .
   git commit -m "Deploy new Next.js site"
   git push origin master
   ```

3. The GitHub Actions workflow will automatically:
   - Install dependencies
   - Build the Next.js site
   - Export static files
   - Deploy to GitHub Pages

Your site will be live at `https://civicbase.ai` (or your configured domain).

### Manual Deployment

If you prefer manual deployment:

1. Build the site:
   ```bash
   npm run build
   ```

2. The `out/` directory contains your static site
3. Push the contents of `out/` to your `gh-pages` branch or main branch depending on your GitHub Pages configuration

## Project Structure

```
civicbaseweb/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── globe-hero.tsx      # 3D globe hero component
│   │   ├── special-text.tsx    # Animated glitch text
│   │   ├── workflow-builder.tsx # Interactive workflow builder
│   │   ├── badge.tsx           # UI badge component
│   │   ├── button.tsx          # UI button component
│   │   └── card.tsx            # UI card component
│   └── sections/
│       ├── capabilities.tsx    # Capabilities section
│       ├── security.tsx        # Security features section
│       ├── cta.tsx            # Call-to-action section
│       └── footer.tsx         # Footer component
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts` and `app/globals.css`:
- Primary color: `--primary: 168 76% 52%` (mint green)
- Background: `--background: 0 0% 2%` (near black)

### Content
- Hero section: `app/page.tsx`
- Capabilities: `components/sections/capabilities.tsx`
- Security features: `components/sections/security.tsx`
- CTA: `components/sections/cta.tsx`

### Fonts
Currently using:
- DM Sans (headings)
- Inter (body text)
- JetBrains Mono (code/technical text)

Change fonts in `app/layout.tsx`.

## Performance

The site is optimized for performance:
- Static generation
- Optimized images
- Code splitting
- Tree shaking
- Minified CSS and JS

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

ISC

## Contact

For questions or support:
- Email: press@civicbase.ai
- Schedule: [https://calendly.com/basecivic/30min](https://calendly.com/basecivic/30min)
