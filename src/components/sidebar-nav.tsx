"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "about" },
  { href: "/thoughts", label: "thoughts" },
  { href: "/projects", label: "projects" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-end gap-1 pr-8 pt-12 text-sm">
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
