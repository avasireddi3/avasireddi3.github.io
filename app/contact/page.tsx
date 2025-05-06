import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  // Contact links
  const contactLinks = [
    {
      title: "Email",
      description: "Send me an email directly",
      icon: Mail,
      href: "mailto:your.email@example.com",
      linkText: "your.email@example.com",
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      linkText: "linkedin.com/in/yourprofile",
    },
    {
      title: "GitHub",
      description: "Check out my code and projects",
      icon: Github,
      href: "https://github.com/yourusername",
      linkText: "github.com/yourusername",
    },
    {
      title: "Resume",
      description: "Download my resume",
      icon: FileText,
      href: "/resume.pdf",
      linkText: "Download Resume (PDF)",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter">Contact Me</h1>
          <p className="text-xl text-muted-foreground">I'm always open to new opportunities and collaborations.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link) => (
            <Card key={link.title} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <link.icon className="h-5 w-5" />
                  {link.title}
                </CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={link.href}
                  target={link.title === "Email" || link.title === "Resume" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {link.linkText}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter">Let's Work Together</h2>
          <p className="text-muted-foreground">
            Whether you're looking for a data engineer, need help with a data analytics project, or want to discuss a
            full stack development opportunity, I'd love to hear from you.
          </p>
          <p className="text-muted-foreground">
            I'm currently open to full-time roles, freelance projects, and collaborations.
          </p>
        </div>
      </div>
    </div>
  )
}
