# Portfolio Website Deployment Guide

This guide covers deploying your portfolio to **Vercel**.

## Prerequisites

- [GitHub](https://github.com/) account
- [Vercel](https://vercel.com/) account
- [Resend](https://resend.com/) API key (for contact form emails)

---

## Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## Step 2: Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Continue with GitHub"**
3. Import your repository

---

## Step 3: Configure Environment Variables

In Vercel's project settings, add:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_XXXXXXX...` (your Resend key) |

> **Important**: Without this, your contact form will not send emails!

---

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait ~1 minute for build to complete
3. Your site is live at `your-project.vercel.app`

---

## Step 5: Update SEO Files

After deployment, update your actual domain in:

- `src/app/sitemap.ts` - Change `baseUrl`
- `src/app/robots.ts` - Change `baseUrl`

Example:
```typescript
const baseUrl = 'https://ayoola-portfolio.vercel.app' // Your actual Vercel URL
```

---

## Quick Checklist

- [ ] Push code to GitHub
- [ ] Import repo to Vercel
- [ ] Add `RESEND_API_KEY` environment variable
- [ ] Deploy
- [ ] Update sitemap/robots with real URL
- [ ] Test contact form sends emails
