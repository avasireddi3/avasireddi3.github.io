export interface Project {
    id: number
    title: string
    description: string
    images: string[] // Array of image URLs
    tags: string[]
    category: string
    github: string
    demo: string
  }
  
  // Project data
  export const projects: Project[] = [
    {
      id: 1,
      title: "Fantasy Premier League Wrapped",
      description: "FPL analytics dashboard that processes league data to generate season summaries, highlighting top performers through award-style metrics",
      images: ["/placeholder.svg?height=400&width=600","/test_img.png"],
      tags: ["Data Analytics", "Python", "SQL", "Seaborn", "Matplotlib"],
      category: "analytics",
      github: "https://github.com/avasireddi3/FPLWrapped",
      demo: "https://demo-link.com",
    },
    {
      id: 2,
      title: "Kernels - a Movie Recommender",
      description: "Full stack application to track movies watched and recieve ML-based movie recommendations.",
      images: ["/placeholder.svg?height=400&width=600"],
      tags: ["Full Stack", "React", "Postgres", "SQL", "FastAPI"],
      category: "fullstack",
      github: "https://github.com/avasireddi3/MovieWebsite",
      demo: "https://demo-link.com",
    },
    {
      id: 3,
      title: "Used Cars Pipeline",
      description: "Data pipeline to collect, transform, and load used car data from multiple sources.",
      images: ["/placeholder.svg?height=400&width=600"],
      tags: ["Data Engineering", "Airflow", "Python", "SQL", "Polars", "Docker"],
      category: "data",
      github: "https://github.com/avasireddi3/used_cars_pipeline",
      demo: "https://demo-link.com",
    },
    {
      id: 4,
      title: "Automated Ecommerce Reports ",
      description: "Analytics tool to generate reports on sales, inventory of quick commerce platforms in India",
      images: ["/placeholder.svg?height=400&width=600"],
      tags: ["Data Analytics", "Python", "Pandas", "Docker"],
      category: "analytics",
      github: "https://github.com",
      demo: "https://demo-link.com",
    }
  ]
  
  