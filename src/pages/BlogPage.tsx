import { Link } from "react-router-dom"
import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { blogPosts } from "../data/blog-posts"

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
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
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
