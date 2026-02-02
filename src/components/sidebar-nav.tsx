"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Sobre mí" },
  { href: "/experience", label: "Experiencia" },
  { href: "/projects", label: "Proyectos" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-row gap-4 px-6 py-6 text-sm md:flex-col md:items-end md:gap-1 md:px-0 md:pr-8 md:pt-12">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-colors hover:text-foreground ${
              isActive ? "font-medium text-foreground" : "text-muted-foreground"
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
