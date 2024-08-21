'use client'
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const nav_itemns = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () =>{
    return(
        <header  className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                   <Image
                    width={100}
                    height={80}
                    src="/images/logo.png"
                    alt="Logo Thalles Andrade"/>
                </Link>
                <nav className="flex items-center gap-4 sm:gap-10">
          {nav_itemns.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
            </div>
        </header>
    )
}