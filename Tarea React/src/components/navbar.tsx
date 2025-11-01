import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Home, 
  User, 
  LayoutDashboard, 
  Briefcase, 
  Search, 
  Building, 
  BarChart3, 
  Info, 
  Mail, 
  LogOut,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Mi Perfil", href: "/perfil", icon: User },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Práctica", href: "/practica", icon: Briefcase },
  { name: "Ofertas", href: "/ofertas", icon: Search },
  { name: "Empresas", href: "/empresas", icon: Building },
  { name: "Estadísticas", href: "/estadisticas", icon: BarChart3 },
  { name: "Informaciones", href: "/informaciones", icon: Info },
  { name: "Contacto", href: "/contacto", icon: Mail },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">USM</span>
            </div>
            <span className="font-bold text-lg gradient-text">Portal Prácticas</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.href}
                asChild
                variant={isActive(item.href) ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "h-9 px-3",
                  isActive(item.href) && "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                <Link to={item.href} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            )
          })}
          
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-9 w-9 px-0"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.href}
                  asChild
                  variant={isActive(item.href) ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-start",
                    isActive(item.href) && "bg-primary/10 text-primary"
                  )}
                >
                  <Link to={item.href} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </Button>
              )
            })}
            <div className="pt-4 border-t">
              <Button variant="outline" size="sm" className="w-full text-destructive hover:text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Salir
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}