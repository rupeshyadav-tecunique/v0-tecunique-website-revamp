import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn about how TECUNIQUE uses cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  const lastUpdated = "May 1, 2024"

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
            This Cookie Policy explains how TECUNIQUE uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">2. Why do we use cookies?</h2>
          <p>
            We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our online properties.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">3. Types of cookies we use</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features.
            </li>
            <li>
              <strong>Analytics and Performance Cookies:</strong> These cookies are used to collect information that is used in aggregate form to help us understand how our website is being used.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">4. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">5. Changes to this Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-foreground">6. More Information</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at info@tecunique.com.
          </p>
        </div>
      </div>
    </div>
  )
}
