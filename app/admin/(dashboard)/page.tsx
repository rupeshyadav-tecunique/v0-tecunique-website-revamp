import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Briefcase, Users, Eye, TrendingUp, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getDashboardStats } from "@/lib/admin-stats"

export default async function AdminDashboard() {
  let statsData = {
    blogs: 0,
    activeJobs: 0,
    applications: 42,
    siteViews: "1.2k"
  }

  try {
    statsData = await getDashboardStats()
  } catch (error) {
    console.error("Dashboard Stats Fetch Error:", error)
  }

  const stats = [
    {
      title: "Total Blogs",
      value: statsData.blogs.toString(),
      icon: FileText,
      trend: "+2 this month",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Active Job Openings",
      value: statsData.activeJobs.toString(),
      icon: Briefcase,
      trend: "Real-time API",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Total Applications",
      value: statsData.applications.toString(),
      icon: Users,
      trend: "+12% from last week",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Site Views",
      value: statsData.siteViews,
      icon: Eye,
      trend: "+5% today",
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back. Here is what is happening with the TECUNIQUE platform today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border/60 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.title}</CardTitle>
              <div className={`rounded-lg p-2 ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="mt-1 flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                <span className="text-emerald-500 font-medium mr-1">{stat.trend.split(' ')[0]}</span>
                {stat.trend.split(' ').slice(1).join(' ')}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Quick Actions */}
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button className="h-24 flex-col gap-2 rounded-2xl" variant="outline" asChild>
              <Link href="/admin/blog/new">
                <Plus className="h-6 w-6" />
                <span>New Blog Post</span>
              </Link>
            </Button>
            <Button className="h-24 flex-col gap-2 rounded-2xl" variant="outline" asChild>
              <Link href="/admin/jobs/new">
                <Plus className="h-6 w-6" />
                <span>Post New Job</span>
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity Mock */}
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: "Rupesh", action: "published a new blog", target: "Atlassian Migration", time: "2 hours ago" },
                { user: "System", action: "received a new job application", target: "Senior Dev", time: "5 hours ago" },
                { user: "Admin", action: "updated career benefits", target: "Careers Page", time: "Yesterday" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between text-sm border-b border-border/40 pb-3 last:border-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">{activity.user} <span className="font-normal text-muted-foreground">{activity.action}</span></span>
                    <span className="text-xs text-primary mt-0.5">{activity.target}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
