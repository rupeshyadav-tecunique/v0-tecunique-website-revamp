import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using TECUNIQUE's website and services.",
}

export default function TermsOfServicePage() {
  const lastUpdated = "May 1, 2024"

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-slate prose-lg mt-12 max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
          <p>
            Welcome to TECUNIQUE. By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our website.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. Use of the Website</h2>
          <p>
            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of TECUNIQUE and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. User Content</h2>
          <p>
            If you submit any content to our website (such as through contact forms), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, and modify that content for the purposes of providing our services and conducting our business.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">4. Limitation of Liability</h2>
          <p>
            TECUNIQUE shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our website or services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">5. Disclaimer of Warranties</h2>
          <p>
            Our website is provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied. We do not guarantee that the website will be error-free or uninterrupted.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">6. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Vadodara, Gujarat.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the updated terms on our website. Your continued use of the website after such changes constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">8. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at info@tecunique.com.
          </p>
        </div>
      </div>
    </div>
  )
}
