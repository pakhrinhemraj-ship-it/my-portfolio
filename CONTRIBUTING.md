# 🤝 Contributing Guidelines

This is your personal portfolio project! Here's how to maintain and improve it.

---

## 📝 Code Style

### **Formatting**

```bash
# Format code (Prettier already configured)
npm run format  # If you add this script
```

### **TypeScript**

Always use TypeScript for type safety:

```tsx
// ✅ Good
interface ButtonProps {
  onClick: () => void;
  children: string;
}

// ❌ Avoid
function Button(props: any) {}
```

### **Component Structure**

```tsx
"use client";  // Client component marker
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  // Props here
}

export default function Component({ /* props */ }: Props) {
  // Logic here
  return (
    // JSX here
  );
}
```

---

## 🔄 Git Workflow

### **Before Changes**

```bash
git pull origin main
git checkout -b feature/your-feature
```

### **Making Changes**

1. Make your changes
2. Test locally: `npm run dev`
3. Commit with clear messages:

```bash
git add .
git commit -m "Add: New feature description"
# or
git commit -m "Fix: Bug fix description"
git commit -m "Update: Update existing feature"
```

### **After Changes**

```bash
git push origin feature/your-feature
# Create Pull Request on GitHub
```

---

## 🧪 Testing Your Changes

### **Local Testing**

```bash
npm run dev
# Visit http://localhost:3000
# Test all sections
# Test on mobile (F12)
```

### **Build Testing**

```bash
npm run build
npm start
# Verify production build works
```

---

## 📂 File Organization

### **Keep It Clean**

```
src/
├── components/         ← UI Components
│   ├── ui/            ← Reusable (Button, Card, etc.)
│   └── sections/      ← Page sections (Hero, Projects, etc.)
├── app/               ← Next.js pages
├── lib/               ← Utilities
├── constants/         ← Config data
├── services/          ← API calls
├── types/             ← TypeScript types
└── hooks/             ← Custom hooks
```

### **Naming Conventions**

```
Components:     PascalCase      Button.tsx
Functions:      camelCase       getUser()
Constants:      UPPER_CASE      API_URL
Files:          kebab-case      (or PascalCase for components)
```

---

## 🎨 Adding New Sections

### **Template**

```tsx
// src/components/sections/YourSection.tsx
"use client";
import SectionTitle from "@/components/ui/SectionTitle";

export default function YourSection() {
  return (
    <section id="your-section" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="SECTION"
          title="Your Title"
          subtitle="Optional subtitle"
        />
        
        {/* Your content */}
      </div>
    </section>
  );
}
```

### **Steps**

1. Create file in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add to JSX: `<YourSection />`
4. Add navigation link in `src/constants/navLinks.ts`

---

## 🎨 Color Changes

### **Consistent Theming**

All colors are in `src/app/globals.css`:

```css
:root {
  --cyber: #00ff88;      /* Primary - change here */
  --teal: #00d4aa;       /* Accent - change here */
  --ink: #020d0a;        /* Background - change here */
}
```

Use these in components:

```tsx
<div className="text-cyber">Green text</div>
<div className="border-teal">Teal border</div>
<div className="bg-ink">Dark background</div>
```

---

## 📦 Adding Dependencies

### **Only When Necessary**

Before adding a package:

1. Check if Next.js/React has built-in solution
2. Check if it's already installed
3. Keep bundle size small

### **How to Add**

```bash
npm install package-name
npm install --save-dev @types/package-name  # If TypeScript
```

### **Popular Additions** (Optional)

```bash
# For forms
npm install react-hook-form

# For more animations
npm install @react-spring/web

# For state management
npm install zustand

# For date handling
npm install date-fns
```

---

## 🚀 Before Deploying

### **Checklist**

- [ ] `npm run build` succeeds
- [ ] `npm start` works locally
- [ ] All links work
- [ ] Mobile responsive tested
- [ ] Images load correctly
- [ ] Contact form tested
- [ ] No console errors
- [ ] TypeScript: `tsc --noEmit`

### **Environmental Variables**

```bash
# Create .env.local (already exists)
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Never commit .env files!
# .gitignore already excludes them
```

---

## 🐛 Fixing Bugs

### **Report Bug**

1. Create detailed description
2. Include steps to reproduce
3. List expected vs actual behavior

### **Fix Bug**

```bash
git checkout -b fix/bug-description
# Make changes
npm run dev  # Test
git commit -m "Fix: Bug description"
git push origin fix/bug-description
```

---

## 📚 Documentation

### **When to Update Docs**

- ✅ Added new feature
- ✅ Changed configuration
- ✅ Updated colors/styles
- ✅ Modified file structure

### **Keep Updated**

- `README.md` — Project overview
- `SETUP_GUIDE.md` — Setup instructions
- `FAQ.md` — Common questions
- `IMAGE_GUIDE.md` — Image management

---

## 🔐 Security

### **Never Commit**

- `.env` files (only `.env.example`)
- API keys or secrets
- Passwords
- Sensitive data

### **Safe Practices**

```bash
# ✅ Good - Use environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

# ❌ Bad - Hardcoded secrets
const API_KEY = "sk_live_abc123xyz";
```

---

## 🆘 Common Issues

### **Build Fails**

```bash
# Clear cache
rm -rf .next
npm install
npm run build
```

### **Dependencies Conflict**

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### **Type Errors**

```bash
# Check types
npx tsc --noEmit
```

---

## 📋 Commit Message Guide

```
Add:     Add new feature
Fix:     Fix a bug
Update:  Update existing code
Remove:  Remove code/files
Refactor: Refactor without changing behavior
Docs:    Update documentation
Style:   Fix formatting (no logic change)
Perf:    Improve performance
```

---

## 🎯 Performance Tips

### **Optimize Images**

```tsx
// ✅ Use Next.js Image component
<Image src="/avatar.jpg" alt="..." width={300} height={300} />

// ❌ Avoid plain img tags
<img src="/avatar.jpg" />
```

### **Code Splitting**

```tsx
// ✅ Lazy load components
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./Heavy"));

// ❌ Avoid importing unnecessary code globally
import * as lodash from "lodash";  // Don't do this
```

### **Minimize Bundle**

```bash
# Check bundle size
npm run build
# Check .next/static folder
```

---

## 🧹 Cleanup

### **Before Committing**

```bash
# Remove console.logs
# Fix TypeScript errors
# Test thoroughly
# Update related docs
```

### **Regular Maintenance**

```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Run build test
npm run build
```

---

## 🎓 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Best Practices](https://react.dev)
- [TypeScript Guide](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 💡 Tips

- 💬 Write clear commit messages
- 🧪 Test before pushing
- 📖 Update documentation
- 🔄 Keep code DRY (Don't Repeat Yourself)
- ✨ Follow existing patterns
- 🎨 Maintain consistent style

---

## 🎉 Questions?

Check the docs:
- `DOCS_INDEX.md` — Navigation guide
- `FAQ.md` — Common questions
- `README.md` — Project overview

**Happy coding! 🚀**
