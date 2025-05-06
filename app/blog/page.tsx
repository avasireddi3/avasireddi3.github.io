import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Building Efficient Data Pipelines with Airflow",
    slug: "building-efficient-data-pipelines-with-airflow",
    description:
      "Learn how to design and implement efficient data pipelines using Apache Airflow for better data engineering workflows.",
    date: "2023-05-15",
    tags: ["Data Engineering", "Airflow", "ETL", "Python"],
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "From Business Analyst to Data Engineer: My Career Transition",
    slug: "from-business-analyst-to-data-engineer",
    description:
      "My personal journey transitioning from a business analyst role to data engineering, including challenges, learnings, and tips for others making a similar transition.",
    date: "2023-04-02",
    tags: ["Career", "Data Engineering", "Business Analysis"],
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Building Interactive Dashboards with React and D3.js",
    slug: "building-interactive-dashboards-with-react-and-d3",
    description:
      "A step-by-step guide to creating interactive data visualizations and dashboards using React and D3.js.",
    date: "2023-03-10",
    tags: ["Data Visualization", "React", "D3.js", "Frontend"],
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Optimizing SQL Queries for Better Performance",
    slug: "optimizing-sql-queries-for-better-performance",
    description:
      "Tips and techniques for writing more efficient SQL queries to improve database performance and reduce query execution time.",
    date: "2023-02-18",
    tags: ["SQL", "Database", "Performance", "Optimization"],
    readTime: "7 min read",
  },
]

// Format date to readable format
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Thoughts, insights, and tutorials on data engineering, analytics, and full stack development.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formatDate(post.date)}
                  </div>
                  <div>{post.readTime}</div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
