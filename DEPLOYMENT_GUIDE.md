# 🚀 DEPLOYMENT GUIDE

Deploy your portfolio to the world! Choose your favorite platform.

---

## 🏆 Recommended: Vercel (Easiest)

Vercel is made by the creators of Next.js. **Free tier available!**

### **Step 1 — Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### **Step 2 — Import to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select your GitHub repository
4. Configure:
   - **Framework:** Next.js
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
5. Add **Environment Variables:**
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-backend.com/api`
6. Click **Deploy**

Your site is live in **seconds!** 🎉

URL: `https://your-project.vercel.app`

### **Update Domain (Optional)**

In Vercel dashboard:
1. Go to **Settings → Domains**
2. Add your custom domain
3. Follow DNS instructions

---

## 🌐 Alternative: Netlify

### **Step 1 — Connect GitHub**

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Select your GitHub repository
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend URL
6. Click **Deploy**

### **Troubleshooting**

If deployment fails:
- Check **Deploy logs** tab
- Ensure `package.json` has all dependencies
- Verify Node version: `node --version`

---

## 🏥 Self-Hosted: Your Own Server

### **Option A: Railway**

Free tier with 5GB bandwidth/month

1. Go to [railway.app](https://railway.app)
2. Create new project
3. Deploy from GitHub
4. Add environment variables
5. Set custom domain

### **Option B: Render**

Free tier available

1. Go to [render.com](https://render.com)
2. Create new service
3. Connect GitHub repo
4. Configure:
   - Build: `npm install && npm run build`
   - Start: `npm start`
   - Port: 3000
5. Deploy

### **Option C: DigitalOcean App Platform**

Reliable but paid (~$5/month)

1. Create DigitalOcean account
2. Create new App
3. Connect GitHub
4. Deploy automatically

---

## 📋 Deployment Checklist

Before deploying, ensure:

- [ ] `README.md` is updated
- [ ] `src/constants/metadata.ts` has your correct info
- [ ] `.env.local` has production API URL
- [ ] Contact form backend is accessible
- [ ] All projects are added
- [ ] Colors are customized
- [ ] Test locally: `npm run build && npm start`

---

## 🔧 Environment Variables

Set these on your hosting platform:

```env
# Required
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api

# Optional
NODE_ENV=production
```

---

## 🌍 Custom Domain Setup

### **Vercel**
1. Dashboard → Settings → Domains
2. Add domain
3. Update DNS records

### **Netlify**
1. Site settings → Domain management
2. Add custom domain
3. Update nameservers

### **Your Domain Registrar**
Point to your hosting provider's nameservers.

---

## ⚡ Performance Optimization

Your Next.js site is already optimized! But you can:

### **Image Optimization**
```tsx
import Image from "next/image";

<Image
  src="/avatar.jpg"
  alt="Avatar"
  width={300}
  height={300}
  priority
/>
```

### **Code Splitting**
Next.js automatically code-splits pages.

### **Caching**
Vercel automatically caches static content.

---

## 📊 Monitor Your Site

### **Vercel Analytics**
- Built-in dashboard
- Web Vitals
- Performance metrics

### **Sentry (Error Tracking)**

Add to `next.config.js`:
```js
module.exports = {
  // ... existing config
  sentry: {
    dsn: 'YOUR_SENTRY_DSN',
  },
};
```

### **Google Analytics**

Add to `layout.tsx`:
```tsx
import Script from "next/script";

<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
/>
```

---

## 🔐 Security

### **Environment Variables**
- Never commit `.env.local` to git ✅ (Already in `.gitignore`)
- Only expose `NEXT_PUBLIC_*` variables publicly

### **CORS**
Your backend should allow requests from your domain:
```js
// Backend
app.use(cors({
  origin: ["https://yourportfolio.com"],
}));
```

### **HTTPS**
All hosting platforms provide free HTTPS! ✅

---

## 🚨 Troubleshooting Deployment

### **Build Fails**
```bash
# Test build locally first
npm run build
npm start
```

### **Environment Variables Not Loading**
- Restart deployment after adding variables
- Verify variable names match code: `process.env.NEXT_PUBLIC_API_URL`

### **Contact Form Not Working**
- Check API URL in environment variables
- Verify backend is running
- Check CORS settings on backend

### **Styles Missing**
- Clear cache in browser: `Ctrl+Shift+Del`
- Check Tailwind config in production

### **Images Not Loading**
- Add images to `/public` folder
- Update image paths if needed

---

## 📈 Post-Deployment

### **Test Everything**
- [ ] All pages load
- [ ] Navigation works
- [ ] Contact form submits
- [ ] Mobile responsive
- [ ] All links work

### **Set Up Monitoring**
- [ ] Enable analytics
- [ ] Add error tracking
- [ ] Monitor performance

### **Regular Maintenance**
- [ ] Update dependencies: `npm update`
- [ ] Check security: `npm audit`
- [ ] Monitor site health

---

## 🎉 You're Live!

Your portfolio is now live! Share your link:
- Update resume with portfolio URL
- Add to LinkedIn
- Share on Twitter/GitHub
- Send to recruiters

**Congratulations! 🚀**

---

## 📚 Additional Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)

---

Happy deploying! 🎆
