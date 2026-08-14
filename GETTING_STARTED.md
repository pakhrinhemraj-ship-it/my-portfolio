# 🎓 GETTING STARTED — Complete Walkthrough

Your complete guide to understanding and using your portfolio.

---

## 📚 Choose Your Path

### 🏃 **I Want to Get Running ASAP**
→ Read **[QUICK_START.md](QUICK_START.md)** (5 minutes)

### 🎨 **I Want to Customize Everything**
→ Read **[SETUP_GUIDE.md](SETUP_GUIDE.md)** (10 minutes)

### 📖 **I Want to Understand Everything**
→ Read **[DOCS_INDEX.md](DOCS_INDEX.md)** (start here!)

### 🚀 **I'm Ready to Deploy**
→ Read **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** (15 minutes)

### 🖼️ **I Want to Add Images & Media**
→ Read **[IMAGE_GUIDE.md](IMAGE_GUIDE.md)** (8 minutes)

---

## 🎯 Your First 30 Minutes

### **Minute 0-5: Setup**
```bash
unzip hemraj-portfolio-frontend.zip
cd hemraj-portfolio-frontend
npm install
npm run dev
```

### **Minute 5-10: Explore**
- Visit http://localhost:3000
- Scroll through all sections
- Check mobile view (press F12)

### **Minute 10-20: Customize**
1. Open `src/constants/metadata.ts`
   - Change name
   - Change email

2. Open `src/components/sections/Hero.tsx`
   - Update intro text
   - Change roles

3. Open `src/app/globals.css`
   - Change `--cyber` color
   - Change `--teal` color

### **Minute 20-30: Add Content**
1. Update `src/components/sections/Skills.tsx`
   - Add your skills
   - Update categories

2. Update `src/components/sections/Projects.tsx`
   - Add your projects
   - Update descriptions

---

## 📁 Project Navigation

### **What Goes Where**

| What | Where | How to Edit |
|------|-------|------------|
| Your name/email | `src/constants/metadata.ts` | JSON values |
| Navigation menu | `src/constants/navLinks.ts` | Array |
| Hero text | `src/components/sections/Hero.tsx` | JSX strings |
| Skills | `src/components/sections/Skills.tsx` | Array |
| Projects | `src/components/sections/Projects.tsx` | Array |
| Colors | `src/app/globals.css` | CSS variables |
| Avatar image | `public/avatar.jpg` | File |

---

## 🎨 Customization Examples

### **Change Your Name**

File: `src/constants/metadata.ts`

```ts
export const siteMetadata = {
  name: "YOUR NAME HERE",  // ← Change this
  email: "your@email.com",
  // ... rest
};
```

### **Change Your Intro**

File: `src/components/sections/Hero.tsx`

```tsx
<p className="...">
  Developer from <span className="text-cyber">[YOUR CITY]</span> •
  Your tagline here
</p>
```

### **Add Your Skills**

File: `src/components/sections/Skills.tsx`

```ts
const skillCategories = [
  {
    category: "Your Category",
    skills: ["Skill1", "Skill2", "Skill3"],  // ← Add here
  },
];
```

### **Add Your Projects**

File: `src/components/sections/Projects.tsx`

```ts
const projects = [
  {
    id: 1,
    title: "Your Project",          // ← Change
    description: "What it does",    // ← Change
    technologies: ["React"],        // ← Change
    github: "https://...",          // ← Change
    live: "https://...",            // ← Change
    status: "completed",            // ← Change
  },
];
```

### **Change Colors**

File: `src/app/globals.css`

```css
:root {
  --cyber: #00ff88;       /* ← Change primary color */
  --teal: #00d4aa;        /* ← Change accent color */
  --ink: #020d0a;         /* ← Change background color */
}
```

---

## 🧠 Understanding the Structure

### **App Layout**

```
Home Page
├── Navbar (Navigation)
├── Hero (Your intro + avatar)
├── About (About you)
├── Skills (Your skills)
├── Projects (Your work)
├── Contact (Contact form)
└── Footer
```

### **File Structure**

```
src/
├── app/           ← Pages & layouts
├── components/    ← Reusable parts
├── constants/     ← Config data
├── lib/           ← Helpers
├── services/      ← API calls
├── hooks/         ← React hooks
├── types/         ← TypeScript types
└── middleware.ts  ← Custom logic
```

### **Key Files**

