"use client"

import { motion } from 'framer-motion'
import { Terminal, GitBranch, Database, Brain } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Terminal,
      title: "Code",
      description: "Proficient in Python, SQL, and modern development tools"
    },
    {
      icon: Database,
      title: "Data",
      description: "Experienced in data analysis, visualization, and processing"
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Passionate about machine learning and artificial intelligence"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Skilled in Git and collaborative development"
    }
  ]

  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-primary font-mono text-sm">$ cat about.md</span>
          </motion.div>
          <h2 className="text-3xl font-bold mb-8 gradient-text">About Me</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-primary">&gt;</span> Aspiring Data Analyst and Developer with a growing interest in AI and ML technologies. 
            Eager to learn and contribute to projects involving automation, machine learning, and process optimization. 
            Looking forward to gaining hands-on experience and building impactful solutions in the tech space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-foreground/70 text-sm text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

