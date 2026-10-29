"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "sonner"
import { usePathname, useRouter } from "next/navigation"

interface VisualEditContextType {
  isAdmin: boolean
  isEditing: boolean
  setIsEditing: (active: boolean) => void
  pendingChanges: Record<string, Record<string, any>>
  updateField: (page: string, field: string, value: any) => void
  saveChanges: (pageOverride?: string) => Promise<boolean>
  discardChanges: () => void
  hasUnsavedChanges: boolean
  activeImageModal: { page: string; field: string; currentSrc: string } | null
  openImageModal: (page: string, field: string, currentSrc: string) => void
  closeImageModal: () => void
}

const VisualEditContext = createContext<VisualEditContextType | null>(null)

export function VisualEditProvider({
  isAdmin,
  children,
}: {
  isAdmin: boolean
  children: React.ReactNode
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [pendingChanges, setPendingChanges] = useState<Record<string, Record<string, any>>>({})
  const [activeImageModal, setActiveImageModal] = useState<{
    page: string
    field: string
    currentSrc: string
  } | null>(null)

  const router = useRouter()
  const pathname = usePathname()

  // Detect which page slug corresponds to the current pathname
  const getCurrentPageSlug = (): string => {
    if (pathname === "/") return "home"
    if (pathname === "/about") return "about"
    if (pathname === "/services") return "services"
    if (pathname.startsWith("/services/")) {
      return `services-${pathname.replace("/services/", "")}`
    }
    return ""
  }

  const updateField = (page: string, field: string, value: any) => {
    setPendingChanges((prev) => ({
      ...prev,
      [page]: {
        ...(prev[page] || {}),
        [field]: value,
      },
    }))
  }

  const hasUnsavedChanges = Object.keys(pendingChanges).some(
    (page) => Object.keys(pendingChanges[page] || {}).length > 0
  )

  const saveChanges = async (pageOverride?: string): Promise<boolean> => {
    const targetPage = pageOverride || getCurrentPageSlug()
    const changesForPage = pendingChanges[targetPage]

    if (!changesForPage || Object.keys(changesForPage).length === 0) {
      toast.info("No unsaved changes on this page.")
      return true
    }

    try {
      // 1. Fetch current stored content first so we merge changes cleanly
      const currentRes = await fetch(`/api/admin/pages/${targetPage}`)
      const currentData = await currentRes.json()
      const mergedPayload = {
        ...(currentData.content || {}),
        ...changesForPage,
      }

      // 2. Save back to API
      const res = await fetch(`/api/admin/pages/${targetPage}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mergedPayload),
      })

      if (!res.ok) {
        throw new Error("Failed to save changes")
      }

      // Clear pending changes for this page
      setPendingChanges((prev) => {
        const next = { ...prev }
        delete next[targetPage]
        return next
      })

      toast.success("Page updated and published live!")
      router.refresh()
      return true
    } catch (err: any) {
      console.error("Save error:", err)
      toast.error(err.message || "Failed to save changes. Please try again.")
      return false
    }
  }

  const discardChanges = () => {
    setPendingChanges({})
    toast.info("Discarded all unsaved edits.")
    router.refresh()
  }

  const openImageModal = (page: string, field: string, currentSrc: string) => {
    setActiveImageModal({ page, field, currentSrc })
  }

  const closeImageModal = () => {
    setActiveImageModal(null)
  }

  return (
    <VisualEditContext.Provider
      value={{
        isAdmin,
        isEditing,
        setIsEditing,
        pendingChanges,
        updateField,
        saveChanges,
        discardChanges,
        hasUnsavedChanges,
        activeImageModal,
        openImageModal,
        closeImageModal,
      }}
    >
      {children}
    </VisualEditContext.Provider>
  )
}

export function useVisualEdit() {
  const context = useContext(VisualEditContext)
  if (!context) {
    return {
      isAdmin: false,
      isEditing: false,
      setIsEditing: () => {},
      pendingChanges: {},
      updateField: () => {},
      saveChanges: async () => false,
      discardChanges: () => {},
      hasUnsavedChanges: false,
      activeImageModal: null,
      openImageModal: () => {},
      closeImageModal: () => {},
    }
  }
  return context
}
