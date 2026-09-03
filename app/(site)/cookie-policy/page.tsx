import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn about how TECUNIQUE uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  const lastUpdated = "September 3, 2026"

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-slate prose-lg mt-12 max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
          <p>
            This Cookie Policy explains how TECUNIQUE Private Limited ("TECUNIQUE") uses cookies and related web storage technologies when you visit our website. It outlines what these technologies are, how they are used, and your options for managing them.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. What Are Cookies and Local Storage?</h2>
          <p>
            Cookies are small text files placed on your computer or mobile device when you browse a website. Along with browser local storage and session storage, they help websites operate reliably, remember basic preferences, and measure aggregate visitor engagement.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. Why We Use Cookies</h2>
          <p>
            We use cookies and browser storage strictly for functional and aggregate analytical purposes. We do not use third-party advertising or cross-site tracking cookies.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. Categories of Cookies Used</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Essential & Functional Storage:</strong> Required for basic website operations, navigation, and persistent user preferences (such as light/dark interface theme settings).
            </li>
            <li>
              <strong>Analytics & Performance:</strong> Used to collect privacy-friendly, aggregate telemetry (such as page visit volumes, referring channels, and site performance) to help us maintain website speed and improve user navigation.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">4. Overview of Production Technologies</h2>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 uppercase font-semibold">
                <tr>
                  <th className="p-3">Technology / Provider</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">theme / next-themes</td>
                  <td className="p-3">Functional (Local Storage)</td>
                  <td className="p-3">Stores UI color mode preference</td>
                  <td className="p-3">Persistent</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">_vercel_analytics / Web Vitals</td>
                  <td className="p-3">Analytics</td>
                  <td className="p-3">Measures anonymous aggregate page performance</td>
                  <td className="p-3">Session / 24h</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">5. How to Control Cookies</h2>
          <p>
            You can control or disable cookies directly through your web browser settings. Most browsers allow you to block cookies, delete existing cookies, or set alerts before cookies are placed.
          </p>
          <p className="text-sm">
            Please refer to your browser's documentation (e.g. Chrome, Firefox, Safari, or Edge) for instructions on managing cookies. If you disable essential browser storage, some parts of the website may not function as intended.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically to reflect technical or regulatory changes. Any revisions will be published on this page.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">7. Contact Us</h2>
          <p>
            If you have questions regarding our cookie practices, please contact us at:
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
