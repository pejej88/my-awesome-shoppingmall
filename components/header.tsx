import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground" />
            <span className="font-sans text-lg lg:text-xl font-semibold tracking-tight text-foreground">
              STYLE AVENUE
            </span>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden text-foreground">
            <Menu className="h-6 w-6" />
            <span className="sr-only">메뉴 열기</span>
          </Button>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              회사 소개
            </a>
            <a href="#values" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              우리의 가치
            </a>
            <a href="#showcase" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              컬렉션
            </a>
            <a href="/jobs" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              채용정보
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              문의하기
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-foreground">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
              <span className="sr-only">장바구니</span>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">상담 예약</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
