export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 lg:py-32 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-sans text-3xl lg:text-4xl font-light tracking-tight text-card-foreground mb-4 text-center">
          혁신과 우아함의 결합
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          최고급 소재와 정교한 디테일로 완성된 우리의 시그니처 컬렉션
        </p>

        <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden mb-12">
          <img src="/luxury-fashion-collection-display-with-elegant-clo.jpg" alt="Style Avenue 컬렉션" className="w-full h-full object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative aspect-square rounded-sm overflow-hidden group cursor-pointer">
            <img
              src="/elegant-business-handshake-in-modern-office.jpg"
              alt="파트너십"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-background text-xl font-medium">파트너십</span>
            </div>
          </div>

          <div className="relative aspect-square rounded-sm overflow-hidden group cursor-pointer">
            <img
              src="/luxury-fabric-texture-close-up-with-fine-details.jpg"
              alt="프리미엄 소재"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-background text-xl font-medium">프리미엄 소재</span>
            </div>
          </div>

          <div className="relative aspect-square rounded-sm overflow-hidden group cursor-pointer">
            <img
              src="/artisan-craftsmanship-hands-working-on-luxury-garm.jpg"
              alt="장인의 손길"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-background text-xl font-medium">장인의 손길</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
