import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundLines } from "@/components/ui/background-lines"

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Amit Jaiswal - Portfolio',
  description: 'Full Stack Developer Portfolio showcasing projects and skills',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Amit Jaiswal' }],
  openGraph: {
    title: 'Amit Jaiswal - Portfolio',
    description: 'Full Stack Developer Portfolio showcasing projects and skills',
    url: 'https://your-domain.com',
    siteName: 'Amit Jaiswal Portfolio',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Jaiswal - Portfolio',
    description: 'Full Stack Developer Portfolio showcasing projects and skills',
    images: ['https://your-domain.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background text-foreground">
            <BackgroundLines className="fixed inset-0" />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

