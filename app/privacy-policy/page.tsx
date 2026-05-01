import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how TECUNIQUE collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 1, 2024"

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
            At TECUNIQUE, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or engage with our services. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information (email, phone number)</li>
            <li>Company details</li>
            <li>Professional background and experience</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing and maintaining our services</li>
            <li>Communicating with you about our projects and offerings</li>
            <li>Improving our website and user experience</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">5. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us at info@tecunique.com.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-semibold text-foreground">
            TECUNIQUE Private Limited<br />
            Email: info@tecunique.com<br />
            Address: Vadodara, Gujarat, India
          </p>
        </div>
      </div>
    </div>
  )
}
