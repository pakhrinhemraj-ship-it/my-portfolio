# 🎆 HEMRAJ PORTFOLIO — CYBER GREEN THEME

Complete standalone Next.js frontend with futuristic cyber green holographic design.

## ✨ Features

- ✅ **Cyber Green Theme** — Neon glow effects, HUD panels, scan lines
- ✅ **Fully Responsive** — Mobile-first design
- ✅ **Modern Stack** — Next.js 16, React 18, Tailwind CSS, Framer Motion
- ✅ **Connected to Backend** — Integrates with portfolio backend API
- ✅ **Dark Theme** — Beautiful dark UI throughout
- ✅ **Normal Mouse** — No custom cursor, uses system mouse
- ✅ **Contact Form** — Full integration with backend contact endpoint

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation (3 steps)

**Step 1 — Install dependencies:**
```bash
npm install
```

**Step 2 — Configure backend URL (optional):**
Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Step 3 — Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx           ← Home page (Hero + Projects + Contact)
│   │   ├── layout.tsx         ← Root layout
│   │   └── globals.css        ← Global styles & cyber theme
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Navbar.tsx     ← Navigation bar
│   │   │   ├── Button.tsx     ← Reusable button component
│   │   │   ├── Footer.tsx     ← Footer
│   │   │   └── ScrollProgress.tsx ← Scroll indicator
│   │   │
│   │   └── sections/
│   │       ├── Hero.tsx       ← Hero section with intro
│   │       ├── Projects.tsx   ← Projects showcase
│   │       └── Contact.tsx    ← Contact form
│   │
│   ├── lib/
│   │   ├── utils.ts          ← Utility functions
│   │   └── animations.ts     ← Framer Motion animations
│   │
│   └── constants/
│       ├── navLinks.ts       ← Navigation links
│       └── metadata.ts       ← Site metadata
│
├── public/               ← Static assets (add images here)
├── package.json         ← Dependencies
├── tailwind.config.ts   ← Tailwind configuration
├── tsconfig.json        ← TypeScript configuration
└── .env.local          ← Environment variables
```

## 🎨 Colors & Theme

```css
Primary Color:   #00ff88 (Cyber Green)
Accent Color:    #00d4aa (Teal)
Background:      #020d0a (Deep Dark)
Text:            #a0c4b8 (Silver)
```

All colors are defined in `globals.css` and `tailwind.config.ts`.

## 🔗 Backend Integration

The frontend is designed to work with your backend running on `http://localhost:5000/api`.

**Contact Form Endpoint:**
```
POST /api/contact
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

Make sure your backend is running before testing the contact form!

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Change Your Name/Email
Edit `src/constants/metadata.ts`:
```ts
export const siteMetadata = {
  name: "Your Name",
  email: "your@email.com",
  // ...
};
```

### Update Projects
Edit `src/components/sections/Projects.tsx`:
```ts
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "...",
    technologies: ["React", "Next.js"],
    github: "https://github.com/...",
    live: "https://...",
  },
  // ...
];
```

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --cyber: #00ff88;  /* Change primary color */
  --teal: #00d4aa;   /* Change accent color */
  /* ... */
}
```

## 📦 Built With

- **Framework:** Next.js 16.2.7
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **Notifications:** React Hot Toast
- **Language:** TypeScript

## 🎯 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Module not found errors?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**API not connecting?**
- Ensure backend is running on `http://localhost:5000`
- Check `.env.local` has correct `NEXT_PUBLIC_API_URL`
- Restart the dev server after env changes

## 📱 Mobile Responsive

The design is fully responsive on:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🔐 Environment Variables

Create `.env.local` in the root:
```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📄 License

MIT License - Feel free to use this template for your portfolio!

## 🎉 You're Ready!

Your cyber green portfolio is ready to go. Customize it, add your projects, and show the world your work!

For more help, check the individual component files for detailed comments.

---

**Made with 🎆 for an amazing portfolio**