```
src/
├── app/
│   ├── page.tsx          ← Main page (DO NOT EDIT)
│   ├── layout.tsx        ← HTML structure (DON'T EDIT)
│   └── globals.css       ← Colors & styles (EDIT!)
│
├── components/sections/
│   ├── Hero.tsx          ← Your intro (EDIT!)
│   ├── About.tsx         ← About you (EDIT!)
│   ├── Skills.tsx        ← Skills list (EDIT!)
│   ├── Projects.tsx      ← Projects list (EDIT!)
│   └── Contact.tsx       ← Contact form (MINIMAL EDIT)
│
└── constants/
    └── metadata.ts       ← Your info (EDIT!)
```

---

## 🔧 Common Edits

### **Frequently Changed**

```ts
// 1. Your Info
src/constants/metadata.ts

// 2. Your Intro Text
src/components/sections/Hero.tsx

// 3. Your Skills
src/components/sections/Skills.tsx

// 4. Your Projects
src/components/sections/Projects.tsx

// 5. Your Colors
src/app/globals.css

// 6. Your Avatar
public/avatar.jpg
```

### **Rarely Changed**

```
src/app/page.tsx       ← Don't touch
src/app/layout.tsx     ← Don't touch
src/components/ui/     ← Advanced only
src/lib/               ← Advanced only
src/services/          ← Advanced only
```

---

## 📝 Common Tasks

### **"I want to add a new section"**

1. Create file: `src/components/sections/NewSection.tsx`
2. Copy template from existing section
3. Import in `src/app/page.tsx`
4. Add to navigation in `src/constants/navLinks.ts`

### **"I want to change the theme color"**

Edit `src/app/globals.css`:
```css
--cyber: #your-color;
--teal: #your-accent;
```

### **"I want to add an image"**

1. Copy image to `/public/`
2. Use in component: `<Image src="/image.jpg" />`

### **"I want to connect my backend"**

1. Edit `.env.local`: `NEXT_PUBLIC_API_URL=your-backend-url`
2. Restart dev server

### **"I want to deploy online"**

Read `DEPLOYMENT_GUIDE.md` → 10 minute process

---

## 🚀 Next Steps

### **Beginner**
1. ✅ Read `QUICK_START.md`
2. ✅ Run locally
3. ✅ Customize colors
4. ✅ Add your name

### **Intermediate**
1. ✅ Update all content
2. ✅ Add your projects
3. ✅ Add your skills
4. ✅ Update avatar

### **Advanced**
1. ✅ Add new components
2. ✅ Modify styles
3. ✅ Connect backend
4. ✅ Deploy online

---

## 📚 Full Documentation

- **QUICK_START.md** — 5 minute setup
- **SETUP_GUIDE.md** — Detailed setup
- **FAQ.md** — Q&A
- **IMAGE_GUIDE.md** — Image management
- **DEPLOYMENT_GUIDE.md** — Deploy online
- **CONTRIBUTING.md** — Code guidelines
- **DOCS_INDEX.md** — All documentation

---

## 🎯 Before Deploying

### **Checklist**

- [ ] Updated your name
- [ ] Updated your email
- [ ] Changed colors (optional)
- [ ] Added your projects
- [ ] Added your skills
- [ ] Updated avatar
- [ ] Tested locally
- [ ] Build successful: `npm run build`

---

## 🆘 Common Issues

### **"npm install fails"**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### **"Port 3000 in use"**
```bash
npm run dev -- -p 3001
```

### **"Changes not showing"**
```bash
rm -rf .next
npm run dev
```

### **"Image not loading"**
- Check image is in `/public/`
- Check path is correct
- Clear browser cache

---

## ✨ Key Takeaways

1. 🎯 Start with `QUICK_START.md`
2. 📝 Edit only the files marked "EDIT!"
3. 🎨 Change colors in `src/app/globals.css`
4. 📱 Your portfolio is mobile responsive
5. 🚀 Deploy to Vercel when ready
6. 📚 Read guides when stuck

---

## 🎉 You're Ready!

Your portfolio is fully customizable and ready to showcase your work!

**Start now:**
```bash
cd hemraj-portfolio-frontend
npm install
npm run dev
```

**Questions?** See the relevant guide:
- Setup: `SETUP_GUIDE.md`
- Images: `IMAGE_GUIDE.md`
- Deploy: `DEPLOYMENT_GUIDE.md`
- Q&A: `FAQ.md`

**Happy building! 🚀**
