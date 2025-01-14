"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    link: "https://yourportfolio.com"
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

