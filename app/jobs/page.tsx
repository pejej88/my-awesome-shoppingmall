import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/job-card"

export default function JobsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              채용정보
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              STYLE AVENUE와 함께 성장할 인재를 찾습니다. 
              패션과 기술의 만남에서 새로운 가치를 창조하는 동료를 기다립니다.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            <JobCard
              title="마케팅 디렉터 (MD)"
              department="마케팅팀"
              location="서울 본사"
              type="정규직"
              experience="5년 이상"
              description="STYLE AVENUE의 브랜드 전략과 마케팅 전략을 수립하고 실행할 마케팅 디렉터를 모집합니다."
              requirements={[
                "패션/뷰티/라이프스타일 브랜드 마케팅 경험 5년 이상",
                "디지털 마케팅 및 온라인 커머스 경험 필수",
                "브랜드 전략 수립 및 실행 경험",
                "소셜미디어 마케팅 및 인플루언서 마케팅 경험",
                "데이터 분석을 통한 마케팅 성과 측정 경험",
                "크리에이티브 디렉션 및 콘텐츠 기획 능력",
                "팀 리더십 및 프로젝트 관리 능력",
                "영어 커뮤니케이션 가능자 우대"
              ]}
              responsibilities={[
                "브랜드 전략 수립 및 실행",
                "디지털 마케팅 캠페인 기획 및 운영",
                "소셜미디어 전략 수립 및 콘텐츠 기획",
                "인플루언서 마케팅 및 PR 활동",
                "마케팅 예산 관리 및 성과 분석",
                "크로스팀 협업 및 프로젝트 관리"
              ]}
              benefits={[
                "경쟁력 있는 연봉 및 성과급",
                "자유로운 근무 환경 (재택근무 가능)",
                "교육비 지원 및 컨퍼런스 참석 지원",
                "건강검진 및 휴양시설 이용",
                "패션 업계 네트워킹 기회"
              ]}
            />

            <JobCard
              title="패션 머천다이저"
              department="상품기획팀"
              location="서울 본사"
              type="정규직"
              experience="3년 이상"
              description="트렌드 분석과 상품 기획을 통해 고객에게 최적의 패션 아이템을 제공할 머천다이저를 모집합니다."
              requirements={[
                "패션 머천다이징 경험 3년 이상",
                "트렌드 분석 및 시장 조사 경험",
                "상품 기획 및 바이어링 경험",
                "데이터 분석 및 상품 성과 측정 경험",
                "패션 트렌드에 대한 깊은 이해",
                "소셜미디어 및 디지털 트렌드 파악 능력",
                "영어 커뮤니케이션 가능자 우대"
              ]}
              responsibilities={[
                "시즌별 상품 기획 및 바이어링",
                "트렌드 분석 및 시장 조사",
                "상품 성과 분석 및 개선안 도출",
                "브랜드 파트너십 관리",
                "상품 카탈로그 및 콘텐츠 기획"
              ]}
              benefits={[
                "경쟁력 있는 연봉 및 성과급",
                "해외 출장 및 트레이드쇼 참석 기회",
                "패션 업계 전문성 개발 지원",
                "자유로운 근무 환경",
                "건강검진 및 휴양시설 이용"
              ]}
            />

            <JobCard
              title="프론트엔드 개발자"
              department="개발팀"
              location="서울 본사"
              type="정규직"
              experience="2년 이상"
              description="사용자 경험을 중시하는 쇼핑몰 플랫폼을 개발할 프론트엔드 개발자를 모집합니다."
              requirements={[
                "React, Next.js 개발 경험 2년 이상",
                "TypeScript 사용 경험",
                "반응형 웹 개발 경험",
                "상태 관리 라이브러리 사용 경험 (Redux, Zustand 등)",
                "API 연동 및 데이터 페칭 경험",
                "Git을 활용한 협업 경험",
                "성능 최적화 경험 우대",
                "E-commerce 개발 경험 우대"
              ]}
              responsibilities={[
                "쇼핑몰 프론트엔드 개발",
                "사용자 인터페이스 구현",
                "API 연동 및 데이터 처리",
                "성능 최적화 및 사용자 경험 개선",
                "크로스 브라우저 호환성 확보",
                "코드 리뷰 및 기술 문서 작성"
              ]}
              benefits={[
                "경쟁력 있는 연봉 및 성과급",
                "최신 기술 스택 학습 지원",
                "컨퍼런스 및 세미나 참석 지원",
                "자유로운 근무 환경 (재택근무 가능)",
                "개발 장비 및 도구 지원"
              ]}
            />
          </div>

          <div className="text-center mt-16">
            <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                지원 방법
              </h3>
              <p className="text-muted-foreground mb-4">
                이력서와 자기소개서를 첨부하여 이메일로 지원해주세요.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>이메일:</strong> careers@styleavenue.com</p>
                <p><strong>제목:</strong> [지원직무] 이름</p>
                <p><strong>첨부파일:</strong> 이력서, 자기소개서 (PDF 형식)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
