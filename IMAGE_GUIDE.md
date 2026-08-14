# 🖼️ IMAGE GUIDE — How to Add Images to Your Portfolio

Complete guide to managing images in your portfolio.

---

## ✅ Your Avatar Image is Already Added!

Your profile image has been automatically added to the portfolio:
- **Location:** `/public/avatar.jpg`
- **Used in:** Hero section (mobile) & About section
- **Size:** 128x128px (mobile), 320x400px (about section)

---

## 📁 Where Images Go

All images should be placed in the **`public/`** folder:

```
public/
├── avatar.jpg        ← Your profile picture (ALREADY ADDED!)
├── project1.png      ← Project screenshots
├── project2.jpg
├── project3.png
├── bg-image.webp
└── icons/
    ├── react.svg
    ├── nodejs.svg
    └── mongodb.svg
```

---

## 📸 Using Images in Components

### **Method 1: Next.js Image Component (Recommended)**

```tsx
import Image from "next/image";

<Image
  src="/avatar.jpg"
  alt="Hemraj Pakhrin"
  width={300}
  height={300}
  priority        // Loads immediately
  className="rounded-full"
/>
```

**Benefits:**
- ✅ Optimized for web
- ✅ Faster loading
- ✅ Responsive sizing
- ✅ Lazy loading support

### **Method 2: Regular HTML Image**

```tsx
<img
  src="/avatar.jpg"
  alt="Hemraj Pakhrin"
  className="rounded-full"
/>
```

**Use when:**
- Simple static images
- Background images
- Non-critical images

### **Method 3: CSS Background**

```tsx
<div
  style={{
    backgroundImage: 'url(/bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
/>
```

---

## 🎯 Add Project Screenshots

### **Step 1: Add Image to Public**

Copy your project images to `/public/projects/`:

```
public/
└── projects/
    ├── project1.png
    ├── project2.jpg
    └── project3.png
```

### **Step 2: Update Projects.tsx**

Edit `src/components/sections/Projects.tsx`:

```tsx
const projects = [
  {
    id: 1,
    title: "My Awesome Project",
    description: "...",
    image: "/projects/project1.png",  // Add this
    technologies: ["React", "Node.js"],
    github: "https://...",
    live: "https://...",
    status: "completed",
  },
  // ... more projects
];
```

### **Step 3: Display Image**

Update the JSX to show the image:

```tsx
{project.image && (
  <Image
    src={project.image}
    alt={project.title}
    width={400}
    height={300}
    className="rounded-lg mb-4 object-cover"
  />
)}
```

---

## 🎨 Image Optimization Tips

### **Best Formats**

| Format | Best For | Size |
|--------|----------|------|
| **WebP** | Modern web | Smallest |
| **PNG** | Transparent images | Medium |
| **JPG** | Photos | Medium |
| **SVG** | Icons/logos | Very small |

### **Compression**

