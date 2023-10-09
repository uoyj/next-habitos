import './globals.css'
import type { Metadata } from 'next'
import { Dosis, Inter, Roboto } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'], variable: "--font-dosis" })
const inter = Inter({ subsets: ['latin'], variable: "--font-inter" })

export const metadata: Metadata = {
  title: 'Next Habitos',
  description: 'Gerencie seus hábitos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={`${dosis.variable} ${inter.variable}  flex items-center flex-col mt-10 bg-gray-800`}>
        <h1 className={`font-display text-4xl text-white`}>Next Hábitos</h1>
        {children}
      </body>
    </html>
  )
}
