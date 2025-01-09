'use client'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/apolloClient'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ApolloProvider client={client}>
          <header className="bg-blue-600 text-white py-4 px-6 shadow">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/">
              <h1 className="text-2xl font-bold text-white cursor-pointer">
                Product Search App
              </h1>
            </a>
          </header>
          <main className="flex-grow p-6">{children}</main>
          <footer className="bg-gray-800 text-gray-400 text-center py-4">
            © 2025 Product Search App. Prueba Tecnica.
          </footer>
        </ApolloProvider>
      </body>
    </html>
  )
}
