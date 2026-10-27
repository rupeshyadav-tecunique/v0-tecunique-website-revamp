---
name: deploy-and-verify-website
description: >-
  Use this skill when preparing to publish changes to production, running local build checks,
  triggering GitHub Actions CI/CD, verifying Vercel deployments, or troubleshooting live issues.
---

# Deploying & Verifying the Website

This skill gives any non-technical or junior engineer a safe, foolproof workflow to verify, deploy, and monitor website updates.

---

## The 4-Step Deployment Flow

```text
[1. Local Check]  ➔  [2. Git Push]  ➔  [3. GitHub Actions CI]  ➔  [4. Vercel Live Smoke Test]
```

---

## Step 1: Pre-Deployment Local Check

Before pushing any changes to Git, always run these two commands in your terminal:

1. **Verify TypeScript compiles without syntax errors**:
   ```bash
   npx tsc --noEmit
   ```
   *Expected result*: No red errors, command exits cleanly.
2. **Verify production bundle builds successfully**:
   ```bash
   npm run build
   ```
   *Expected result*: Next.js shows `○ (Static)` and `ƒ (Dynamic)` routes generated successfully.

---

## Step 2: Push Changes to GitHub

Commit your changes with a clear message and push to your branch:

```bash
git add .
git commit -m "Update homepage copy and add new career opening"
git push origin <your-branch-name>
```

---

## Step 3: Monitor GitHub Actions CI

1. Open your repository on GitHub.
2. Click the **Actions** tab.
3. You will see the **CI / Build & Typecheck** workflow running.
4. Wait for the green checkmark (✔). This verifies that dependencies, TypeScript, and the build compile without breaking.

---

## Step 4: Verify on Vercel (Production)

Once merged into `main`:
1. Vercel will automatically build and publish the changes within 60–90 seconds.
2. Open the production site in your browser: [https://www.tecunique.com](https://www.tecunique.com).
3. Do a quick 2-minute **Smoke Test**:
   - Check the pages you modified.
   - Hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`) to bypass browser cache.
   - Test submitting the contact form if you changed API routes.

---

## Emergency Rollback: What if something goes wrong?

If a mistake was deployed to production:
1. Log into [Vercel Dashboard](https://vercel.com).
2. Go to your project > **Deployments** tab.
3. Find the previous deployment that was working.
4. Click the three dots menu (**...**) on the right of that deployment.
5. Select **Promote to Production**.
6. Vercel will instantly switch live traffic back to the working version in ~5 seconds.