Before uploading, compress images:
1. Use [TinyPNG](https://tinypng.com) for JPG/PNG
2. Use [SVGO](https://svgo.dev) for SVG
3. Use [CloudConvert](https://cloudconvert.com) for WebP

### **Sizes**

| Purpose | Width | Height |
|---------|-------|--------|
| Avatar | 128px | 128px |
| About image | 320px | 400px |
| Project thumbnail | 400px | 300px |
| Background | 1920px | 1080px |
| Social media | 1200px | 630px |

---

## 🖼️ Use Images in Different Sections

### **Hero Section**

The avatar is already in the Hero! It displays on mobile.

To add a desktop avatar (currently missing):

Edit `src/components/sections/Hero.tsx`:

```tsx
{/* Right side — Avatar (already in code) */}
<motion.div className="hidden lg:flex justify-center items-center relative">
  <div className="relative z-10 w-72 h-72">
    <Image
      src="/avatar.jpg"
      alt="Hemraj Pakhrin"
      fill
      className="object-cover rounded-full"
      priority
    />
  </div>
</motion.div>
```

### **About Section**

Avatar already displays here!

To change it, replace `/avatar.jpg` with another image in `src/components/sections/About.tsx`:

```tsx
<Image
  src="/your-different-image.jpg"  // Change this
  alt="Hemraj Pakhrin"
  fill
  className="object-cover object-top"
  priority
/>
```

### **Projects Section**

Add project screenshots:

```tsx
import Image from "next/image";

<Image
  src={project.image}
  alt={project.title}
  width={400}
  height={300}
  className="rounded-lg mb-4"
/>
```

### **Background Images**

Add to `src/app/globals.css`:

```css
section {
  background-image: url('/bg-pattern.png');
  background-size: cover;
  background-position: center;
}
```

---

## 🚀 How to Add More Images

### **Quick Process**

1. **Copy image to `/public/`**
   ```bash
   cp your-image.jpg public/
   ```

2. **Use in component**
   ```tsx
   import Image from "next/image";
   
   <Image src="/your-image.jpg" alt="description" />
   ```

3. **Restart dev server** (sometimes needed)
   ```bash
   npm run dev
   ```

4. **Test in browser**
   - Refresh page
   - Verify image loads

### **Folder Structure Best Practice**

```
public/
├── avatar.jpg          ← Profile picture
├── projects/
│   ├── project1.png
│   ├── project2.png
│   └── project3.png
├── backgrounds/
│   └── hero-bg.jpg
└── icons/
    ├── react.svg
    ├── nodejs.svg
    └── mongodb.svg
```

---

## ⚠️ Common Issues & Fixes

### **Image Not Showing?**

**Check:**
1. File is in `/public/` folder
2. File name spelling is correct
3. Browser cache cleared (`Ctrl+Shift+Del`)
4. Dev server restarted

**Fix:**
```bash
rm -rf .next
npm run dev
```

### **Image Too Large?**

**Solution:** Compress before uploading
- Use [TinyPNG](https://tinypng.com)
- Target: <200KB per image

### **Image Not Responsive?**

**Fix:**
```tsx
<Image
  src="/image.jpg"
  alt="alt text"
  fill                          // Fill container
  className="object-cover"      // Maintain aspect ratio
  sizes="(max-width: 768px) 100vw, 50vw"  // Responsive
/>
```

### **Wrong Aspect Ratio?**

**Fix:**
```tsx
<div className="relative w-full h-64">
  <Image
    src="/image.jpg"
    alt="alt"
    fill
    className="object-cover object-center"
  />
</div>
```

---

## 📱 Mobile Image Tips

### **Hero Avatar (Mobile)**

Already implemented! Shows on screens < 768px.

Location: `src/components/sections/Hero.tsx`

### **Responsive Images**

```tsx
<Image
  src="/image.jpg"
  alt="alt"
  width={800}
  height={600}
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         800px"
  className="w-full h-auto"
/>
```

---

## 🎬 Advanced: Gallery/Carousel

### **Image Gallery**

```tsx
"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/projects/1.jpg",
  "/projects/2.jpg",
  "/projects/3.jpg",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <Image
        src={images[current]}
        alt="Project"
        width={600}
        height={400}
      />
      
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-cyber" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

---

## 📊 Image Statistics

### **Your Current Setup**

| Image | Location | Size | Status |
|-------|----------|------|--------|
| avatar.jpg | `/public/avatar.jpg` | ✅ Added | ✅ Ready |

### **Recommended Additional Images**

| Type | Count | Purpose |
|------|-------|---------|
| Project images | 3-4 | Project showcase |
| Background | 1-2 | Decorative |
| Icons | 5-10 | Tech stack |

---

## ✅ Checklist for Images

- [x] Avatar image added to `/public/avatar.jpg`
- [ ] Add project screenshots to `/public/projects/`
- [ ] Add background images (optional)
- [ ] Add tech stack icons (optional)
- [ ] Optimize all images (compress)
- [ ] Test on mobile
- [ ] Test on desktop

---

## 🎉 You're Ready!

Your avatar is now integrated! The image appears in:
- ✅ **Hero section** (mobile view)
- ✅ **About section** (desktop view)

**To add more images:**
1. Copy to `/public/` folder
2. Use with `<Image src="/..." />`
3. Done!

---

**Happy customizing! 🖼️**
