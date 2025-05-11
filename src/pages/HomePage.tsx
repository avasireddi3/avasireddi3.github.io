import { Link } from "react-router-dom"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import ProjectCarousel from "components/ProjectCarousel"
import { projects } from "../data/projects"

export default function HomePage() {
  // Featured project data
  const featuredProject = projects[0]

  return (
    <div className="flex flex-col gap-16 py-8 md:py-16">
      {/* Hero Section */}
      <section className="container flex flex-col items-center text-center gap-6 pt-8 md:pt-12">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary">Aditya Vasireddi</span>
          </h1>
          <p className="text-xl font-bold p-4 text-muted-foreground">
            Full Stack Analytics Engineer
          </p>
          <div className="flex flex-wrap gap-4 p-4 justify-center">
          <Button asChild size="lg">
            <Link to="/projects">View My Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">About Me</Link>
          </Button>
          </div>
        
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            I build data pipelines, analytics dashboards, and full stack applications that solve real business problems.
          </p>
        </div>
        
      </section>

      {/* Featured Project Section */}
      <section className="container">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Featured Project</h2>
          <p className="text-muted-foreground">Check out my latest technical work</p>
        </div>

        <Card className="overflow-hidden">
          <ProjectCarousel images={featuredProject.images} title={featuredProject.title} />
          <CardHeader>
            <CardTitle>{featuredProject.title}</CardTitle>
            <CardDescription>{featuredProject.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <Button variant="link" asChild>
            <Link to="/projects" className="group">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Skills & Expertise</h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Python, SQL, Pandas</li>
                <li>Airflow, dbt</li>
                <li>BigQuery, Redshift</li>
                <li>ETL/ELT Pipelines</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tableau, Power BI</li>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
                <li>Business Intelligence</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Full Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>HTML, CSS</li>
                <li>React, Javascript</li>
                <li>RESTful APIs</li>
                <li>Responsive Design</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
