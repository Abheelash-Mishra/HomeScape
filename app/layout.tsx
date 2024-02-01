import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/navbar/Navbar";
import React from "react";
import Modal from "@/app/components/modals/modal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";

const font = Nunito({
    subsets: ['latin'],
})

export const metadata = {
    title: 'HomeScape',
    description: 'Book Your Dream Getaway',
}

export default async function RootLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    const currentUser = await getCurrentUser()
        return (
            <html lang="en">
                <body className={font.className}>
                    <ToasterProvider />
                    <LoginModal />
                    <RegisterModal />
                    <Navbar currentUser={currentUser} />
                    {children}
                </body>
            </html>
        )
    }
