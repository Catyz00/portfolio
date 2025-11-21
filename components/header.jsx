"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Meu Portfólio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Portfólio
          </Link>
          <Link
            href="/servicos"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/servicos") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Serviços
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-medium transition-colors hover:text-primary py-2",
                isActive("/") ? "text-primary" : "text-muted-foreground",
              )}
            >
              Portfólio
            </Link>
            <Link
              href="/servicos"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-medium transition-colors hover:text-primary py-2",
                isActive("/servicos") ? "text-primary" : "text-muted-foreground",
              )}
            >
              Serviços
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
