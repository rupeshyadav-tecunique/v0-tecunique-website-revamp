"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash2, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CaseStudyTable({ caseStudies }: { caseStudies: any[] }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study? This cannot be undone.")) return
    
    setIsDeleting(id)
    try {
      const res = await fetch(`/api/admin/case-studies/${id}`, {
        method: "DELETE",
      })
      
      if (!res.ok) throw new Error("Failed to delete")
      
      router.refresh()
    } catch (error) {
      console.error(error)
      alert("Failed to delete case study")
    } finally {
      setIsDeleting(null)
    }
  }

  return (
    <div className="w-full">
      <Table>
        <TableHeader className="bg-slate-50/50">
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Partnership</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {caseStudies.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                No case studies found. Create your first one!
              </TableCell>
            </TableRow>
          ) : (
            caseStudies.map((study) => (
              <TableRow key={study.id}>
                <TableCell className="font-medium">
                  {study.client}
                </TableCell>
                <TableCell>
                  {study.industry}
                </TableCell>
                <TableCell>
                  {study.category}
                </TableCell>
                <TableCell>
                  {study.partnership}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0" disabled={isDeleting === study.id}>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem asChild>
                        <Link href={`/case-studies/${study.id}`} target="_blank">
                          <LinkIcon className="mr-2 h-4 w-4" />
                          View Live
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/case-studies/edit/${study.id}`}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="text-red-600 focus:text-red-600 focus:bg-red-50"
                        onClick={() => handleDelete(study.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
