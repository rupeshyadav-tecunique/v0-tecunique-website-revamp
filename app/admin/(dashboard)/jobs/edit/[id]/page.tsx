import clientPromise from "@/lib/db"
import { ObjectId } from "mongodb"
import { notFound } from "next/navigation"
import EditJobForm from "@/components/admin/edit-job-form"

export default async function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  let job = null
  try {
    const client = await clientPromise
    const db = client.db("tecunique")

    job = await db.collection("jobs").findOne({ _id: new ObjectId(id) })
    if (!job) {
      job = await db.collection("jobs").findOne({ id: id })
    }
  } catch (e) {
    const client = await clientPromise
    const db = client.db("tecunique")
    job = await db.collection("jobs").findOne({ id: id })
  }

  if (!job) {
    notFound()
  }

  // Sanitize for client
  const serializedJob = {
    ...job,
    _id: job._id.toString(),
    createdAt: job.createdAt?.toISOString(),
  }

  return <EditJobForm job={serializedJob} />
}
