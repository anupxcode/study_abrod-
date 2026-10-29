import { Analytics } from '@vercel/analytics/next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['500', '600', '700'] })

export const metadata = {
  title: 'GlobalPath Study | Your global education journey, guided',
  description: 'Personalized study abroad guidance for ambitious students. Find the right course, university, and destination with GlobalPath Study.',
  keywords: ['study abroad', 'international education', 'university counseling', 'scholarships'],
}

export const viewport = { colorScheme: 'light', themeColor: '#F4F8FE', userScalable: true }

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${inter.variable} ${poppins.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
