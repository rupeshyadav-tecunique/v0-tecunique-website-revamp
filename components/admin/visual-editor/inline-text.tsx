"use client"

import React, { useRef, useEffect } from "react"
import { useVisualEdit } from "./visual-edit-context"
import { Pencil } from "lucide-react"

export interface InlineTextProps {
  page: string
  field: string
  initialValue?: string
  defaultValue?: string
  multiline?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div"
  className?: string
  placeholder?: string
}

export function InlineText({
  page,
  field,
  initialValue,
  defaultValue,
  multiline = false,
  as: Component = "span",
  className = "",
  placeholder = "Click to edit text...",
}: InlineTextProps) {
  const { isEditing, updateField, pendingChanges } = useVisualEdit()
  const ref = useRef<HTMLElement>(null)

  const resolvedInitial = initialValue ?? defaultValue ?? ""
  // Use pending changes if any, otherwise resolvedInitial
  const currentValue = pendingChanges[page]?.[field] ?? resolvedInitial

  useEffect(() => {
    if (ref.current && ref.current.innerText !== currentValue) {
      ref.current.innerText = currentValue || ""
    }
  }, [currentValue])

  if (!isEditing) {
    return <Component className={className}>{currentValue || resolvedInitial}</Component>
  }

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText
    if (text !== currentValue) {
      updateField(page, field, text)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    // If not multiline and pressing Enter, blur and save
    if (e.key === "Enter" && !multiline && ["h1", "h2", "h3", "h4", "span"].includes(Component)) {
      e.preventDefault()
      e.currentTarget.blur()
    }
  }

  return (
    <Component
      ref={ref as any}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`relative group/editable outline outline-2 outline-dashed outline-brand-blue/70 bg-brand-blue/[0.04] hover:bg-brand-blue/[0.08] rounded px-1 -mx-1 transition-all cursor-text focus:outline-solid focus:outline-brand-blue focus:bg-white focus:shadow-md ${className}`}
      title={`Click to edit (${field})`}
      data-placeholder={placeholder}
    >
      {currentValue || resolvedInitial}
    </Component>
  )
}
