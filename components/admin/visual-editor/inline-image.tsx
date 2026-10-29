"use client"

import React from "react"
import Image, { ImageProps } from "next/image"
import { useVisualEdit } from "./visual-edit-context"
import { Camera, Sparkles } from "lucide-react"

interface InlineImageProps extends Omit<ImageProps, "src"> {
  page: string
  field: string
  initialSrc: string
}

export function InlineImage({
  page,
  field,
  initialSrc,
  alt,
  className = "",
  ...props
}: InlineImageProps) {
  const { isEditing, pendingChanges, openImageModal } = useVisualEdit()

  const currentSrc = pendingChanges[page]?.[field] || initialSrc

  if (!isEditing) {
    return <Image src={currentSrc} alt={alt} className={className} {...props} />
  }

  return (
    <div
      onClick={() => openImageModal(page, field, currentSrc)}
      className="relative group/editimg cursor-pointer h-full w-full"
      title={`Click to change image (${field})`}
    >
      <Image src={currentSrc} alt={alt} className={className} {...props} />

      {/* Visual Edit Overlay */}
      <div className="absolute inset-0 bg-brand-blue/30 backdrop-blur-[2px] opacity-0 group-hover/editimg:opacity-100 transition-opacity flex flex-col items-center justify-center text-white z-30 rounded-2xl p-4 text-center">
        <div className="h-10 w-10 rounded-full bg-brand-blue shadow-lg flex items-center justify-center mb-2 animate-bounce">
          <Camera className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-sm bg-black/60 px-3 py-1 rounded-full shadow-sm">
          Click to Change Image
        </span>
      </div>
    </div>
  )
}
