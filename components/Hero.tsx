"use client"

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Code2, Database, Brain, BarChartIcon as ChartBar, Cloud, Server, Cpu, LineChart } from 'lucide-react'

const randomBlink = () => ({
  opacity: [0.2, 0.5, 0.2],
  scale: [1, 1.2, 1],
  transition: {
    duration: Math.random() * 3 + 2, // Random duration between 2-5 seconds
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
})

export default function Hero() {
  const icons = [
    { Icon: Code2, left: '5%', top: '10%' },
    { Icon: Database, left: '85%', top: '15%' },
    { Icon: Brain, left: '10%', top: '75%' },
    { Icon: ChartBar, left: '80%', top: '70%' },
    { Icon: Cloud, left: '20%', top: '20%' },
    { Icon: Server, left: '75%', top: '40%' },
    { Icon: Cpu, left: '15%', top: '60%' },
    { Icon: LineChart, left: '70%', top: '85%' },
  ]

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Floating icons animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {icons.map(({ Icon, left, top }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={randomBlink}
              className="absolute text-primary/20"
              style={{ left, top }}
            >
              <Icon size={index % 2 === 0 ? 40 : 30} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="mb-4 inline-block">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <code className="text-sm text-primary">Hello, World! 👋</code>
          </motion.div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
          <span className="gradient-text">Amit Jaiswal</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-foreground/80 mb-6 font-mono">
          <span className="text-primary">&gt; </span>
          <TypeAnimation
            sequence={[
              'Data Analyst',
              2000,
              'Developer',
              2000,
              'AI & ML Enthusiast',
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
      </motion.div>
    </section>
  )
}

