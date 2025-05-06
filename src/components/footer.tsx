import { Github, Linkedin, Mail, FileText } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Portfolio</h3>
            <p className="text-sm text-muted-foreground mt-1">Showcasing my technical journey and projects</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:avasireddi3@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/avasireddi3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-vasireddi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="/Resume_Aditya_Vasireddi.pdf"
              target="_blank"
              aria-label="Resume"
              className="text-muted-foreground hover:text-primary transition-colors"
              rel="noreferrer"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
