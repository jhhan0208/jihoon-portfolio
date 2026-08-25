import type { ExperienceInterface } from "../experience";

export const externalActivityExperiences: ExperienceInterface[] = [
  // 코멘토 데이터 직무부트캠프
  {
    id: "comento-sql-bootcamp",
    type: "External Activities",
    position: "코멘토 Data 직무부트캠프 - \nSQL 입문부터 활용까지",
    company: "코멘토",
    location: "",
    startDate: new Date("2025-07-22"),
    endDate: new Date("2025-08-19"),
    description: [
      "5주 동안 데이터 분석 보고서 작성과 대시보드 개발을 목표로 SQL 데이터 추출부터 시각화·인사이트 도출까지 실습했습니다.",
    ],
    achievements: [
      "SQL을 활용해 RDB에서 원하는 조건에 맞게 데이터를 가공·추출하는 실습 수행",
      "가상의 기업 데이터를 기반으로 가설-지표-분석-인사이트 흐름의 분석 보고서 작성",
      "Redash로 현황 모니터링 중심의 데이터 대시보드를 개발하고 인사이트 시각화",
    ],
    skills: ["SQL", "Data Analysis"],
    companyUrl: "https://comento.kr",
    logo: "/timeline/External Activities/comento/comento-logo.png",
    detailLayout: "rich",
    category: [],
    detailBlocks: [
      { type: "image", src: "/timeline/External Activities/comento/썸네일.jpg" },
      { type: "heading", text: "Description" },
      { type: "button",
        label: "직무부트캠프 링크",
        href: "https://comento.kr/edu/learn/ITSW/%EB%8D%B0%EC%9D%B4%ED%84%B0-G546",
      },
      {
        type: "paragraphs",
        items: [
          "학교에서 무료 수강 기회를 받아 코멘토 데이터 직무부트캠프에서 5주 동안 데이터 분석 보고서 작성과 대시보드 개발을 목표로 교육을 받았습니다.",
          "초반에는 SQL을 활용하여 RDB에서 원하는 조건에 맞게 데이터를 가공, 추출하는 방법을 실습하였습니다.",
          "마지막 2주에 걸쳐서는 가상의 기업 데이터를 활용하여 대시보드를 만들어 데이터를 시각화하고, 이를 기반으로 분석 보고서를 작성하여 인사이트 도출에 집중하였습니다.",
        ],
      },
      { type: "heading", text: "SQL 데이터 가공 및 추출" },
      {
        type: "paragraphs",
        items: [
          "SELECT, WHERE, ORDER BY, GROUP BY, JOIN 등 SQL 기본 문법을 익히고, 조건에 맞는 데이터를 RDB에서 가공·추출하는 실습을 진행했습니다.",
          "이후 Northwind라는 가상 식품회사 데이터베이스의 구조와 주요 테이블을 ERD와 직접 쿼리로 파악한 뒤, HAVING·서브쿼리 등 심화 문법을 활용해 실제 업무와 유사한 지표 추출 과제를 수행했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "w3schools 예시 데이터베이스로 국가별·고객별·년월별 집계 쿼리 작성",
          "Northwind DB에서 카테고리별 상품 현황, 분기별 고객 주문 지표, 연속 분기 주문 직원 등 실전 추출 과제 수행",
          "Redash 쿼리 에디터를 활용해 결과를 저장하고 검증",
        ],
      },
      { type: "heading", text: "분석 보고서 작성 및 대시보드 개발" },
      {
        type: "paragraphs",
        items: [
          "개별 지표 추출을 넘어, 가설 수립 → 지표 선정 → 측정 및 분석 → 인사이트 도출 흐름으로 분석 보고서를 작성했습니다.",
        ],
      },
      {
        type: "paragraphs",
        items: [
          "마지막에는 보고서에서 얻은 인사이트를 바탕으로 Northwind 현황을 한눈에 모니터링할 수 있는 대시보드를 Redash로 구성했습니다.",
        ],
      },
      {
        type: "button",
        label: "최종 보고서",
        href: "/timeline/External Activities/comento/보고서.pdf",
      },
      {
        type: "button",
        label: "결과 대시보드",
        href: "http://34.196.202.17/public/dashboards/tcx0rn8j0V9zMVPizHTTVOEm5E3w0c1djEIRodTl?org_slug=default",
      },
      {
        type: "bullets",
        items: [
          "비즈니스 실적을 평가할 수 있는 핵심 지표와 보조 지표를 정의하고 가설 3개를 하나의 흐름으로 연결",
          "표와 그래프를 활용해 지표를 시각화하고 분석 결과를 보고서로 정리",
          "현황 모니터링에 초점을 맞춘 지표와 차트를 모아 Redash 대시보드로 개발",
        ],
      },
      {
        type: "button",
        label: "수료증",
        href: "/timeline/External Activities/comento/직무부트캠프_수료증.pdf",
      },
    ],
  },

  // 2025 SW인재페스티벌
  {
    id: "sw-festival-2025",
    type: "External Activities",
    position: "2025 SW인재페스티벌",
    company: "과학기술정보통신부",
    location: "",
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-30"),
    description: [
      "SeeCode 프로젝트로 경희대학교 대표 우수작품에 선정되어 2025 SW인재페스티벌에 참가했으며, 모바일 접근성 진단·코드 수정 제안 시스템을 발표하고 전시했습니다.",
    ],
    achievements: [],
    skills: ["Flutter", "Accessibility", "AI"],
    companyUrl: "https://www.swfestival2025.kr/",
    logo: "/timeline/External Activities/인재페스티벌/logo.png",
    detailsHref: "/projects/seecode#awards",
  },
];
