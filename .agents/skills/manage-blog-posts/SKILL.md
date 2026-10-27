---
name: manage-blog-posts
description: >-
  Use this skill when adding a new blog post, editing existing technical articles,
  updating blog categories, publishing drafts, or modifying static blog data in lib/blog-data.ts.
---

# Managing Blog Posts & Articles

This skill guides you through publishing, editing, or removing blog posts on the TecUnique website.

---

## Method 1: Using the Admin CMS (No Code Required)

The easiest way for non-technical users to publish articles is through the web interface.

1. **Access the Admin Dashboard**:
   - Go to [http://localhost:3001/admin/login](http://localhost:3001/admin/login) (or `https://www.tecunique.com/admin/login` on production).
   - Enter your admin credentials.
2. **Navigate to Blog Management**:
   - In the sidebar, click **Manage Blogs** (`/admin/blog`).
3. **Create a New Article**:
   - Click the **+ New Article** button (`/admin/blog/new`).
   - Fill in:
     - **Title**: Descriptive headline (e.g., `Why Microservices Fail Without Observability`).
     - **Category**: e.g., `Technology`, `Leadership`, `QA & Automation`, `Atlassian`.
     - **Author**: e.g., `TECUNIQUE Engineering Team` or specific author.
     - **Publication Date**: Select date.
     - **Excerpt**: 2-3 sentence overview shown on the card grid.
     - **Article Content**: Full body text supporting Markdown (`## Heading`, `**bold**`, `- bullet points`).
   - Click **Publish Article** (or **Save as Draft** if still editing).
4. **Edit or Delete**:
   - In the table on `/admin/blog`, use the **Edit (pencil)** icon to update content or the **Delete (trash)** icon to remove an article.

---

## Method 2: Adding / Updating Static Fallback Blogs in Code

If you prefer modifying code directly, or want to update the offline fallback dataset:

1. **Open File**:
   [`lib/blog-data.ts`](../../../lib/blog-data.ts).
2. **Add or Edit an Object** in the `blogPosts` array:
   ```typescript
   {
     id: "9",
     slug: "your-new-article-slug-lowercase",
     title: "Your Article Title Goes Here",
     excerpt: "A brief 2-3 sentence summary of what this article is about.",
     content: `Opening paragraph introducing the topic...

   ## Section Title

   Key insights and explanations go here.

   - Key point number one
   - Key point number two

   ## Conclusion

   Final thoughts and wrap up.`,
     date: "2026-10-20",
     author: "TECUNIQUE Team",
     category: "Technology",
     readTime: "5 min read",
     image: "/images/blog/blog1.jpg"
   }
   ```
3. **Add Cover Image**:
   - Place any banner image in `public/images/blog/` (e.g. `blog4.jpg`).
   - Set `image: "/images/blog/blog4.jpg"`.
4. **Slug Guidelines**:
   - Use lowercase letters, numbers, and hyphens only (`my-awesome-post`).
   - Avoid special characters (`?`, `!`, `&`, `@`).

---

## Verifying Your Changes

1. Open [http://localhost:3001/blog](http://localhost:3001/blog) to see the article card in the grid.
2. Click on the article to ensure the single page (`/blog/[slug]`) loads cleanly with headings and formatting.
3. Run `npx tsc --noEmit` in your terminal to ensure no TypeScript syntax errors were introduced.
