import Link from "next/link"
import { ArrowLeft, Home, Search, Ghost } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-12 pb-24">
      {/* Background blobs to match the site aesthetic */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)" }}
        />
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        />
      </div>

      <div className="text-center max-w-2xl mx-auto reveal animate-fade-up">
        {/* Floating icon/graphic */}
        <div className="relative mb-8 inline-block animate-float">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150" />
          <div className="relative h-24 w-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/40 rotate-12">
            <Ghost className="h-12 w-12 text-white -rotate-12" />
          </div>
        </div>

        <h1 className="font-display text-8xl sm:text-[10rem] font-extrabold leading-none tracking-tighter mb-4">
          <span className="gradient-text">404</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          Lost in the digital void?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for has either been moved, deleted, or simply never existed in our universe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-xl px-8 shadow-lg shadow-primary/20" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="ghost" className="rounded-xl px-8 border border-border/60 hover:bg-white" asChild>
            <Link href="/blog">
              <Search className="mr-2 h-4 w-4" />
              Explore Blogs
            </Link>
          </Button>
        </div>

        {/* Support link */}
        <p className="mt-12 text-sm text-muted-foreground">
          Think this is a mistake? {" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  )
}
