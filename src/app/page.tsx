'use client';
import NavBar from '@/components/NavBar';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

import './globals.css';
export default function Home() {
    return (
        <main className={montserrat.className}>
            <NavBar />
        </main>

    );
}
