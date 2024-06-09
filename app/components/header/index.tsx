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
                    {/* <Image
                    width={58}
                    height={49}
                    src="/public/images/logo.png"
                    alt="Logo Thalles Andrade"/> */}
                   <span className="logo">
                        Thalles Andrade 
                        <span style={{fontSize: 'x-small'}} className="text-emerald-400">
                            <strong>Fullstack Developer</strong>
                        </span>
                    </span>
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