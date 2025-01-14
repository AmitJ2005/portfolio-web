import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        <div className="space-y-20">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  )
}

