import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";
import React from "react";
import Modal from "@/app/components/modals/modal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";

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
                    <ToasterProvider />
                    <RegisterModal />
                    <Navbar />
                    {children}
                </body>
            </html>
        )
    }
