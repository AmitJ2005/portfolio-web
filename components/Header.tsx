"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 shadow-sm h-16">
      <nav className="container mx-auto px-6 h-16 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold relative group px-8"
        >
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text tracking-wider">
            AJ
          </span>
          <span className="absolute -bottom-0.5 left-8 right-8 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all group-hover:w-[calc(100%-4rem)]"></span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.href)}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.name}
            </button>
          ))}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <RiMoonFill className="h-5 w-5" /> : <RiSunLine className="h-5 w-5" />}
            </Button>
          )}
        </div>
        <div className="md:hidden flex items-center">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <RiMoonFill className="h-5 w-5" /> : <RiSunLine className="h-5 w-5" />}
            </Button>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-sm"
        >
          {menuItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left py-2 px-4 text-sm hover:bg-accent" 
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  )
}

