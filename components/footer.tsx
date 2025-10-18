export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-background" />
              <span className="font-sans text-lg font-semibold tracking-tight">STYLE AVENUE</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">한국을 대표하는 프리미엄 패션 브랜드</p>
          </div>

          <div>
            <h3 className="font-medium mb-4">회사</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  채용 정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  지속 가능성
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  매장 안내
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">고객 지원</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  배송 정보
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  반품 및 교환
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  고객 센터
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>서울시 강남구 청담동 123-45</li>
              <li>Tel: 02-1234-5678</li>
              <li>Email: contact@styleavenue.kr</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>© 2025 Style Avenue. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-background transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
