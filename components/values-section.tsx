export function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "장인 정신",
      description: "수십 년의 경험을 가진 장인들이 하나하나 정성스럽게 제작하는 프리미엄 의류",
    },
    {
      number: "02",
      title: "지속 가능성",
      description: "환경을 생각하는 친환경 소재와 윤리적 생산 과정을 통한 책임 있는 패션",
    },
    {
      number: "03",
      title: "혁신적 디자인",
      description: "트렌드를 선도하는 독창적인 디자인과 시대를 초월하는 클래식의 조화",
    },
  ]

  return (
    <section id="values" className="py-24 lg:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-sans text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-16 text-center">
          우리의 핵심 가치
        </h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value) => (
            <div key={value.number} className="text-center md:text-left">
              <div className="text-6xl lg:text-7xl font-light text-foreground/20 mb-4">{value.number}</div>
              <h3 className="font-sans text-2xl font-medium text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
