// 'use client';
import NavBar from '@/app/shared-components/NavBar';
import { Montserrat } from 'next/font/google'
import { Account } from '../components/Account'
import { WagmiProvider, useAccount } from 'wagmi'
const montserrat = Montserrat({ subsets: ['latin'] })
import './globals.css';
import UniswapPools from '@/components/UniswapPools';
import CurvePools from '@/components/CurvePools';
import Farms from './(pages)/farms/page';
import Migrate from './(pages)/migrate/page';


export default function Home() {
    return (
        <main className={montserrat.className}>
            <Migrate />
        </main>

    );
}


function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return [<Account />]
}