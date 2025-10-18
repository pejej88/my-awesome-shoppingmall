import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-foreground mb-8 text-balance leading-tight">
          스타일과 품격이
          <br />
          만나는 곳
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
          Style Avenue는 최고급 패션 큐레이션을 통해
          <br />
          당신만의 독특한 스타일을 완성합니다
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 group min-w-[200px]">
            우리의 이야기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background min-w-[200px] bg-transparent"
          >
            컬렉션 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-sm overflow-hidden">
          <img
            src="/elegant-fashion-store-interior-with-minimalist-des.jpg"
            alt="Style Avenue 매장 인테리어"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
