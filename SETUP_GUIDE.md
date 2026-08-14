# 🚀 COMPLETE SETUP GUIDE

Follow this guide to get your portfolio running in **5 minutes**.

---

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ Node.js 18+ installed ([download](https://nodejs.org/))
- ✅ npm or yarn package manager
- ✅ Your backend running on `http://localhost:5000` (optional but recommended)
- ✅ A text editor (VS Code recommended)

Check versions:
```bash
node --version    # Should be v18+
npm --version     # Should be v8+
```

---

## 🎯 Step-by-Step Installation

### **Step 1 — Extract the ZIP File**

```bash
unzip hemraj-portfolio-frontend.zip
cd hemraj-portfolio-frontend
```

### **Step 2 — Install Dependencies**

```bash
npm install
```

This installs all required packages:
- next, react, react-dom
- framer-motion (animations)
- axios (API calls)
- tailwindcss (styling)
- react-hot-toast (notifications)
- typescript

Wait 2-5 minutes for installation to complete.

### **Step 3 — Configure Environment (Optional)**

The `.env.local` file is already set with:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**If your backend is on a different URL**, edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-backend.com/api
```

### **Step 4 — Start Development Server**

```bash
npm run dev
```

You'll see:
```
> next dev

  ▲ Next.js 16.2.7
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1.2s
```

### **Step 5 — Open in Browser**

Visit: **[http://localhost:3000](http://localhost:3000)**

You should see your cyber green portfolio! 🎆

---

## 🎨 Customize Your Portfolio

### **1. Update Your Information**

Edit `src/constants/metadata.ts`:

```ts
export const siteMetadata = {
  name: "Your Full Name",
  title: "Your Title | Your Tagline",
  description: "Your portfolio description",
  email: "your@email.com",
  phone: "1234567890",
  url: "https://yourportfolio.com",
  github: "https://github.com/yourusername",
};
```

### **2. Update Navigation Links**

Edit `src/constants/navLinks.ts`:

```ts
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  // Add more links as needed
];
```

### **3. Update Hero Section**

Edit `src/components/sections/Hero.tsx`:

Change the roles array:
```ts
const roles = [
  "Your Job Title 1",
  "Your Job Title 2", 
  "Your Job Title 3",
];
```

Change the intro text:
```tsx
<p className="text-silver-dim text-base max-w-md leading-relaxed font-mono">
  Your intro text here. From <span className="text-cyber">[YOUR CITY]</span> • Your tagline
</p>
```

### **4. Add Your Projects**

Edit `src/components/sections/Projects.tsx`:

```ts
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What your project does",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourproject",
    live: "https://yourproject.com",
    status: "completed",
  },
  // Add more projects...
];
```

### **5. Update Contact Email**

Edit `src/components/sections/Contact.tsx` — it already reads from `metadata.ts`, so just update that file.

---

## 🔗 Connect to Your Backend

### **If Backend is Running**

Your contact form will automatically work if your backend is running on `http://localhost:5000/api`.

**Backend endpoint required:**
```
POST /api/contact
Body: {
  "name": "string",
  "email": "string", 
  "message": "string"
}
```

**Test it:**
1. Fill out the contact form
2. Submit
3. Check your backend logs
4. You should see the message saved

### **If Backend is NOT Running**

The contact form will show an error. That's OK! You can:
1. Start your backend: `cd Backend && npm run dev`
2. Reload the portfolio page
3. Try the contact form again

---

## 🎨 Change Colors

All colors are in `src/app/globals.css`.

**Find this section:**
```css
:root {
  --cyber: #00ff88;      /* Primary color */
  --teal: #00d4aa;       /* Accent color */
  --ink: #020d0a;        /* Background */
}
```

**Change to your colors:**
```css
:root {
  --cyber: #ff0080;      /* Your primary */
  --teal: #00ffff;       /* Your accent */
  --ink: #0a0a0a;        /* Your background */
}
```

All colors will update automatically!

---

## 📱 Test on Mobile

### **Local Network Test**

Find your local IP:
```bash
# Mac/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

Use the IP from your network (like `192.168.x.x`):
```
http://192.168.x.x:3000
```

Open on your phone and test!

---

## 📦 Build for Production

### **Create Optimized Build**

```bash
npm run build
```

Creates `.next` folder with optimized code.

### **Test Production Build Locally**

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test the production build.

### **Deploy**

You can deploy to:
- **Vercel** (easiest, free tier available)
  ```bash
  npm install -g vercel
  vercel
  ```
- **Netlify**
- **GitHub Pages**
- **Your own server**

---

## 🆘 Troubleshooting

### **Port 3000 Already in Use?**

```bash
# Use a different port
npm run dev -- -p 3001
```

### **Dependencies Not Installing?**

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### **Styles Not Loading?**

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### **API Not Connecting?**

Check 3 things:
1. Backend is running: `http://localhost:5000`
2. `.env.local` has correct URL
3. Restart dev server after changing `.env.local`

### **Module Errors?**

```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📂 Project Organization

```
hemraj-portfolio-frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx        ← Main page (edit for content)
│   │   ├── layout.tsx      ← Root layout
│   │   └── globals.css     ← Colors & theme (edit for colors)
│   │
│   ├── components/
│   │   ├── ui/             ← Reusable components
│   │   └── sections/       ← Page sections (edit for content)
│   │
│   ├── constants/
│   │   ├── metadata.ts     ← Your info (EDIT THIS!)
│   │   └── navLinks.ts     ← Navigation (EDIT THIS!)
│   │
│   └── lib/
│       ├── utils.ts        ← Utilities
│       └── animations.ts   ← Animation definitions
│
├── public/                 ← Add images here
├── .env.local             ← API URL config
├── package.json           ← Dependencies
├── tailwind.config.ts     ← Tailwind config
└── README.md              ← Project info
```

---

## ✨ Key Files to Edit

| File | What to Edit |
|------|--------------|
| `src/constants/metadata.ts` | **Your name, email, description** |
| `src/constants/navLinks.ts` | **Navigation menu links** |
| `src/components/sections/Hero.tsx` | **Your intro & roles** |
| `src/components/sections/Projects.tsx` | **Your projects** |
| `src/app/globals.css` | **Colors & theme** |
| `.env.local` | **Backend API URL** |

---

## 🎉 You're Ready!

Your portfolio is fully set up and ready to customize. 

**Next steps:**
1. ✅ Update `metadata.ts` with your info
2. ✅ Customize `Hero.tsx` with your intro
3. ✅ Add your projects to `Projects.tsx`
4. ✅ Change colors in `globals.css`
5. ✅ Test the contact form (needs backend)
6. ✅ Deploy to production

---

## 📞 Need Help?

**Common issues:**
- Port already in use? → Use different port with `-p 3001`
- Modules missing? → Run `npm install` again
- Styles wrong? → Clear `.next` folder
- API not working? → Start backend on port 5000

**Check these files for more info:**
- `README.md` — Project overview
- `package.json` — All dependencies
- `src/` — All source code with comments

**Happy coding! 🚀**
