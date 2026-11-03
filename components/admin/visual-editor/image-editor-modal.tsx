"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useVisualEdit } from "./visual-edit-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Check, Image as ImageIcon } from "lucide-react"

const presetImages = [
  { label: "About Team Working", path: "/images/about/about-4.webp" },
  { label: "Engineering Collaboration", path: "/images/about/about-1.webp" },
  { label: "Office & Leadership", path: "/images/about/about-2.webp" },
  { label: "Development Lab", path: "/images/about/about-3.webp" },
]

export function ImageEditorModal() {
  const { activeImageModal, closeImageModal, updateField } = useVisualEdit()
  const [selectedUrl, setSelectedUrl] = useState("")

  useEffect(() => {
    if (activeImageModal) {
      setSelectedUrl(activeImageModal.currentSrc)
    }
  }, [activeImageModal])

  if (!activeImageModal) return null

  const handleApply = () => {
    if (selectedUrl.trim()) {
      updateField(activeImageModal.page, activeImageModal.field, selectedUrl.trim())
    }
    closeImageModal()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-border/80 max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-5 border-b border-border/60">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <ImageIcon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-foreground">Change Image</h3>
              <p className="text-xs text-muted-foreground">Field: {activeImageModal.field}</p>
            </div>
          </div>
          <button
            onClick={closeImageModal}
            className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Custom URL or Path Input */}
          <div className="space-y-2">
            <Label htmlFor="imgUrl">Image Path or URL</Label>
            <Input
              id="imgUrl"
              value={selectedUrl}
              onChange={(e) => setSelectedUrl(e.target.value)}
              placeholder="e.g. /images/about/about-4.webp or https://..."
            />
          </div>

          {/* Quick Preset Library */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Or Choose From Company Assets:
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {presetImages.map((preset) => (
                <button
                  key={preset.path}
                  type="button"
                  onClick={() => setSelectedUrl(preset.path)}
                  className={`text-left p-2 rounded-xl border text-xs transition-all flex items-center gap-2 ${
                    selectedUrl === preset.path
                      ? "border-brand-blue bg-blue-50 text-brand-blue font-bold shadow-sm"
                      : "border-border/60 hover:bg-muted text-foreground"
                  }`}
                >
                  <div className="h-8 w-8 relative rounded overflow-hidden shrink-0 bg-muted">
                    <Image src={preset.path} alt={preset.label} fill className="object-cover" />
                  </div>
                  <span className="truncate">{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Live Preview */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Live Preview
            </Label>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-border/80 bg-slate-50 flex items-center justify-center">
              {selectedUrl ? (
                <Image
                  src={selectedUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none"
                  }}
                />
              ) : (
                <span className="text-xs text-muted-foreground">No image specified</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-4 bg-muted/30 border-t border-border/60">
          <Button variant="ghost" onClick={closeImageModal}>
            Cancel
          </Button>
          <Button onClick={handleApply} className="rounded-xl px-6">
            <Check className="mr-1.5 h-4 w-4" />
            Apply Image
          </Button>
        </div>
      </div>
    </div>
  )
}
