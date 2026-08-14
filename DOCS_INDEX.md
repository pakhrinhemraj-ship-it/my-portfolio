# 📚 DOCUMENTATION INDEX

Your complete guide to the portfolio project. Start here!

---

## 🎯 Quick Links

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **[README.md](README.md)** | Project overview & features | 5 min |
| **[SETUP_GUIDE.md](SETUP_GUIDE.md)** | Installation & customization | 10 min |
| **[IMAGE_GUIDE.md](IMAGE_GUIDE.md)** | Add & manage images | 8 min |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Deploy to production | 15 min |
| **[FAQ.md](FAQ.md)** | Answers to common questions | 10 min |
| **[DOCS_INDEX.md](DOCS_INDEX.md)** | This file — guide to all docs | 3 min |

---

## 🚀 Getting Started (First Time?)

Follow this order:

1. **[SETUP_GUIDE.md](SETUP_GUIDE.md)** ← Start here!
   - Install dependencies
   - Configure environment
   - Run locally
   - Customize content

2. **[README.md](README.md)** ← Understand the project
   - Features overview
   - Project structure
   - Available commands

3. **[FAQ.md](FAQ.md)** ← Answer your questions
   - Common issues
   - How to add features
   - Tips & tricks

4. **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** ← When ready to launch
   - Deploy to Vercel, Netlify, etc.
   - Set up custom domain
   - Monitor your site

---

## 📁 Project Structure Explained

```
hemraj-portfolio-frontend/
│
├── 📚 Documentation
│   ├── README.md              ← Start here!
│   ├── SETUP_GUIDE.md        ← Installation & customization
│   ├── DEPLOYMENT_GUIDE.md   ← Deploy to production
│   ├── FAQ.md                ← Common questions
│   └── DOCS_INDEX.md         ← This file
│
├── 🔧 Configuration Files
│   ├── package.json          ← Dependencies & scripts
│   ├── tsconfig.json         ← TypeScript config
│   ├── tailwind.config.ts    ← Tailwind CSS config
│   ├── postcss.config.js     ← PostCSS config
│   ├── next.config.js        ← Next.js config
│   └── .env.local            ← Environment variables
│
├── 📂 Source Code (src/)
│   ├── app/
│   │   ├── page.tsx          ← Home page (EDIT: add sections)
│   │   ├── layout.tsx        ← Root layout (EDIT: metadata)
│   │   └── globals.css       ← Styles & colors (EDIT: colors)
│   │
│   ├── components/
│   │   ├── ui/               ← Reusable components
│   │   │   ├── Button.tsx    ← Reusable button
│   │   │   ├── Navbar.tsx    ← Navigation bar
│   │   │   ├── Footer.tsx    ← Footer section
│   │   │   └── ... more
│   │   │
│   │   └── sections/         ← Page sections
│   │       ├── Hero.tsx      ← Hero intro (EDIT: intro text)
│   │       ├── Projects.tsx  ← Projects list (EDIT: projects)
│   │       └── Contact.tsx   ← Contact form
│   │
│   ├── lib/
│   │   ├── utils.ts          ← Utility functions
│   │   └── animations.ts     ← Animation definitions
│   │
│   ├── constants/
│   │   ├── metadata.ts       ← Your info (EDIT: name, email)
│   │   └── navLinks.ts       ← Navigation links (EDIT: menu)
│   │
│   ├── services/
│   │   └── api.ts            ← API client for backend
│   │
│   └── types/
│       └── index.ts          ← TypeScript types
│
├── 📊 Static Assets
│   └── public/
│       └── images/           ← Add your images here
│
└── ⚙️ Tools
    ├── .gitignore           ← Git ignore rules
    └── next-env.d.ts        ← TypeScript definitions
```

---

## 🎨 Key Files to Edit

### **Most Important (Edit These First!)**

| File | What to Change | Impact |
|------|---------------|--------|
| `src/constants/metadata.ts` | Your name, email | Shows on navbar & contact |
| `src/constants/navLinks.ts` | Navigation menu | Changes menu items |
| `src/components/sections/Hero.tsx` | Intro text & roles | Hero section content |
| `src/components/sections/Projects.tsx` | Your projects | Projects showcase |
| `src/app/globals.css` | Colors | Entire theme color |

### **Configuration Files**

| File | What to Change | When |
|------|---------------|------|
| `.env.local` | Backend API URL | If backend is elsewhere |
| `tailwind.config.ts` | Tailwind settings | Add custom colors/fonts |
| `next.config.js` | Next.js settings | Advanced configuration |

---

## 📖 Common Tasks

### **"I want to..."**

