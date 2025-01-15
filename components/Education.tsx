"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      institution: "D.T.S.S College Malad, University of Mumbai",
      location: "Mumbai, India",
      period: "2022 – Present"
    },
    {
      degree: "12th - Science",
      institution: "P.D. Turakhia College, Maharashtra board",
      location: "Mumbai, India",
      period: "2020 – 2022"
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "January 2023",
      imageUrl: "/images/skills/google analysis.png" // Replace with actual image URL
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "March 2023",
      imageUrl: "/images/skills/google analysis.png" // Replace with actual image URL
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "May 2023",
      imageUrl: "/images/skills/google analysis.png" // Replace with actual image URL
    },
    {
      name: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "July 2023",
      imageUrl: "/images/skills/google analysis.png" // Replace with actual image URL
    },
    {
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "September 2023",
      imageUrl: "/images/skills/google analysis.png" // Replace with actual image URL
    }
  ]

  return (
    <motion.section
      id="education"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Education & Certifications</h2>
        <div className="space-y-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-base font-medium">{edu.institution}</p>
                    <p className="text-foreground/60 text-sm">{edu.location}</p>
                    <p className="text-foreground/60 text-sm mt-2">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <CertificateCard key={index} cert={cert} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

interface CertificateCardProps {
  cert: Certificate;
}

function CertificateCard({ cert }: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:bg-primary/5 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-lg flex justify-between items-center">
              {cert.name}
              <Badge variant="secondary">{cert.issuer}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/60 text-sm">Issued: {cert.date}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{cert.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={cert.imageUrl}
            alt={`${cert.name} Certificate`}
            width={500}
            height={350}
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-foreground/60">
            Issued by {cert.issuer} on {cert.date}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}