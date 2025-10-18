import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-sans text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6 text-balance">
          당신만의 스타일을
          <br />
          함께 만들어갑니다
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Style Avenue의 전문 스타일리스트와 함께 당신에게 완벽한 스타일을 찾아보세요. 개인 맞춤 상담을 통해 특별한
          경험을 제공합니다.
        </p>
        <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 min-w-[240px]">
          무료 상담 예약하기
        </Button>
      </div>
    </section>
  )
}
