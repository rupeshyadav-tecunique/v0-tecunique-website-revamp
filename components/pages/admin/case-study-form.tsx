"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { defaultAccentColor } from "@/lib/design-tokens"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"

export default function CaseStudyForm({ initialData = null }: { initialData?: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const isEditing = !!initialData

  const [formData, setFormData] = useState({
    id: initialData?.id || "",
    client: initialData?.client || "",
    color: initialData?.color || defaultAccentColor,
    industry: initialData?.industry || "",
    partnership: initialData?.partnership || "",
    category: initialData?.category || "",
    location: initialData?.location || "",
    description: initialData?.description || "",
    tagline: initialData?.tagline || "",
    tags: initialData?.tags?.join(", ") || "",
    results: initialData?.results || [{ metric: "", label: "" }],
    sections: initialData?.sections || [{ title: "", content: "" }],
    testimonials: initialData?.testimonials || [{ quote: "", author: "", role: "" }],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleArrayChange = (field: string, index: number, key: string, value: string) => {
    const newArray = [...(formData as any)[field]]
    newArray[index][key] = value
    setFormData({ ...formData, [field]: newArray })
  }

  const addArrayItem = (field: string, defaultItem: any) => {
    setFormData({ ...formData, [field]: [...(formData as any)[field], defaultItem] })
  }

  const removeArrayItem = (field: string, index: number) => {
    const newArray = [...(formData as any)[field]]
    newArray.splice(index, 1)
    setFormData({ ...formData, [field]: newArray })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(",").map((t: string) => t.trim()).filter(Boolean),
      }

      const url = isEditing ? `/api/admin/case-studies/${formData.id}` : "/api/admin/case-studies"
      const method = isEditing ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed to save")

      router.push("/admin/case-studies")
      router.refresh()
    } catch (error) {
      console.error(error)
      alert("Failed to save case study")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Basic Info */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Basic Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>ID (URL Slug)</Label>
            <Input name="id" value={formData.id} onChange={handleChange} required disabled={isEditing} />
          </div>
          <div className="space-y-2">
            <Label>Client Name</Label>
            <Input name="client" value={formData.client} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label>Brand Color (Hex)</Label>
            <Input name="color" type="color" className="h-10 p-1" value={formData.color} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>Industry</Label>
            <Input name="industry" value={formData.industry} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>Partnership Duration</Label>
            <Input name="partnership" value={formData.partnership} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>Service Category</Label>
            <Input name="category" value={formData.category} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>Location</Label>
            <Input name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label>Tags (Comma separated)</Label>
            <Input name="tags" value={formData.tags} onChange={handleChange} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Tagline (Italicized Quote)</Label>
          <Input name="tagline" value={formData.tagline} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label>Short Description (The Challenge)</Label>
          <Textarea name="description" value={formData.description} onChange={handleChange} rows={3} required />
        </div>
      </div>

      {/* Key Results */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Key Results</h2>
          <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("results", { metric: "", label: "" })}>
            <Plus className="w-4 h-4 mr-2" /> Add Result
          </Button>
        </div>
        {formData.results.map((result: any, index: number) => (
          <div key={index} className="flex gap-4 items-center">
            <Input placeholder="Metric (e.g. 50%)" value={result.metric} onChange={(e) => handleArrayChange("results", index, "metric", e.target.value)} />
            <Input placeholder="Label (e.g. Increase)" value={result.label} onChange={(e) => handleArrayChange("results", index, "label", e.target.value)} />
            <Button type="button" variant="ghost" className="text-red-500" onClick={() => removeArrayItem("results", index)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Content Sections</h2>
          <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("sections", { title: "", content: "" })}>
            <Plus className="w-4 h-4 mr-2" /> Add Section
          </Button>
        </div>
        {formData.sections.map((section: any, index: number) => (
          <div key={index} className="space-y-4 p-4 border rounded-xl relative">
            <Button type="button" variant="ghost" className="absolute top-2 right-2 text-red-500" onClick={() => removeArrayItem("sections", index)}>
              <Trash2 className="w-4 h-4" />
            </Button>
            <div className="space-y-2 pt-4">
              <Label>Section Title</Label>
              <Input value={section.title} onChange={(e) => handleArrayChange("sections", index, "title", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <Textarea rows={4} value={section.content} onChange={(e) => handleArrayChange("sections", index, "content", e.target.value)} />
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Testimonials</h2>
          <Button type="button" variant="outline" size="sm" onClick={() => addArrayItem("testimonials", { quote: "", author: "", role: "" })}>
            <Plus className="w-4 h-4 mr-2" /> Add Testimonial
          </Button>
        </div>
        {formData.testimonials.map((test: any, index: number) => (
          <div key={index} className="space-y-4 p-4 border rounded-xl relative">
            <Button type="button" variant="ghost" className="absolute top-2 right-2 text-red-500" onClick={() => removeArrayItem("testimonials", index)}>
              <Trash2 className="w-4 h-4" />
            </Button>
            <div className="space-y-2 pt-4">
              <Label>Quote</Label>
              <Textarea rows={3} value={test.quote} onChange={(e) => handleArrayChange("testimonials", index, "quote", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Author</Label>
                <Input value={test.author} onChange={(e) => handleArrayChange("testimonials", index, "author", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Role/Company</Label>
                <Input value={test.role} onChange={(e) => handleArrayChange("testimonials", index, "role", e.target.value)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/case-studies")}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Case Study"}
        </Button>
      </div>
    </form>
  )
}
