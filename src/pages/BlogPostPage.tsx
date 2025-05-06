"use client"

import { useParams, Navigate } from "react-router-dom"
import { CalendarIcon, Clock } from "lucide-react"
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

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug)

  // If no post is found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" />
  }

  return (
    <div className="container py-12">
      <article className="prose prose-slate dark:prose-invert max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{post.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="markdown" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
