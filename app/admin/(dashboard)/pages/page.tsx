import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { editablePagesList } from "@/lib/data/pages-content.data"
import { 
  FileEdit, 
  ExternalLink, 
  Home, 
  Info, 
  Layers, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Code2,
  Sparkles,
  ArrowRight
} from "lucide-react"

export const dynamic = "force-dynamic"

const iconMap: Record<string, any> = {
  home: Home,
  about: Info,
  services: Layers,
  "services-dedicated-teams": Users,
  "services-qa": ShieldCheck,
  "services-atlassian": Cpu,
  "services-product-engineering": Code2,
}

export default function AdminPagesList() {
  const mainPages = editablePagesList.filter((p) => p.category === "Main Pages")
  const servicePages = editablePagesList.filter((p) => p.category === "Services")

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Content Management
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Edit Site Pages</h1>
          <p className="text-muted-foreground mt-1">
            Update headlines, marketing copy, badges, and images directly without touching code.
          </p>
        </div>
      </div>

      {/* Main Pages Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-blue" />
          Core Website Pages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainPages.map((page) => {
            const Icon = iconMap[page.slug] || FileEdit
            return (
              <Card key={page.slug} className="group border-border/60 hover:border-brand-blue/40 hover:shadow-md transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      {page.href}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">{page.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{page.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex items-center justify-between gap-3 border-t border-border/40 mt-4">
                  <Button variant="ghost" size="sm" asChild className="text-xs text-muted-foreground hover:text-foreground">
                    <Link href={page.href} target="_blank">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      View Live
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="rounded-lg shadow-sm">
                    <Link href={`/admin/pages/${page.slug}`}>
                      <FileEdit className="mr-1.5 h-3.5 w-3.5" />
                      Edit Content
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Service Pages Section */}
      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-indigo" />
          Service Landing Pages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicePages.map((page) => {
            const Icon = iconMap[page.slug] || FileEdit
            return (
              <Card key={page.slug} className="group border-border/60 hover:border-brand-blue/40 hover:shadow-md transition-all flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      {page.href}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold mt-4">{page.name}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex items-center justify-between gap-3 border-t border-border/40 mt-4">
                  <Button variant="ghost" size="sm" asChild className="text-xs text-muted-foreground hover:text-foreground">
                    <Link href={page.href} target="_blank">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      View Live
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="rounded-lg shadow-sm">
                    <Link href={`/admin/pages/${page.slug}`}>
                      <FileEdit className="mr-1.5 h-3.5 w-3.5" />
                      Edit Content
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
