"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  ArrowLeft, 
  Save, 
  ExternalLink, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Sparkles, 
  ImageIcon, 
  Megaphone,
  CheckCircle2
} from "lucide-react"
import { toast } from "sonner"
import { defaultPagesContent } from "@/lib/data/pages-content.data"

interface PageContentEditorProps {
  slug: string
  initialData: any
  pageInfo: {
    name: string
    href: string
    description: string
  }
}

export default function PageContentEditor({ slug, initialData, pageInfo }: PageContentEditorProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<any>(initialData || {})
  const [isSaving, setIsSaving] = useState(false)

  const handleFieldChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleStatChange = (index: number, key: "number" | "label", value: string) => {
    const stats = [...(formData.stats || [])]
    stats[index] = { ...stats[index], [key]: value }
    setFormData((prev: any) => ({ ...prev, stats }))
  }

  const addStat = () => {
    const stats = [...(formData.stats || []), { number: "10+", label: "New Metric" }]
    setFormData((prev: any) => ({ ...prev, stats }))
  }

  const removeStat = (index: number) => {
    const stats = (formData.stats || []).filter((_: any, i: number) => i !== index)
    setFormData((prev: any) => ({ ...prev, stats }))
  }

  const handleParagraphChange = (index: number, value: string) => {
    const storyParagraphs = [...(formData.storyParagraphs || [])]
    storyParagraphs[index] = value
    setFormData((prev: any) => ({ ...prev, storyParagraphs }))
  }

  const addParagraph = () => {
    const storyParagraphs = [...(formData.storyParagraphs || []), ""]
    setFormData((prev: any) => ({ ...prev, storyParagraphs }))
  }

  const removeParagraph = (index: number) => {
    const storyParagraphs = (formData.storyParagraphs || []).filter((_: any, i: number) => i !== index)
    setFormData((prev: any) => ({ ...prev, storyParagraphs }))
  }

  const handleResetToDefaults = () => {
    if (confirm("Are you sure you want to restore the original default content for this page? Any unsaved edits will be lost.")) {
      const defaults = defaultPagesContent[slug] || {}
      setFormData(defaults)
      toast.info("Restored default content. Click 'Save Changes' to apply.")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const res = await fetch(`/api/admin/pages/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || "Failed to save page changes")
      }

      toast.success("Page content updated and published successfully!")
      router.refresh()
    } catch (error: any) {
      console.error(error)
      toast.error(error.message || "Something went wrong while saving.")
    } finally {
      setIsSaving(false)
    }
  }

  const isHome = slug === "home"
  const isAbout = slug === "about"
  const isServicesHub = slug === "services"
  const isServiceDetail = slug.startsWith("services-")

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="/admin/pages">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">{pageInfo.name}</h1>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                {pageInfo.href}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Edit the live text and images. Changes appear immediately on the website upon saving.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button variant="outline" size="sm" asChild>
            <Link href={pageInfo.href} target="_blank">
              <ExternalLink className="mr-1.5 h-4 w-4" />
              View Live Page
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleResetToDefaults}
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="mr-1.5 h-4 w-4" />
            Reset Defaults
          </Button>
          <Button type="submit" disabled={isSaving} className="rounded-xl shadow-md">
            <Save className="mr-1.5 h-4 w-4" />
            {isSaving ? "Publishing..." : "Save Changes"}
          </Button>
        </div>
      </div>

      {/* 1. Hero Section */}
      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-blue" />
            Hero Banner Section
          </CardTitle>
          <CardDescription>
            The prominent top section seen first when visitors land on this page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="heroBadge">Eyebrow / Badge Text</Label>
              <Input
                id="heroBadge"
                value={formData.heroBadge || formData.badge || ""}
                onChange={(e) => {
                  handleFieldChange("heroBadge", e.target.value)
                  handleFieldChange("badge", e.target.value)
                }}
                placeholder="e.g. Dedicated Engineering Partner"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heroTitle">Primary Headline</Label>
              <Input
                id="heroTitle"
                value={formData.heroTitle || formData.title || ""}
                onChange={(e) => {
                  handleFieldChange("heroTitle", e.target.value)
                  handleFieldChange("title", e.target.value)
                }}
                placeholder="e.g. Trusted Software Engineering"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="heroHighlight">Highlighted / Colored Words</Label>
            <Input
              id="heroHighlight"
              value={formData.heroHighlight || formData.titleHighlight || ""}
              onChange={(e) => {
                handleFieldChange("heroHighlight", e.target.value)
                handleFieldChange("titleHighlight", e.target.value)
              }}
              placeholder="e.g. Dedicated Teams"
            />
            <p className="text-[11px] text-muted-foreground">
              These words are accented in the brand blue color within the headline.
            </p>
          </div>

          {isHome && (
            <div className="space-y-2">
              <Label htmlFor="rotatingWords">Rotating Text Words (Comma-separated)</Label>
              <Input
                id="rotatingWords"
                value={Array.isArray(formData.rotatingWords) ? formData.rotatingWords.join(", ") : formData.rotatingWords || ""}
                onChange={(e) =>
                  handleFieldChange(
                    "rotatingWords",
                    e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                  )
                }
                placeholder="Dedicated Teams, Product Engineering, QA Automation, Cloud Solutions, Atlassian Apps"
              />
              <p className="text-[11px] text-muted-foreground">
                Words that rotate dynamically underneath the homepage headline.
              </p>
            </div>
          )}

          {isAbout && (
            <div className="space-y-2">
              <Label htmlFor="tagline">Sub-tagline (Accent phrase)</Label>
              <Input
                id="tagline"
                value={formData.tagline || ""}
                onChange={(e) => handleFieldChange("tagline", e.target.value)}
                placeholder="e.g. Software engineering teams built for long-term product work."
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="heroSubtitle">Subheadline / Overview Description</Label>
            <Textarea
              id="heroSubtitle"
              rows={3}
              value={formData.heroSubtitle || formData.subtitle || formData.description || ""}
              onChange={(e) => {
                handleFieldChange("heroSubtitle", e.target.value)
                handleFieldChange("subtitle", e.target.value)
                handleFieldChange("description", e.target.value)
              }}
              placeholder="Write a clear 2-3 sentence overview..."
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* 2. Trust Metrics (Homepage) */}
      {isHome && (
        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Trust Metrics & Numbers
              </CardTitle>
              <CardDescription>
                High-impact stats shown directly below the hero headline.
              </CardDescription>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={addStat}>
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              Add Stat
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {(formData.stats || []).map((stat: any, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-1/3">
                  <Input
                    value={stat.number}
                    onChange={(e) => handleStatChange(index, "number", e.target.value)}
                    placeholder="e.g. 15+"
                    className="font-bold text-center"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Input
                    value={stat.label}
                    onChange={(e) => handleStatChange(index, "label", e.target.value)}
                    placeholder="e.g. Years in Software Services"
                    required
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeStat(index)}
                  disabled={formData.stats.length <= 1}
                  className="text-muted-foreground hover:text-rose-500 shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* 3. About Page: Our Story & Image Section */}
      {isAbout && (
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-brand-purple" />
              Our Story & Images
            </CardTitle>
            <CardDescription>
              Company story narrative and featured showcase image on the About page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="storyTitle">Section Heading</Label>
              <Input
                id="storyTitle"
                value={formData.storyTitle || "Our Story"}
                onChange={(e) => handleFieldChange("storyTitle", e.target.value)}
              />
            </div>

            {/* Story Image URL & Live Preview */}
            <div className="space-y-3">
              <Label htmlFor="storyImage">Featured About Image Path / URL</Label>
              <div className="flex gap-3">
                <Input
                  id="storyImage"
                  value={formData.storyImage || ""}
                  onChange={(e) => handleFieldChange("storyImage", e.target.value)}
                  placeholder="/images/about/about-4.webp or https://..."
                />
              </div>
              <p className="text-[11px] text-muted-foreground">
                You can use existing images like <code className="text-xs bg-muted px-1 py-0.5 rounded">/images/about/about-4.webp</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">/images/about/about-1.webp</code>, or any public image URL.
              </p>

              {/* Live Image Preview */}
              {formData.storyImage && (
                <div className="mt-3 relative w-48 h-36 rounded-xl overflow-hidden border border-border/80 shadow-inner bg-muted">
                  <Image
                    src={formData.storyImage}
                    alt="Preview"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none"
                    }}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="storyBadgeTitle">Image Overlay Badge Title</Label>
                <Input
                  id="storyBadgeTitle"
                  value={formData.storyBadgeTitle || ""}
                  onChange={(e) => handleFieldChange("storyBadgeTitle", e.target.value)}
                  placeholder="e.g. Built for Long-Term Product Work"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storyBadgeSubtitle">Image Overlay Badge Subtitle</Label>
                <Input
                  id="storyBadgeSubtitle"
                  value={formData.storyBadgeSubtitle || ""}
                  onChange={(e) => handleFieldChange("storyBadgeSubtitle", e.target.value)}
                  placeholder="e.g. Stable engineering teams. Practical collaboration."
                />
              </div>
            </div>

            {/* Paragraphs list */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <Label>Story Paragraphs</Label>
                <Button type="button" variant="outline" size="sm" onClick={addParagraph}>
                  <Plus className="mr-1.5 h-3.5 w-3.5" />
                  Add Paragraph
                </Button>
              </div>

              {(formData.storyParagraphs || []).map((paragraph: string, index: number) => (
                <div key={index} className="flex gap-3 items-start">
                  <Textarea
                    rows={3}
                    value={paragraph}
                    onChange={(e) => handleParagraphChange(index, e.target.value)}
                    placeholder={`Paragraph #${index + 1}...`}
                    className="flex-1"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeParagraph(index)}
                    disabled={formData.storyParagraphs.length <= 1}
                    className="text-muted-foreground hover:text-rose-500 shrink-0 mt-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 4. Call to Action (CTA) Section */}
      {(isServicesHub || isServiceDetail) && (
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-brand-blue" />
              Call To Action (Bottom Banner)
            </CardTitle>
            <CardDescription>
              The conversion banner positioned at the bottom of the page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {formData.ctaEyebrow !== undefined && (
              <div className="space-y-2">
                <Label htmlFor="ctaEyebrow">CTA Eyebrow Label</Label>
                <Input
                  id="ctaEyebrow"
                  value={formData.ctaEyebrow || ""}
                  onChange={(e) => handleFieldChange("ctaEyebrow", e.target.value)}
                  placeholder="e.g. NEED SOFTWARE ENGINEERING SUPPORT?"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="ctaTitle">CTA Headline</Label>
              <Input
                id="ctaTitle"
                value={formData.ctaTitle || ""}
                onChange={(e) => handleFieldChange("ctaTitle", e.target.value)}
                placeholder="e.g. Ready to Build Your Dedicated Software Team?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ctaDescription">CTA Description</Label>
              <Textarea
                id="ctaDescription"
                rows={3}
                value={formData.ctaDescription || ""}
                onChange={(e) => handleFieldChange("ctaDescription", e.target.value)}
                placeholder="Tell us the roles, skills, and team structure you need..."
                required
              />
            </div>

            {formData.primaryButtonText !== undefined && (
              <div className="space-y-2">
                <Label htmlFor="primaryButtonText">Primary Button Text</Label>
                <Input
                  id="primaryButtonText"
                  value={formData.primaryButtonText || ""}
                  onChange={(e) => handleFieldChange("primaryButtonText", e.target.value)}
                  placeholder="e.g. Discuss Your Requirements"
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Bottom Floating/Fixed Save Button */}
      <div className="flex items-center justify-end gap-3 pt-4">
        <Button variant="ghost" asChild>
          <Link href="/admin/pages">Cancel</Link>
        </Button>
        <Button type="submit" disabled={isSaving} size="lg" className="rounded-xl px-8 shadow-lg shadow-primary/20">
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? "Publishing Changes..." : "Publish Page Changes"}
        </Button>
      </div>
    </form>
  )
}
