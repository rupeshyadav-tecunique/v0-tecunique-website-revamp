---
name: manage-job-openings
description: >-
  Use this skill when adding new career openings, updating job descriptions, modifying role requirements,
  toggling active/inactive hiring status, or modifying static jobs in lib/jobs-data.ts.
---

# Managing Job Openings & Careers

This skill guides you through posting, editing, or closing job positions on the TecUnique Careers portal.

---

## Method 1: Using the Admin CMS (Recommended)

1. **Log in to Admin**:
   - Go to [http://localhost:3001/admin/login](http://localhost:3001/admin/login).
2. **Navigate to Careers**:
   - In the sidebar, click **Manage Careers** (`/admin/jobs`).
3. **Post a New Opening**:
   - Click **+ New Job Opening** (`/admin/jobs/new`).
   - Fill in:
     - **Job Title**: e.g., `Senior React / Next.js Engineer`.
     - **Department**: e.g., `Engineering`, `QA & Automation`, `Consulting`.
     - **Location**: e.g., `Vadodara, India` or `Remote / Hybrid`.
     - **Employment Type**: e.g., `Full-time`, `Contract`.
     - **Experience**: e.g., `4+ Years`.
     - **Description**: Summary of the role and responsibilities.
     - **Requirements**: Enter qualifications (one bullet per line).
     - **Active Status Checkbox**: Check to make visible immediately on `/careers`.
   - Click **Save Job Opening**.
4. **Closing or Editing a Role**:
   - On `/admin/jobs`, click the **Edit** icon next to a job.
   - To temporarily stop accepting applicants without deleting the post, uncheck **Active** and save. The role will be hidden from the public careers page.
   - To permanently delete, click the **Trash** icon.

---

## Method 2: Adding / Updating Static Fallback Jobs in Code

To update the default fallback jobs:

1. **Open File**:
   [`lib/jobs-data.ts`](../../../lib/jobs-data.ts).
2. **Add a Role** to the `jobs` array:
   ```typescript
   {
     id: "5",
     title: "DevOps & Cloud Engineer",
     department: "Engineering",
     location: "Vadodara, India / Hybrid",
     type: "Full-time",
     experience: "3+ Years",
     description: "Looking for a cloud infrastructure engineer to manage AWS, CI/CD, and Kubernetes workloads.",
     requirements: [
       "3+ years experience with AWS or GCP",
       "Strong expertise in Docker and Kubernetes",
       "Familiarity with GitHub Actions or GitLab CI",
       "Terraform or Infrastructure as Code experience"
     ],
     postedDate: "2026-10-25",
     slug: "devops-cloud-engineer"
   }
   ```

---

## Where Do Job Applications Go?

When candidates click **"Apply for Role"** on `/careers/[slug]`:
1. They submit their name, email, phone, LinkedIn, cover letter, and resume file.
2. The system sends an email to the address defined in `HR_EMAIL_ADDRESS` (configured in `.env.local`).
3. The candidate's resume (`.pdf`, `.doc`, `.docx`) is attached directly to the email.
4. If `HR_EMAIL_ADDRESS` is not set, it falls back to `CONTACT_RECEIVER_EMAILS`.

---

## Verification
1. Visit [http://localhost:3001/careers](http://localhost:3001/careers) to verify the job appears in the listing.
2. Click **View Role** to verify the detailed page `/careers/[slug]` renders the description, requirements, and application modal.
3. Run `npx tsc --noEmit` to verify type safety.
