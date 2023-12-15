import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";
import React from "react";

const font = Nunito({
    subsets: ['latin'],
})

export const metadata = {
    title: 'HomeScape',
    description: 'Book Your Dream Getaway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={font.className}>
            <Navbar />
            {children}
        </body>
    </html>
  )
}
