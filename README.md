# Kyle Zhang - Music Artist Portfolio Website

A modern, responsive portfolio website for music artist Kyle Zhang. Built with pure HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Dynamic navigation, form validation, and user notifications
- **Sections Include**:
  - Hero section with call-to-action buttons
  - About section with artist bio and social links
  - Music section showcasing albums and singles
  - Shows section listing upcoming performances
  - Contact form for fan engagement

## Technologies Used

- HTML5
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd music-portfolio
   ```

2. Open the website:
   - **Option 1**: Simply open `index.html` in your web browser
   - **Option 2**: Use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. Navigate to `http://localhost:8000` in your browser

## File Structure

```
music-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # Project documentation
```

## Features Detail

### Navigation
- Sticky navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### Hero Section
- Eye-catching gradient design
- Animated entrance effects
- Call-to-action buttons

### About Section
- Artist biography
- Social media integration
- Placeholder for artist photo

### Music Section
- Album/single showcase cards
- Hover effects and animations
- Interactive listen buttons

### Shows Section
- Upcoming performance dates
- Venue information
- Ticket purchase links

### Contact Section
- Functional contact form
- Form validation
- Success/error notifications

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... other colors */
}
```

### Content
- Update artist information in `index.html`
- Add real images by replacing placeholder elements
- Modify social media links in the About section
- Update show dates and venues in the Shows section

### Functionality
- Customize animations in `styles.css`
- Modify interactive features in `script.js`
- Add backend integration for the contact form

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add music player integration (Spotify, Apple Music)
- [ ] Integrate with ticketing platforms
- [ ] Add backend for contact form
- [ ] Include photo gallery
- [ ] Add video section for music videos
- [ ] Implement blog/news section
- [ ] Add email newsletter signup

## License

All rights reserved. Copyright 2024 Kyle Zhang.

## Contact

For inquiries about this website, please visit the contact section at [contact@kylezhang.com](mailto:contact@kylezhang.com)
