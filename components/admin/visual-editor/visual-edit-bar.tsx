"use client"

import { useState } from "react"
import Link from "next/link"
import { useVisualEdit } from "./visual-edit-context"
import { ImageEditorModal } from "./image-editor-modal"
import { Button } from "@/components/ui/button"
import { 
  Pencil, 
  Eye, 
  Save, 
  RotateCcw, 
  Settings, 
  Sparkles,
  CheckCircle2
} from "lucide-react"

export function VisualEditBar() {
  const { 
    isAdmin, 
    isEditing, 
    setIsEditing, 
    hasUnsavedChanges, 
    saveChanges, 
    discardChanges 
  } = useVisualEdit()

  const [saving, setSaving] = useState(false)

  if (!isAdmin) return null

  const handleSave = async () => {
    setSaving(true)
    try {
      await saveChanges()
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] max-w-xl w-[92vw] sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-300">
        <div className="bg-slate-950/90 text-white backdrop-blur-lg rounded-2xl p-2 sm:px-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-800 flex items-center justify-between sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
          
          {/* Admin Status Pill */}
          <div className="flex items-center gap-2 pl-1 pr-2 border-r border-slate-800">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isEditing ? "bg-amber-400" : "bg-emerald-400"} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isEditing ? "bg-amber-500" : "bg-emerald-500"}`} />
            </span>
            <span className="font-bold text-[11px] uppercase tracking-wider text-slate-300 hidden md:inline">
              Visual Editor
            </span>
          </div>

          {/* Edit Mode Toggle */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
              isEditing
                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                : "bg-slate-800 hover:bg-slate-700 text-slate-200"
            }`}
          >
            {isEditing ? (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Exit Edit Mode</span>
              </>
            ) : (
              <>
                <Pencil className="w-3.5 h-3.5" />
                <span>Click & Edit Page</span>
              </>
            )}
          </button>

          {/* Unsaved Changes Actions */}
          {hasUnsavedChanges && (
            <div className="flex items-center gap-2 pl-1 border-l border-slate-800 animate-in fade-in">
              <Button
                variant="ghost"
                size="sm"
                onClick={discardChanges}
                className="h-8 text-xs text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 px-2"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Discard
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                disabled={saving}
                className="h-8 text-xs bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-3 shadow-md shadow-emerald-500/20 rounded-xl"
              >
                <Save className="w-3.5 h-3.5 mr-1" />
                {saving ? "Saving..." : "Save to Live"}
              </Button>
            </div>
          )}

          {/* Link to Admin Dashboard */}
          <Link
            href="/admin/pages"
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors ml-auto sm:ml-1"
            title="Open Admin CMS"
          >
            <Settings className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <ImageEditorModal />
    </>
  )
}
