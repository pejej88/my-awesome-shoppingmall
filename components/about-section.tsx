export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img src="/fashion-designer-working-with-fabrics-in-elegant-s.jpg" alt="패션 디자이너" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="font-sans text-4xl lg:text-5xl font-light tracking-tight text-card-foreground mb-6 text-balance">
              혁신과 전통의
              <br />
              완벽한 조화
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Style Avenue는 2010년 설립 이래, 한국 패션 업계를 선도하는 프리미엄 브랜드로 자리매김했습니다.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              우리는 전통적인 장인 정신과 현대적인 디자인 감각을 결합하여, 시대를 초월한 아름다움을 창조합니다. 각
              컬렉션은 세심한 디테일과 최상급 소재로 완성되며, 고객 한 분 한 분의 개성을 존중합니다.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              지속 가능한 패션을 추구하며, 윤리적인 생산 과정을 통해 환경과 사회에 긍정적인 영향을 미치고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
