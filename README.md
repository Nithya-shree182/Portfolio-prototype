# Nithya's Portfolio

A beautiful, elegant portfolio website showcasing Computer Science, Cyber Security, and Full-Stack Development expertise. Built with modern web technologies and designed with a book-like aesthetic.

## 🌟 Features

- **Elegant Book Design**: Portfolio structured like pages of a book with smooth transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Dark/Light Compatible**: Beautiful design that adapts to user preferences
- **Mobile Navigation**: Side navigation with chapter indicators
- **SEO Optimized**: Meta tags and proper semantic HTML
- **Fast Performance**: Built with Vite for optimal load times

## 📋 Sections

- **Prologue**: Landing page with introduction
- **About**: Personal background and expertise
- **Education**: Academic qualifications
- **Skills**: Technical skills and competencies
- **Projects**: Showcase of completed projects
- **Experience**: Professional work experience
- **Certifications**: Relevant certifications and achievements
- **Epilogue**: Contact information and social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **State Management**: React Query (TanStack Query)
- **Testing**: Vitest + Playwright
- **Code Quality**: ESLint + TypeScript

## 📦 Installation

### Prerequisites
- Node.js 16+ or Bun
- npm, yarn, or bun package manager

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR-USERNAME/Portfolio-prototype.git
cd Portfolio-prototype
```

2. **Install dependencies**
```bash
npm install
# or
bun install
```

3. **Start development server**
```bash
npm run dev
# or
bun run dev
```

The portfolio will be available at `http://localhost:8080`

## 🚀 Build & Deploy

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Watch Mode
```bash
npm run test:watch
```

### Run E2E Tests
```bash
npm run test:e2e
```

## 📁 Project Structure

```
src/
├── components/
│   ├── BookNav.tsx              # Side navigation
│   ├── BookPage.tsx             # Page wrapper component
│   ├── ChapterHeader.tsx         # Chapter header styling
│   ├── NavLink.tsx              # Navigation link component
│   ├── sections/                # Portfolio sections
│   │   ├── LandingPage.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                      # Reusable UI components
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── pages/                       # Page components
├── App.tsx                      # Root component
├── main.tsx                     # Entry point
└── styles/                      # Global styles

public/
├── favicon.svg                  # NR monogram favicon
└── Nithyashree_Resume.pdf      # Resume file

```

## 🎨 Customization

### Colors & Styling
Edit `tailwind.config.ts` to customize the color scheme:
- Primary colors
- Gold accent color
- Typography

### Contact Information
Update contact details in `src/components/sections/ContactSection.tsx`:
- Email: `nithyashreeiyer182005@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/nithyashree-ramesh-13a7a5281/`
- GitHub: `https://github.com/Nithya-shree182`

## 📱 Social Links

- **Email**: nithyashreeiyer182005@gmail.com
- **LinkedIn**: [Nithyashree Ramesh](https://www.linkedin.com/in/nithyashree-ramesh-13a7a5281/)
- **GitHub**: [Nithya-shree182](https://github.com/Nithya-shree182)

## 📄 Resume

Download resume: [Nithyashree_Resume.pdf](public/Nithyashree_Resume.pdf)

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## 🌐 Deployment

This portfolio can be easily deployed to:
- **Vercel**: Automatic deployment from GitHub
- **Netlify**: Connect repository for auto-deployments
- **GitHub Pages**: Static site hosting
- **AWS**: S3 + CloudFront
- **Any static hosting**: Build and upload `dist/` folder

### Quick Vercel Deployment
```bash
npm install -g vercel
vercel
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Nithyashree Ramesh**
- Computer Science | Cyber Security | Full-Stack Development
- Building secure, scalable systems at the intersection of AI & security

---

Made with ❤️ by Nithyashree

