"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/AmitJ2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/amitjaiswal369143', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:amitjaiswal369143@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-background/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="w-6 h-6 text-foreground/60 hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Amit Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