**Add a new section**
1. Create `src/components/sections/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to JSX: `<YourSection />`
→ See [FAQ.md — "How do I add more sections?"](FAQ.md)

**Change colors**
1. Edit `src/app/globals.css`
2. Find `:root { --cyber: ... }`
3. Change the hex colors
→ See [FAQ.md — "How do I change colors?"](FAQ.md)

**Add projects**
1. Edit `src/components/sections/Projects.tsx`
2. Add to `const projects` array
3. Refresh browser
→ See [FAQ.md — "How do I add projects?"](FAQ.md)

**Deploy to production**
1. Follow [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
2. Choose platform (Vercel recommended)
3. Connect GitHub & deploy
→ Takes ~10 minutes

**Connect to backend**
1. Update `.env.local`: `NEXT_PUBLIC_API_URL=...`
2. Restart dev server
3. Test contact form
→ See [FAQ.md — "Backend integration"](FAQ.md)

---

## 💡 Learning Path

**Complete beginner?** Follow this:

1. **Day 1:** Read [README.md](README.md) + [SETUP_GUIDE.md](SETUP_GUIDE.md)
2. **Day 2:** Customize metadata & colors
3. **Day 3:** Add your projects
4. **Day 4:** Customize Hero section
5. **Day 5:** Deploy with [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

**Experienced developer?** Jump to:
- [SETUP_GUIDE.md](SETUP_GUIDE.md) for quick start
- [FAQ.md](FAQ.md) for advanced questions
- Code files for implementation details

---

## 🔗 Component Navigation

### **UI Components**
Located in `src/components/ui/`

- `Button.tsx` — Clickable buttons
- `Navbar.tsx` — Navigation header
- `Footer.tsx` — Footer section
- `Card.tsx` — Reusable card
- `ScrollProgress.tsx` — Scroll indicator
- `SectionTitle.tsx` — Section headers

### **Section Components**
Located in `src/components/sections/`

- `Hero.tsx` — Main intro section
- `Projects.tsx` — Projects showcase
- `Contact.tsx` — Contact form

### **Utilities**
Located in `src/lib/`

- `utils.ts` — Helper functions
- `animations.ts` — Framer Motion presets

---

## 🎯 Documentation by Purpose

### **"I want to get started"**
→ [SETUP_GUIDE.md](SETUP_GUIDE.md)

### **"I want to understand the project"**
→ [README.md](README.md)

### **"I want to answer a specific question"**
→ [FAQ.md](FAQ.md)

### **"I want to deploy online"**
→ [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

### **"I want to find a file"**
→ You're reading it! [DOCS_INDEX.md](DOCS_INDEX.md)

---

## 🆘 Troubleshooting Map

**Problem** → **Solution**

| Issue | Where to Look |
|-------|---------------|
| Can't install dependencies | [SETUP_GUIDE.md — Troubleshooting](SETUP_GUIDE.md#-troubleshooting) |
| Port 3000 already in use | [SETUP_GUIDE.md — Port conflicts](SETUP_GUIDE.md#port-3000-already-in-use) |
| Styles not loading | [FAQ.md — Styles not showing](FAQ.md#q-styles-not-showing) |
| Contact form not working | [FAQ.md — Contact form issues](FAQ.md#q-why-isnt-the-contact-form-working) |
| Deployment fails | [DEPLOYMENT_GUIDE.md — Troubleshooting](DEPLOYMENT_GUIDE.md#-troubleshooting-deployment) |
| Want to add new section | [FAQ.md — Add more sections](FAQ.md#q-can-i-add-more-sections-skills-about-etc) |

---

## 📚 External Resources

### **Official Docs**
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

### **Learning Resources**
- [Next.js Learn Course](https://nextjs.org/learn)
- [React Tutorial](https://react.dev/learn)
- [Tailwind CSS Tutorials](https://tailwindcss.com/docs)

### **Deployment Platforms**
- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Render](https://render.com)

---

## 🎓 File Reading Order

**For complete understanding, read in this order:**

1. `README.md` — Overview
2. `SETUP_GUIDE.md` — Installation
3. `src/app/page.tsx` — Main page structure
4. `src/components/sections/*.tsx` — Page sections
5. `src/constants/metadata.ts` — Your info
6. `src/app/globals.css` — Styles & colors
7. `FAQ.md` — Answers to questions
8. `DEPLOYMENT_GUIDE.md` — When ready to deploy

---

## ✅ Checklist for New Users

- [ ] Read [README.md](README.md)
- [ ] Follow [SETUP_GUIDE.md](SETUP_GUIDE.md)
- [ ] Customize `metadata.ts`
- [ ] Update `Hero.tsx`
- [ ] Add projects to `Projects.tsx`
- [ ] Change colors in `globals.css`
- [ ] Test locally: `npm run dev`
- [ ] Read [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- [ ] Deploy!

---

## 🎉 Next Steps

1. **Open [SETUP_GUIDE.md](SETUP_GUIDE.md)** ← Start here
2. **Install & run locally**
3. **Customize your content**
4. **Deploy with [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**
5. **Share your portfolio!**

---

**Happy building! 🚀**

*Last updated: 2025*
