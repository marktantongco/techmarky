# TechMarky Landing Page

A modern, responsive landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Built with Next.js 15 for optimal speed
- 🎭 **Interactive Components**:
  - Demo Modal with smooth transitions
  - Animated Carousel/Slider
  - Contact Form with validation
  - Portfolio showcase
  - Client logos section
  - Feature highlights
- 🔒 **reCAPTCHA Integration** - Spam protection for contact form
- 🌙 **Dark Mode Support** - Automatic dark/light theme
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 🚀 **CI/CD Pipeline** - GitHub Actions workflow included

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Notifications**: React Hot Toast
- **Security**: Google reCAPTCHA

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/marktantongco/techmarky.git
cd techmarky
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your reCAPTCHA keys to `.env.local`:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

Get your reCAPTCHA keys from: https://www.google.com/recaptcha/admin

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Run ESLint:
```bash
npm run lint
```

## 📁 Project Structure

```
techmarky/
├── app/
│   ├── api/contact/        # Contact form API endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Carousel.tsx        # Animated carousel
│   ├── ContactForm.tsx     # Contact form with validation
│   ├── DemoModal.tsx       # Demo modal component
│   ├── Features.tsx        # Features section
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Logos.tsx           # Client logos section
│   ├── Navbar.tsx          # Navigation bar
│   └── Portfolio.tsx       # Portfolio showcase
├── .github/workflows/      # CI/CD configuration
└── public/                 # Static assets
```

## 🔧 Configuration

### reCAPTCHA Setup

1. Visit https://www.google.com/recaptcha/admin
2. Register a new site with reCAPTCHA v2 (Checkbox)
3. Add your domains (localhost for development)
4. Copy the Site Key and Secret Key to your `.env.local`

### Contact Form Backend

The contact form currently logs submissions. To enable email sending:

1. Choose an email service (SendGrid, AWS SES, etc.)
2. Update `app/api/contact/route.ts` with your email logic
3. Add necessary API keys to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy!

## 📝 CI/CD

GitHub Actions workflow runs on every push and PR:
- ✅ Build verification
- ✅ Linting checks
- ✅ Multi-version Node.js testing (18.x, 20.x)
- ✅ PR comments with build status

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mark Tantongco**
- GitHub: [@marktantongco](https://github.com/marktantongco)

---

Built with ❤️ using Next.js and TypeScript