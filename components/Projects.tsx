"use client"

import { motion } from 'framer-motion'
import { Card3D } from '@/components/ui/3d-card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'

// Add interface for project type
interface ProjectType {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  details: string[];
}

const projects: ProjectType[] = [
  {
    title: "AutoTradeBot",
    subtitle: "Algo Trading Application",
    image: "/images/projects/autotradebot.png", // Updated path
    description: "Python, Upstox API, WebSocket, AsyncIO",
    details: [
      "Automated options trading on NSE with secure login via Selenium and PyOTP.",
      "Developed trading strategies, including buy percentage, premium range, SL, and TSL.",
      "Integrated Upstox WebSocket API for real-time data decoding using Protocol Buffers.",
      "Automated order placement with error handling, improving efficiency and reliability."
    ]
  },
  {
    title: "StockPro",
    subtitle: "Stock Analysis Application",
    image: "/images/projects/stockpro.png", // Updated path
    description: "Python, Django, React, TailwindCSS, Yahoo Finance",
    details: [
      "Built an analysis tool for Indian Stock Market using Django, React and Yahoo Finance to gather data.",
      "Fetched real-time stock data with Yahoo Finance and YFinance library.",
      "Added watchlist management, fuzzy search, and secure user authentication.",
      "Designed a responsive UI with React and TailwindCSS for better usability."
    ]
  },
  {
    title: "PanPaperTodo",
    subtitle: "Personal Task Management Application",
    image: "/images/projects/panpapertodo.png", // Updated path
    description: "Django, SQLite, JavaScript, HTML/CSS",
    details: [
        "Built a comprehensive task management system with Django's authentication and ORM",
        "Implemented complete CRUD operations for daily tasks and learning tracking",
        "Created an intuitive dashboard with date navigation and task status management", 
        "Designed responsive UI with custom CSS animations and modern design principles",
        "Added features like daily learning logs, task completion tracking, and date filtering",
        "Integrated user authentication with signup, login and session management",
        "Built dynamic client-side interactions using JavaScript for better UX"
    ]
  },
  {
    title: "Market Pulse Analyzer",
    subtitle: "Stock Analysis and Visualization",
    image: "/images/projects/Market Pulse.png", // Updated path
    description: "Flask, Pandas, YFinance, YahooQuery, Matplotlib",
    details: [
      "Developed a web application for analyzing and visualizing stock market data.",
      "Implemented user authentication and stock search functionality.",
      "Fetched stock data from Yahoo Finance API and displayed it using interactive charts.",
      "Designed a responsive UI with custom CSS and integrated dark mode for better user experience."
    ]
  }
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Card3D className="cursor-pointer">
            <motion.div
              className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    console.error(`Error loading image for ${project.title}:`, e);
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              </div>
            </motion.div>
          </Card3D>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="rounded-lg mb-4"
          />
          <h4 className="text-lg font-semibold mb-2">{project.subtitle}</h4>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
          <h5 className="text-md font-semibold mb-2">Key Features:</h5>
          <ul className="list-disc list-inside space-y-2">
            {project.details.map((detail, index) => (
              <li key={index} className="text-sm text-muted-foreground">{detail}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

