"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Share2, Link2, Mail, MessageCircle, Send, Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface ShareJobProps {
  title: string
  url?: string
  label?: string
  className?: string
}

export function ShareJob({ title, url, label, className }: ShareJobProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState("")

  useEffect(() => {
    setShareUrl(url || window.location.href)
  }, [url])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Job Opening: ${title} at TECUNIQUE`,
          text: `Check out this exciting career opportunity for ${title} at TECUNIQUE!`,
          url: shareUrl,
        })
      } catch (err) {
        console.error("Error sharing:", err)
      }
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    toast.success("Link copied to clipboard!")
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366] text-white",
      href: `https://wa.me/?text=${encodeURIComponent(`Check out this job opening: ${title} at TECUNIQUE - ${shareUrl}`)}`,
    },
    {
      name: "Telegram",
      icon: Send,
      color: "bg-[#0088cc] text-white",
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`Job Opening: ${title} at TECUNIQUE`)}`,
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-slate-800 text-white",
      href: `mailto:?subject=${encodeURIComponent(`Job Opening: ${title} at TECUNIQUE`)}&body=${encodeURIComponent(`Check out this exciting career opportunity for ${title} at TECUNIQUE!\n\nView Job: ${shareUrl}`)}`,
    },
  ]

  return (
    <div className="cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className={cn("rounded-xl px-6 font-semibold cursor-pointer", className)}
            onClick={(e) => {
              // On mobile, try native share first
              if (typeof navigator !== 'undefined' && navigator.share && /Android|iPhone/i.test(navigator.userAgent)) {
                e.preventDefault()
                handleShare()
              }
            }}
          >
            <Share2 className="mr-2 h-4 w-4" />
            {label || "Share Job"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
          <div className="bg-white px-8 pt-8 pb-10">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">Share this position</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-3 gap-8">
              {shareOptions.map((option) => (
                <a
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group transition-all"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${option.color}`}>
                    <option.icon className="h-7 w-7" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">{option.name}</span>
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-[0.2em]">Copy Link</p>
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/30 p-1.5 pl-4 overflow-hidden">
                <div className="flex-1 min-w-0 overflow-hidden">
                  <span
                    title={shareUrl}
                    className="block w-full text-[13px] text-muted-foreground font-medium"
                  >
                    {shareUrl.length > 55 ? `${shareUrl.substring(0, 55)}...` : shareUrl}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyToClipboard}
                  className="h-9 w-9 rounded-lg bg-white shadow-sm border border-border/40 hover:bg-white hover:text-primary transition-all active:scale-95"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
