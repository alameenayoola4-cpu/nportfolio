# Portfolio Website Deployment Guide

This guide covers how to run your portfolio locally and deploy it to production using Vercel.

## 1. Running Locally (No Environment File Needed)

This project is a static portfolio and **does not require an `.env` file** to run locally in its current state. The contact form is set to "demo mode" and will log submissions to the browser console.

### Steps to Run:
1.  Open your terminal in the project directory.
2.  Install dependencies (if you haven't already):
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note**: If you decide to add real email sending (e.g., using Resend or EmailJS) later, you will need to add an `.env` file with your API keys. For now, it works out of the box!

---

## 2. Deploying to Vercel (Recommended)

Vercel is the creators of Next.js and provides the easiest deployment experience.

### Prerequisites:
-   A [GitHub](https://github.com/) account.
-   A [Vercel](https://vercel.com/) account.

### Implementation Steps:

1.  **Push to GitHub**:
    -   Create a new repository on GitHub.
    -   Run these commands in your project terminal:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git push -u origin main
        ```

2.  **Connect to Vercel**:
    -   Go to [vercel.com/new](https://vercel.com/new).
    -   Click **"Continue with GitHub"**.
    -   Import the repository you just created.

3.  **Configure Project**:
    -   **Framework Preset**: Ensure "Next.js" is selected.
    -   **Root Directory**: `./` (default).
    -   **Build Command**: `npm run build` (default).
    -   **Environment Variables**: Leave empty for now.

4.  **Deploy**:
    -   Click **"Deploy"**.
    -   Wait for the build to complete (approx. 1 minute).
    -   Your site is now live! Vercel will give you a URL like `your-portfolio.vercel.app`.

---

## 3. SEO & Customization Tips

-   **Metadata**: Update `src/app/layout.tsx` with your real name and description.
-   **Favicon**: Replace `public/favicon.ico` with your own logo.
-   **Images**: Add your real photos to the `public/` folder and update paths in `src/lib/data.ts`.
