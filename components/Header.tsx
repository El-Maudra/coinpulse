'use client';

import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {

  const pathname = usePathname()
    
  return (
    <header>
        <div className="main-container inner"></div>
        <Link href="/">
            <Image src="/logo.svg" alt="Coinpulse Logo" width={132} height={40}></Image>
        </Link>

        <nav>
            <Link href="/" className={cn('nav-link', {
                'is-active': pathname === '/',
                'is-home': true
            })}>Home</Link>
            
            <p>SearchModal</p>

            <Link href="/coins" className={cn('nav-link', {
                'is-active': pathname === '/coins',
            })}>All Coins</Link>

        </nav>
    </header>
  )
}

export default Header