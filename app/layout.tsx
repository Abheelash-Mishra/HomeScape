import './globals.css'

import { Nunito } from 'next/font/google'

import React from "react";

import Modal from "@/app/components/modals/modal";
import Navbar from "@/app/components/navbar/Navbar";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import RentModal from "@/app/components/modals/RentModal";

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
                    <RentModal />
                    <Navbar currentUser={currentUser} />
                    {children}
                </body>
            </html>
        )
    }
