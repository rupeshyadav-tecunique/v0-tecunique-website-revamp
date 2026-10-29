import { notFound } from "next/navigation"
import PageContentEditor from "@/components/pages/admin/page-content-editor"
import { getPageContent } from "@/lib/services/page-content.service"
import { editablePagesList } from "@/lib/data/pages-content.data"

export const dynamic = "force-dynamic"

export default async function AdminEditPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pageInfo = editablePagesList.find((p) => p.slug === slug)

  if (!pageInfo) {
    notFound()
  }

  const content = await getPageContent(slug)

  return <PageContentEditor slug={slug} initialData={content} pageInfo={pageInfo} />
}
