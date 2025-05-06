"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"

// Project data
const projects = [
  {
    id: 1,
    title: "Fantasy Premier League Wrapped",
    description: "FPL analytics dashboard that processes league data to generate season summaries, highlighting top performers through award-style metrics",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Data Analytics", "Python", "SQL", "Seaborn", "Matplotlib"],
    category: "analytics",
    github: "https://github.com/avasireddi3/FPLWrapped",
    demo: "https://demo-link.com",
  },
  {
    id: 2,
    title: "Kernels - a Movie Recommender",
    description: "Full stack application to track movies watched and recieve ML-based movie recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "React", "Postgres", "SQL", "FastAPI"],
    category: "fullstack",
    github: "https://github.com/avasireddi3/MovieWebsite",
    demo: "https://demo-link.com",
  },
  {
    id: 3,
    title: "Used Cars Pipeline",
    description: "Data pipeline to collect, transform, and load used car data from multiple sources.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Data Engineering", "Airflow", "Python", "SQL", "Polars", "Docker"],
    category: "data",
    github: "https://github.com/avasireddi3/used_cars_pipeline",
    demo: "https://demo-link.com",
  },
  {
    id: 4,
    title: "Automated Ecommerce Reports ",
    description: "Analytics tool to generate reports on sales, inventory of quick commerce platforms in India",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Data Analytics", "Python", "Pandas", "Docker"],
    category: "analytics",
    github: "https://github.com",
    demo: "https://demo-link.com",
  }
]

// Categories for filtering
const categories = [
  { value: "all", label: "All Projects" },
  { value: "data", label: "Data Engineering" },
  { value: "analytics", label: "Data Analytics" },
  { value: "fullstack", label: "Full Stack" },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter projects based on search query and selected category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A collection of my technical projects showcasing data engineering, analytics, and full stack development
            skills.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/3">
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                <div className="aspect-video relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium">No projects found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
