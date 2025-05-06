import { FileDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function AboutPage() {
  // Skills data
  const skills = {
    technical: [
      "Python",
      "SQL",
      "JavaScript",
      "React",
      "Next.js",
      "Airflow",
      "dbt",
      "BigQuery",
      "Snowflake",
      "Tableau",
      "Power BI",
    ],
    business: [
      "Business Analysis",
      "Requirements Gathering",
      "Process Optimization",
      "Stakeholder Management",
      "Project Management",
      "Agile Methodologies",
    ],
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-16">
        {/* About Me Section */}
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/placeholder.svg?height=256&width=256"
                alt="Profile Photo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Business Analyst transitioning to Data Engineering & Full Stack Development
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a business analyst with over 5 years of experience working with data and business processes, now
                transitioning into technical roles in data engineering and full stack development.
              </p>
              <p>
                My background in business analysis has given me a unique perspective on how technology can solve real
                business problems. I combine technical skills with business acumen to build solutions that are not just
                technically sound but also aligned with business objectives.
              </p>
              <p>
                I'm passionate about data pipelines, analytics dashboards, and building full stack applications that
                make data accessible and actionable for businesses.
              </p>
            </div>
            <Button asChild>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Technologies and tools I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <div key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Skills</CardTitle>
                <CardDescription>Professional capabilities from my BA background</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.business.map((skill) => (
                    <div key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Career Journey Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">Career Journey</h2>

          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-muted pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold">Senior Business Analyst</h3>
              <p className="text-muted-foreground">Company Name • 2020 - Present</p>
              <div className="mt-2 text-muted-foreground">
                <p>
                  Led requirements gathering and process optimization initiatives for data-driven projects. Collaborated
                  with technical teams to implement analytics solutions and dashboards.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-muted pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold">Business Analyst</h3>
              <p className="text-muted-foreground">Company Name • 2018 - 2020</p>
              <div className="mt-2 text-muted-foreground">
                <p>
                  Analyzed business processes and identified opportunities for automation and improvement. Created
                  reports and dashboards to visualize key business metrics.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-muted">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold">Junior Business Analyst</h3>
              <p className="text-muted-foreground">Company Name • 2016 - 2018</p>
              <div className="mt-2 text-muted-foreground">
                <p>
                  Supported data analysis and reporting initiatives. Assisted in requirements gathering and
                  documentation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
