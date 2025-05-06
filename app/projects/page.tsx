"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Project data
const projects = [
  {
    id: 1,
    title: "Data Pipeline Automation",
    description: "Automated ETL pipeline using Airflow and BigQuery for real-time analytics dashboards.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Data Engineering", "Python", "Airflow", "BigQuery"],
    category: "data",
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 2,
    title: "Sales Analytics Dashboard",
    description: "Interactive dashboard visualizing sales data with drill-down capabilities and forecasting.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Data Analytics", "Tableau", "SQL", "Data Visualization"],
    category: "analytics",
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 3,
    title: "Customer Portal",
    description: "Full stack application for customers to manage their accounts, view orders, and track deliveries.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "React", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "Web application to track inventory levels, orders, and generate reports.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Full Stack", "Next.js", "PostgreSQL", "Prisma"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 5,
    title: "Marketing Campaign Analysis",
    description: "Analysis of marketing campaign performance with ROI calculations and recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Data Analytics", "Python", "Pandas", "Matplotlib"],
    category: "analytics",
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    id: 6,
    title: "Data Warehouse Migration",
    description: "Migration of legacy data warehouse to modern cloud-based solution with improved performance.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Data Engineering", "Snowflake", "dbt", "Python"],
    category: "data",
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
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
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
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
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
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
