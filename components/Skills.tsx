"use client"

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = {
    "Languages": ["Python", "R", "SQL"],
    "AI Tools": ["NLP", "Sentiment Analysis", "Speech-to-Text APIs"],
    "Libraries and Frameworks": ["Pandas", "Numpy", "Flask", "Django"],
    "Tools": ["Git", "MySQL", "Excel", "Power BI", "Tableau"],
    "Cloud Services": ["Azure", "AWS (S3, EC2)"]
  }

  return (
    <motion.section
      id="skills"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Technical Skills</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-foreground/80 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

