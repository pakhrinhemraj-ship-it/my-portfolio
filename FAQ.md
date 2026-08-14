# ❓ FAQ — Frequently Asked Questions

## 🎨 Styling & Colors

### **Q: How do I change the primary color from green to something else?**

A: Edit `src/app/globals.css`:

```css
:root {
  --cyber: #your-color;  /* Change this */
  --teal: #your-accent;  /* And this */
}
```

Or use Tailwind classes in components:
```tsx
<div className="text-[#ff0080]">Your color</div>
```

---

### **Q: Can I use a different font?**

A: Yes! Edit `src/app/layout.tsx`:

```tsx
// Remove old font import
// Add new font from Google Fonts
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet" />
```

Then update `globals.css`:
```css
:root {
  --font-display: 'Your Font', serif;
}
```

---

### **Q: How do I remove the scan lines?**

A: Edit `src/app/layout.tsx`:

```tsx
{/* Remove this line */}
{/* <div className="scan-lines" /> */}
```

---

## 📱 Content & Projects

### **Q: How do I add more projects?**

A: Edit `src/components/sections/Projects.tsx`:

```ts
const projects = [
  {
    id: 1,
    title: "My Project",
    description: "What it does",
    technologies: ["React", "Next.js"],
    github: "https://github.com/...",
    live: "https://...",
    status: "completed",
  },
  // Add more here...
];
```

---

### **Q: Can I add more sections (Skills, About, etc.)?**

A: Yes! Create a new file in `src/components/sections/`:

```tsx
// src/components/sections/About.tsx
export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2>About Me</h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

Then import in `src/app/page.tsx`:

```tsx
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />        {/* Add here */}
      <Projects />
      <Contact />
    </main>
  );
}
```

---

### **Q: How do I add my portfolio image?**

A: Add image to `/public/images/`:

```
public/
└── images/
    ├── avatar.jpg
    ├── project1.png
    └── project2.png
```

Then use in components:

```tsx
import Image from "next/image";

<Image
  src="/images/avatar.jpg"
  alt="Avatar"
  width={300}
  height={300}
/>
```

---

## 🔗 API & Backend

### **Q: Why isn't the contact form working?**

A: Check these:

1. **Backend is running:**
   ```bash
   cd Backend
   npm run dev  # Should run on port 5000
   ```

2. **API URL is correct** in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Backend endpoint exists:**
   ```
   POST /api/contact
   ```

---

### **Q: Can I use the portfolio without a backend?**

A: Yes! The contact form will show an error, but everything else works.

To remove the contact section, edit `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      {/* <Contact /> */}  {/* Remove this */}
      <Footer />
    </main>
  );
}
```

---

### **Q: How do I fetch projects from the backend?**

A: Edit `src/components/sections/Projects.tsx`:

```tsx
"use client";
import { useEffect, useState } from "react";
import { projectsService } from "@/services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    projectsService.getAll().then((res) => {
      if (res.success) setProjects(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section>
      {projects.map((project) => (
        <div key={project._id}>{project.title}</div>
      ))}
    </section>
  );
}
```

---

## 🚀 Deployment

### **Q: What's the easiest way to deploy?**

A: **Vercel!** (Made by Next.js creators)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Done!

See `DEPLOYMENT_GUIDE.md` for detailed steps.

---

### **Q: How do I add a custom domain?**

A: In your hosting platform:
- Vercel: Settings → Domains → Add domain
- Netlify: Site settings → Domain management → Add domain

Then update your domain's nameservers.

---

### **Q: Can I deploy for free?**

A: Yes!
- **Vercel** — Free tier ✅
- **Netlify** — Free tier ✅
- **Railway** — Free tier (5GB/month) ✅
- **Render** — Free tier ✅

See `DEPLOYMENT_GUIDE.md` for options.

---

## ⚙️ Development

### **Q: How do I add TypeScript types?**

A: Create types in `src/types/index.ts`:

```ts
export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
}
```

Then use in components:

```tsx
import { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return <div>{project.title}</div>;
}
```

---

### **Q: How do I add animations?**

A: Use Framer Motion:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

See `src/lib/animations.ts` for preset animations.

---

### **Q: How do I add a new component?**

A: Create in appropriate folder:

```
src/components/ui/       → Reusable UI (Button, Card, etc.)
src/components/sections/ → Page sections (Hero, Projects, etc.)
```

Then import in `page.tsx`.

---

## 🐛 Troubleshooting

### **Q: Port 3000 is already in use?**

A: Use a different port:
```bash
npm run dev -- -p 3001
```

---

### **Q: Styles not showing?**

A: Clear cache:
```bash
rm -rf .next
npm run dev
```

---

### **Q: Module not found errors?**

A: Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### **Q: Changes not reflecting?**

A: Hard refresh in browser:
- **Windows/Linux:** `Ctrl+Shift+R`
- **Mac:** `Cmd+Shift+R`

Or clear browser cache entirely.

---

## 📚 Learning Resources

### **Next.js**
- [Official Docs](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)

### **Tailwind CSS**
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Component Examples](https://tailwindui.com)

### **Framer Motion**
- [Animation Docs](https://www.framer.com/motion/)
- [Gesture Examples](https://www.framer.com/motion/gestures/)

### **React**
- [React Docs](https://react.dev)
- [Hooks Guide](https://react.dev/reference/react/hooks)

---

## 💡 Tips & Tricks

### **Performance**
- Use `Image` component for images
- Lazy load components with `dynamic`
- Minimize bundle size

### **SEO**
- Update `metadata` in `layout.tsx`
- Add meta descriptions
- Use semantic HTML

### **Accessibility**
- Add `alt` text to images
- Use semantic HTML tags
- Ensure color contrast

---

## 🆘 Still Need Help?

### **Check These First**
1. `README.md` — Project overview
2. `SETUP_GUIDE.md` — Setup instructions
3. `DEPLOYMENT_GUIDE.md` — Deployment help
4. Component comments in code

### **Common Resources**
- Google search: `"next.js" + your issue`
- Stack Overflow
- GitHub Issues
- Discord communities

---

**Happy coding! 🎆**
