# Nikhil Jain's Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Built with Vite for fast development and optimized builds

## Sections

- **Hero Section**: Animated introduction with typewriter effect
- **About**: Personal information and Code4All initiative
- **Experience**: Professional work experience at TCS and internships
- **Skills**: Technical skills with proficiency indicators
- **Projects**: Featured projects including SwiftCart, Code4All, and more
- **Awards**: Recognitions and certifications
- **Contact**: Contact information and social links

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Lucide React
- **UI Components**: Custom components (Button, Card, Badge)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

To create a production build:

```bash
npm run build
```

### Preview

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── Component/
│   └── Portfolio/          # Main portfolio components
│       ├── Herosection.jsx
│       ├── AboutSection.jsx
│       ├── ExperienceSection.jsx
│       ├── SkillsSection.jsx
│       ├── ProjectSection.jsx
│       ├── AwardSection.jsx
│       ├── ContactSection.jsx
│       └── Navigation.jsx
├── Pages/
│   └── Home.jsx           # Main page component
├── src/
│   ├── components/ui/     # Reusable UI components
│   ├── App.jsx           # Root app component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── index.html
```

## Customization

### Colors

The portfolio uses a custom color scheme defined in `src/index.css`:

- Primary: `#64FFDA` (Teal)
- Background: `#0A192F` (Dark Blue)
- Card: `#112240` (Medium Blue)
- Text: `#CCD6F6` (Light Blue)

### Content

To update your information:

1. Edit the respective section components in `Component/Portfolio/`
2. Update personal details, experience, projects, etc.
3. Replace the profile image URL in `Herosection.jsx`

## Deployment

The project can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Simply run `npm run build` and deploy the `dist` folder.

## License

MIT License - feel free to use this template for your own portfolio!
