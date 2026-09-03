import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how TECUNIQUE collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 3, 2026"

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-slate prose-lg mt-12 max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
          <p>
            At TECUNIQUE Private Limited ("TECUNIQUE"), we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, submit inquiries, apply for careers, or interact with our services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us through contact forms, job applications, email communications, or when engaging with our services. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact details such as your name, work email address, phone number, and company name.</li>
            <li>Business inquiry details, project specifications, and messages submitted through contact forms.</li>
            <li>Job application information, including your resume/CV, employment history, skills, qualifications, portfolio links, and other details provided when applying for career opportunities.</li>
            <li>Professional background and experience relevant to business partnerships or employment.</li>
            <li>Technical usage data collected automatically (such as browser type, approximate geography, and referring pages) to maintain website performance and security.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. How We Use Your Information</h2>
          <p>
            We use the personal information we collect for legitimate business purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to business inquiries, service requests, and partnership discussions.</li>
            <li>Evaluating candidates, conducting recruitment processes, and considering employment applications.</li>
            <li>Operating, optimizing, and securing our website.</li>
            <li>Fulfilling contractual obligations and complying with applicable statutory or legal requirements.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. Cookies & Analytics</h2>
          <p>
            We use essential and analytics cookies to ensure proper website functionality and monitor aggregate performance metrics. For detailed information about the cookies and similar technologies used on our website, please see our <Link href="/cookie-policy" className="text-blue-600 underline hover:text-blue-700">Cookie Policy</Link>.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">4. Data Retention</h2>
          <p>
            We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, considering employment applications, maintaining business records, and meeting applicable legal or regulatory requirements.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">5. Information Sharing and Disclosure</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties. We may share data with trusted infrastructure and service providers (such as hosting, analytics, or communication platforms) solely to operate our website and conduct business, subject to strict confidentiality agreements.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or accidental loss.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">7. Your Rights</h2>
          <p>
            Depending on applicable data protection laws, you may have rights regarding your personal information, including the right to request access, correction, or deletion of your data. To exercise these rights or make inquiries, please contact us at info@tecunique.com.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">8. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any updates will be posted on this page with an updated "Last updated" date.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your personal information is handled, please contact:
          </p>
          <p className="font-semibold text-foreground">
            TECUNIQUE Private Limited<br />
            1002, Neptune Edge, Sarabhai Campus,<br />
            Vadodara – 390 007, Gujarat, India<br />
            Email: info@tecunique.com
          </p>
        </div>
      </div>
    </div>
  )
}
