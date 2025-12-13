# Ayoola Adedeji - Portfolio Website

A modern, responsive developer portfolio built with **Next.js 14**, featuring smooth animations, dark mode, and a working contact form.

![Portfolio Preview](/public/profile.jpg)

## ✨ Features

- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Animations** - Powered by Framer Motion
- **Contact Form** - Real email delivery via Resend
- **Resume Page** - Print-to-PDF functionality
- **SEO Optimized** - Sitemap, robots.txt, and metadata

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Resend
- **Deployment**: Vercel

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Create a `.env` file:
   ```
   RESEND_API_KEY=re_your_api_key
   ```

## 📁 Project Structure

```
src/
├── app/           # Pages (home, resume)
├── actions/       # Server actions (email)
├── components/    # UI components
│   ├── layout/    # Navbar, Footer
│   ├── sections/  # Hero, About, Skills, etc.
│   └── ui/        # Buttons, Inputs, Cards
├── hooks/         # Custom React hooks
└── lib/           # Data and utilities
```

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel deployment instructions.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ❤️ by Ayoola Adedeji
