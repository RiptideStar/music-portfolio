# Kyle Zhang - Music Artist Portfolio

A modern, high-performance portfolio website for music artist Kyle Zhang, built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15 App Router**: Leveraging the latest Next.js features for optimal performance
- **React 19**: Built with the newest React version for cutting-edge capabilities
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS for rapid, responsive design
- **SEO Optimized**: Built-in metadata and semantic HTML for better search rankings
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Engaging user experience with CSS animations
- **Interactive Components**: Dynamic navigation, form validation, and real-time notifications
- **Production Ready**: Optimized for deployment on Vercel, Netlify, or any Node.js hosting

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd music-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
music-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation component
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Music.tsx       # Music showcase
│       ├── Shows.tsx       # Upcoming shows
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/music-portfolio)

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Deploy to any Node.js hosting

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Customization

### Update Content

Edit the component files in `src/components/` to update:
- Artist name and branding
- About section biography
- Music releases
- Show dates and venues
- Contact information

### Customize Colors

Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-color: #6366f1;    /* Indigo */
  --secondary-color: #8b5cf6;  /* Purple */
  --accent-color: #ec4899;     /* Pink */
  /* ... other colors */
}
```

Or modify Tailwind theme in `tailwind.config.ts`.

### Add Images

1. Place images in the `public/` directory
2. Replace placeholder elements with Next.js Image components:

```tsx
import Image from 'next/image';

<Image
  src="/artist-photo.jpg"
  alt="Kyle Zhang"
  width={300}
  height={300}
  className="rounded-3xl"
/>
```

### Social Media Links

Update the social media links in `src/components/About.tsx` to point to your actual profiles.

### Contact Form Integration

To make the contact form functional, integrate with a backend service:

- **Email services**: SendGrid, Mailgun, Resend
- **Form handlers**: Formspree, Getform
- **Serverless functions**: Vercel Functions, Netlify Functions

Example using Vercel Functions:
1. Create `api/contact/route.ts` in the `app` directory
2. Implement POST handler with your email service
3. Update Contact component to POST to `/api/contact`

## Features Breakdown

### SEO Optimization
- Metadata configured in `app/layout.tsx`
- Semantic HTML throughout
- Open Graph tags for social sharing

### Performance
- Automatic code splitting
- Image optimization with Next.js Image
- CSS optimization with Tailwind
- Server-side rendering for fast initial load

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly interactive elements

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Spotify/Apple Music API integration
- [ ] Blog/news section with CMS
- [ ] E-commerce for merch
- [ ] Newsletter signup with email service
- [ ] Event ticketing integration
- [ ] Music player component
- [ ] Photo/video gallery
- [ ] Admin dashboard for content management

## License

All rights reserved. Copyright 2024 Kyle Zhang.

## Support

For issues or questions, please create an issue in the repository or contact [contact@kylezhang.com](mailto:contact@kylezhang.com)

---

Built with ❤️ using Next.js
