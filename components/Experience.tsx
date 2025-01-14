"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experience = {
    title: "Data Analyst",
    company: "FalconX",
    location: "Mumbai, India",
    duration: "0.9 Year",
    responsibilities: [
      "Collected, cleaned, and analyzed large datasets to generate actionable business insights.",
      "Created detailed dashboards and reports using Excel and Power BI to support decision-making.",
      "Collaborated with teams to identify trends and patterns in client data, enabling informed strategies.",
      "Assisted in automating recurring data processes, improving data quality and reducing processing time."
    ]
  }

  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Experience</h2>
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{experience.title}</CardTitle>
              <CardDescription className="text-lg">{experience.company} | {experience.location} | {experience.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-foreground/80 text-base">{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}

