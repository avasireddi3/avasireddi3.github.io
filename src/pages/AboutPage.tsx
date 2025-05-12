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
      "FastAPI",
      "Airflow",
      "dbt",
      "BigQuery",
      "Redshift",
      "GCP",
      "AWS",
      "Tableau",
      "Power BI",
    ],
    business: [
      "Business Analysis",
      "Requirements Gathering",
      "Process Optimization",
      "Stakeholder Management",
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
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">About Me</h1>
            {/* <p className="text-xl text-muted-foreground">
              Business Analyst transitioning to Data Engineering & Full Stack Development
            </p> */}
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a full stack analytics engineer with a background in business analysis and a passion for
                building data-driven solutions.
              </p>
              <p>
                Having worked in an environment where I was answerable to multiple stakeholders, I take pride in strong communication skills
                and the ability to collaborate effectively with cross-functional teams.
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
              <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center pt-6"> 
                  {/* Java: Image */}
                  <div className="relative">
                    <img src="/icons/light/java-original-wordmark.svg" alt="Java" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/java-original-wordmark.svg" alt="Java Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Python: Image */}
                  <div className="relative">
                    <img src="/icons/light/python-original-wordmark.svg" alt="Python" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/python-original-wordmark.svg" alt="Python Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Pandas: Font Icon */}
                  <div className="relative">
                    <img src="/icons/light/pandas-original-wordmark.svg" alt="Pandas" className="h-12 w-12 block dark:hidden" />
                    <i className="devicon-pandas-plain-wordmark text-5xl hidden dark:block text-white-500"></i>
                  </div>

                  {/* Pytest: Image */}
                  <div className="relative">
                    <img src="/icons/light/pytest-original-wordmark.svg" alt="Pytest" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/pytest-original-wordmark.svg" alt="Pytest Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Jupyter: Image */}
                  <div className="relative">
                    <img src="/icons/light/jupyter-original-wordmark.svg" alt="Jupyter" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/jupyter-original-wordmark.svg" alt="Jupyter Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Airflow: Image */}
                  <div className="relative">
                    <img src="/icons/light/apacheairflow-original.svg" alt="Airflow" className="h-9 w-9 block dark:hidden" />
                    <img src="/icons/dark/apacheairflow-original.svg" alt="Airflow Dark" className="h-9 w-9 hidden dark:block" />
                  </div>

                  {/* PySpark: Font Icon */}
                  <div className="relative">
                  <img src="/icons/light/apachespark-original-wordmark.svg" alt="Spark" className="h-12 w-12 block dark:hidden" />
                    <i className="devicon-apachespark-plain-wordmark text-5xl hidden dark:block text-red-600"></i>
                  </div>

                  {/* PostgreSQL: Image */}
                  <div className="relative">
                    <img src="/icons/light/postgresql-plain-wordmark.svg" alt="PostgreSQL" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/postgresql-plain-wordmark.svg" alt="PostgreSQL Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Bash Shell: Font Icon */}
                  <div className="relative">
                    <i className="devicon-bash-plain text-4xl block dark:hidden"></i>
                    <i className="devicon-bash-plain text-4xl hidden dark:block text-white-500"></i>
                  </div>

                  {/* AWS: Image */}
                  <div className="relative">
                    <img src="/icons/light/amazonwebservices-plain-wordmark.svg" alt="AWS" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/amazonwebservices-plain-wordmark.svg" alt="AWS Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Google Cloud: Image */}
                  <div className="relative">
                    <img src="/icons/light/googlecloud-original.svg" alt="Google Cloud" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/googlecloud-original.svg" alt="Google Cloud Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Git: Image */}
                  <div className="relative">
                    <img src="/icons/light/git-plain-wordmark.svg" alt="Git" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/git-plain-wordmark.svg" alt="Git Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Linux: Image */}
                  <div className="relative">
                    <img src="/icons/light/linux-original.svg" alt="Linux" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/linux-original.svg" alt="Linux Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  

                  {/* React: Image */}
                  <div className="relative">
                    <img src="/icons/light/react-original-wordmark.svg" alt="React" className="h-12 w-12 block dark:hidden" />
                    <img src="/icons/dark/react-original-wordmark.svg" alt="React Dark" className="h-12 w-12 hidden dark:block" />
                  </div>

                  {/* Javascript: Image */}
                  <div className="relative">
                    <img src="/icons/light/javascript-original.svg" alt="Javascript" className="h-11 w-11 block dark:hidden" />
                    <img src="/icons/dark/javascript-original.svg" alt="Javascript Dark" className="h-11 w-11 hidden dark:block" />
                  </div>

                  {/* HTML5: Image */}
                  <div className="relative">
                    <img src="/icons/light/html5-original-wordmark.svg" alt="Javascript" className="h-11 w-11 block dark:hidden" />
                    <img src="/icons/dark/html5-plain-wordmark.svg" alt="Javascript Dark" className="h-11 w-11 hidden dark:block" />
                  </div>

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
              <h3 className="text-xl font-semibold">Analyst</h3>
              <p className="text-muted-foreground">Inmobi • 2020 - Present</p>
              <div className="mt-2 text-muted-foreground">
                <ul className="list-disc list-inside space-y-3">
                  <li>
                    Devised strategic plans and data driven analyses for set of 100 Microsoft Advertising accounts resulting in an annual increase in revenue by 10%
                  </li>
                  <li>
                    Introduced automation in internal reporting with VBA scripts reducing task completion time by upto 50% and saving 30 minutes on a daily basis
                  </li>
                  <li>
                    Created proof-of-concept Power BI dashboards to track advertising KPIs for actionable items reducing issue response time significantly
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-muted pb-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold">Intern</h3>
              <p className="text-muted-foreground">Inmobi • 2018 - 2020</p>
              <div className="mt-2 text-muted-foreground">
              <ul className="list-disc list-inside space-y-3">
                  <li>
                  Streamlined recommendation processes for the North America Account Strategy team by compiling and
                  visualizing key metrics, leading to an improvement in client response rate by 20%
                  </li>
                  <li>
                  Created Quarterly Business Reports on a monthly basis for 30 accounts, analyzing performance and
                  scope to improve for clients’ campaigns
                  </li>
                  <li>
                  Compiled data to resolve technical issues clients were facing in their marketing campaigns on a regular
                  basis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
