import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { orbitron } from "./fonts";
import { exo2 } from "./fonts";
import './globals.css'

interface LayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: {
        default: 'Indie Gamer',
        template: '%s | Indie Gamer'
    }
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
            <body className="bg-orange-50 px-4 py-2 flex flex-col min-h-screen">
                <header>
                    <Navbar />
                </header>
                <main className="py-3 grow">{children}</main>
                <footer className="border-t py-3 text-center text-xs">
                    Game data and images coutesy of RAWG | Deployed on Vercel
                </footer>
            </body>
        </html>
    );
}
