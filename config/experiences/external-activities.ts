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

  // AI SPARK 부트캠프
  {
    id: "ai-spark-bootcamp",
    type: "External Activities",
    position: "AI SPARK 부트캠프 3기 🏆",
    company: "NXT CLOUD",
    location: "AWS Korea, Seoul",
    startDate: new Date("2026-08-18"),
    endDate: new Date("2026-08-19"),
    description: [
      "경희대학교 캠퍼스타운센터와 NXT CLOUD가 운영한 AI SPARK 부트캠프에 참여하여 최신 생성형 AI·AWS 노코드 도구·AI 에이전트 활용법을 학습하고, AI 기반 맞춤형 채용 매칭 서비스 MatchLab을 기획·구현했습니다.",
    ],
    achievements: [
      "AWS PartyRock을 활용한 생성형 AI 노코드 애플리케이션 2종 제작",
      "자유 형식의 사용자 경험을 6개 역량으로 구조화하는 MatchLab 프로토타입 개발",
      "역량 점수·추천 공고·Skill Gap·상세 근거 리포트로 이어지는 서비스 흐름 구현",
      "사용자 가중치와 공고 특성 가중치를 함께 반영하는 설명 가능한 매칭 로직 설계",
      "AI SPARK 부트캠프 아이디어톤 대상 수상",
    ],
    skills: [
      "Generative AI",
      "AWS PartyRock",
      "Prompt Engineering",
      "AI Agents",
      "Service Planning",
      "HTML",
      "CSS",
      "JavaScript",
      "AI-Assisted Development",
      "Rapid Prototyping",
    ],
    companyUrl:
      "https://www.nxtcloud.kr/ko",
    logo: "/timeline/External Activities/AI_SPARK/logo.png",
    detailLayout: "rich",
    category: [],
    detailBlocks: [
      {
        type: "image",
        src: "/timeline/External Activities/AI_SPARK/단체_사진.jpg",
      },
      {
        type: "button",
        label: "부트캠프 소개 페이지",
        href: "https://m.blog.naver.com/PostView.naver?blogId=khucampustown&logNo=224368722932&proxyReferer=&noTrackingCode=true",
      },
      {
        type: "button",
        label: "MatchLab 쇼케이스",
        href: "https://showcase.nxtcloud.kr/view.html?id=2666706c",
      },
      {
        type: "button",
        label: "AI SPARK 부트캠프 수료증",
        href: "/timeline/External Activities/AI_SPARK/수료증_한지훈.pdf",
      },
  
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "경희대학교 캠퍼스타운센터와 NXT CLOUD가 운영한 AI SPARK 부트캠프 3기에 참여했습니다. 교육은 2026년 8월 18일부터 19일까지 AWS Korea 역삼 센터필드에서 진행되었습니다.",
          "2일 동안 생성형 AI와 클라우드 산업의 최신 흐름, AWS 기반 AI 노코드 애플리케이션 제작, 프롬프트 엔지니어링, AI 에이전트 활용 및 바이브 코딩을 학습했습니다.",
          "교육 마지막에는 취업 준비 과정에서 겪은 문제를 바탕으로 개인화 채용 매칭 서비스 ‘MatchLab’을 팀 프로젝트로 기획하고 프로토타입을 구현했습니다. 최종 발표를 통해 문제 정의, 핵심 기능, 비즈니스 모델과 데이터 확장 가능성을 제시했으며 아이디어톤 대상을 수상했습니다.",
        ],
      },
  
      { type: "heading", text: "교육 과정" },
      {
        type: "paragraphs",
        items: [
          "AI 도구의 기능을 단순히 체험하는 데 그치지 않고, AI와 클라우드 기술을 활용해 실제 사용자의 문제를 정의하고 짧은 시간 안에 서비스 형태로 구현하는 과정을 경험했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "생성형 AI·클라우드·데이터센터·반도체 산업이 연결되는 구조와 주요 AI 플랫폼의 특징 학습",
          "AI가 작업을 자동화하는 영역과 사람이 목표·판단을 담당해야 하는 영역 구분",
          "기능 중심의 Action First 접근보다 고객 문제와 목표를 먼저 정의하는 Goal First 설계 방식 학습",
          "의료·교육·제조·고객센터 등 도메인 지식과 AI가 결합되는 실제 기업 활용 사례 분석",
          "고객 경험 향상, 업무 자동화, 의사결정 및 기술개발 지원을 위한 기업의 AI 활용 방식 탐구",
        ],
      },
  
      { type: "heading", text: "AWS PartyRock 노코드 AI 실습" },
      {
        type: "paragraphs",
        items: [
          "AWS PartyRock을 활용하여 프롬프트와 생성형 AI 모델을 조합한 노코드 애플리케이션을 제작했습니다. 복잡한 백엔드를 직접 구축하지 않고도 아이디어를 빠르게 검증할 수 있는 프로토타이핑 방식을 실습했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "텍스트 생성과 이미지 생성 등 작업 목적에 따라 적절한 생성형 AI 모델 선택",
          "Temperature와 Top P 등 모델 설정이 출력의 다양성과 일관성에 미치는 영향 확인",
          "하나의 복잡한 요청을 여러 개의 독립적인 태스크로 분리하여 결과 품질 개선",
          "구조화된 지시문과 태그를 활용해 모델이 요구사항을 명확하게 이해하도록 프롬프트 구성",
          "코드로 안정적으로 처리할 수 있는 영역과 생성형 AI가 필요한 영역을 구분하여 비용과 일관성 고려",
        ],
      },
      {
        type: "button",
        label: "PartyRock 실습 앱 1",
        href: "https://partyrock.aws/u/jhhan0208/tRaDfC1i0/AI",
      },
      {
        type: "button",
        label: "PartyRock 실습 앱 2",
        href: "https://partyrock.aws/u/jhhan0208/9ktwhOSO9",
      },
  
      { type: "heading", text: "AI 에이전트와 바이브 코딩" },
      {
        type: "paragraphs",
        items: [
          "AI 에이전트를 활용해 서비스 기획을 실제 코드와 사용자 화면으로 빠르게 전환하는 개발 방식을 학습했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "목표 결과물과 개발 단계를 먼저 정의한 뒤 기획·구현·검증 작업을 분리하여 AI에 전달",
          "HTML·CSS·JavaScript를 기반으로 별도 설치 부담이 적은 웹 애플리케이션 구현",
          "AI를 활용해 화면 구성과 기능을 빠르게 반복 개발하고 브라우저에서 동작 검증",
          "E2E 테스트와 브라우저 자동화를 활용한 사용자 흐름 검증 방식 학습",
          "API 키와 환경변수를 코드에서 분리하고 공개 저장소에 민감정보가 포함되지 않도록 관리",
        ],
      },
  
      { type: "heading", text: "최종 프로젝트: MatchLab" },
      {
        type: "paragraphs",
        items: [
          "MatchLab은 취업 준비생이 자신의 경험과 채용 공고 사이의 적합성을 객관적으로 판단하기 어렵다는 문제에서 출발한 개인화 채용 매칭 서비스입니다.",
          "사용자가 이력서처럼 정리된 문서가 아니더라도 자신의 학점, 어학, 자격증, 인턴, 프로젝트와 기술 경험을 자유롭게 입력하면 이를 비교 가능한 역량 프로필로 구조화합니다.",
          "단순히 유사한 공고를 나열하는 대신 적합도 점수와 산출 근거, 현재 강점, 부족한 역량과 지원 전 준비사항을 함께 제시하는 ‘설명 가능한 의사결정 지원’을 핵심 가치로 설정했습니다.",
        ],
      },
      {
        type: "button",
        label: "최종 프로젝트 기획서",
        href: "/timeline/External Activities/AI_SPARK/Personalized_Job_Matching_기획서.pdf",
      },
      {
        type: "button",
        label: "최종 프로젝트 발표자료",
        href: "/timeline/External Activities/AI_SPARK/2026_경희대캠타_AI스파크부트캠프3차_2팀_PPT.pdf",
      },
      {
        type: "button",
        label: "MatchLab 소개 페이지",
        href: "/timeline/External Activities/AI_SPARK/MatchLab — 나의 역량을 공고의 언어로.html",
      },
  
      { type: "heading", text: "문제 정의", level: "h3" },
      {
        type: "bullets",
        items: [
          "이력서·자기소개서·포트폴리오에 경험 정보가 흩어져 있어 공고마다 자신의 역량을 다시 해석해야 하는 문제",
          "기존 추천 서비스가 유사도나 순위만 제공하여 왜 추천되었고 무엇이 부족한지 확인하기 어려운 문제",
          "학점·어학·인턴·프로젝트·기술스택 중 어떤 역량이 특정 공고에서 중요한지 비교하기 어려운 문제",
          "지원 우선순위와 향후 준비 방향을 객관적인 근거보다 개인의 감에 의존하게 되는 문제",
        ],
      },
  
      { type: "heading", text: "핵심 서비스 흐름", level: "h3"  },
      {
        type: "image",
        src: "/timeline/External Activities/AI_SPARK/1.png",
      },
      {
        type: "image",
        src: "/timeline/External Activities/AI_SPARK/2.png",
      },
      {
        type: "bullets",
        items: [
          "사용자의 자유 형식 경험과 희망 직무·산업·지역 등의 선호 조건 입력",
          "학점·어학·자격증·인턴·프로젝트·기술스택의 6개 역량으로 경험 구조화",
          "각 역량의 점수뿐 아니라 입력 내용에서 찾은 산출 근거를 함께 표시",
          "역량 프로필과 희망 조건을 바탕으로 적합도가 높은 채용 공고 추천",
          "직무·지역별 공고를 비교할 수 있는 추천 목록과 공고 지도 제공",
          "선택한 공고에 대한 기술 일치도, 강점, 보완점과 준비 방향을 상세 리포트로 제시",
        ],
      },
  
      { type: "heading", text: "역량 분석 및 설명 가능한 추천", level: "h3"  },
      {
        type: "image",
        src: "/timeline/External Activities/AI_SPARK/3.png",
      },
      {
        type: "paragraphs",
        items: [
          "MatchLab은 모든 지원자에게 동일한 기준을 적용하지 않고, 사용자가 강조하고 싶은 영역과 채용 공고가 중요하게 평가하는 영역을 함께 반영하도록 설계했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "최종 점수 = 기준별 점수 × 사용자 가중치 × 공고 특성 가중치의 합으로 매칭 구조 설계",
          "전공·경력 수준·필수 자격증처럼 반드시 충족해야 하는 조건은 점수 계산 전 Hard Filter 적용",
          "프로젝트 중심·학점 중심·면접 중심 등 공고 특성에 따라 평가 가중치 조정",
          "추천 점수와 함께 일치하는 기술, 프로젝트 경험, 희망 산업 등 구체적인 추천 근거 제공",
          "부족한 기술이나 자격을 보완했을 때 적합도가 어떻게 변할 수 있는지 준비 방향 제안",
        ],
      },
  
      { type: "heading", text: "추천 공고 및 상세 리포트", level: "h3"  },
      {
        type: "image",
        src: "/timeline/External Activities/AI_SPARK/4.png",
      },
      {
        type: "bullets",
        items: [
          "공고별 적합도 점수와 요구 기술을 한 화면에서 비교할 수 있는 추천 목록 구현",
          "선택한 공고가 사용자에게 적합한 이유를 별도의 Match Insight 영역으로 제공",
          "역량 적합도·기술스택 일치도·직무 및 산업 선호도를 세부 점수로 분리",
          "일치하는 기술과 지원 전 보완할 역량을 상세 리포트로 제공",
          "API 키 없이도 전체 사용자 흐름을 확인할 수 있도록 오프라인 분석과 샘플 공고를 활용한 데모 구성",
        ],
      },
  
      { type: "heading", text: "데이터 구조 및 확장 방향", level: "h3"  },
      {
        type: "paragraphs",
        items: [
          "서비스의 장기적인 신뢰성을 확보하기 위해 증빙 가능한 실제 지원 데이터와 초기 취업 준비생이 입력한 가상 데이터를 분리하는 Two-Track 구조를 설계했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "실전 취준생 트랙은 실제 스펙과 서류·면접·최종 결과를 누적하여 추천 기준 개선에 활용",
          "초기 취준생 트랙은 자격증 취득 등 가정한 스펙을 입력하고 취득 전후의 추천 결과 비교",
          "모의 지원 데이터는 실제 합격 데이터와 분리하여 추천 모델의 데이터 오염 방지",
          "스펙·채용 공고·지원 결과가 누적될수록 유사 합격 사례와 직무별 합격 요인을 분석하는 피드백 루프 설계",
          "향후 합격 가능성 분석, 경쟁자 내 위치, Career Gap과 준비 경로 추천 기능으로 확장",
        ],
      },
  
      { type: "heading", text: "비즈니스 모델 및 데이터 가치", level: "h3"  },
      {
        type: "bullets",
        items: [
          "취업 시즌 동안 관심 기업과 자신의 역량을 비교할 수 있는 기간제 구독 모델 제안",
          "상세 Skill Gap 분석, 경쟁자 비교와 합격 가능성 분석을 유료 리포트로 확장",
          "검증된 합격 이력과 지원 결과를 활용한 직무별 합격 패턴 및 인재 풀 분석",
          "기업에는 지원자 역량과 선호 트렌드를, 교육기관에는 직무별 부족 역량과 교육 수요 데이터를 제공하는 B2B 모델 구상",
        ],
      },

      { type: "heading", text: "🏆 Awards", level: "h2", id: "awards" },
      {
        type: "image",
        src: "/timeline/External Activities/AI_SPARK/대상_사진.jpg",
      },
      
  
      { type: "heading", text: "활동 성과 및 배운 점" },
      {
        type: "paragraphs",
        items: [
          "짧은 개발 기간 안에 서비스를 완성하기 위해 모든 기능을 구현하기보다, 사용자가 실제로 겪는 문제와 이를 해결하는 핵심 흐름을 우선했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "기능 구현보다 고객이 느끼는 문제와 서비스 목표를 먼저 정의하는 Goal First 설계 방식 체득",
          "아이디어를 사용자 입력·분석·추천·리포트로 이어지는 구체적인 서비스 흐름으로 전환",
          "AI가 효과적인 영역과 일반 코드로 처리하는 것이 더 일관되고 경제적인 영역을 구분",
          "AI 에이전트를 기획·구현·검증에 활용하며 빠르게 프로토타입을 반복 개선",
          "기술 구현뿐 아니라 데이터 축적 방식, 신뢰성, 수익화 가능성까지 포함해 서비스 관점에서 기획",
          "문제 정의와 서비스 설계, 프로토타입의 완성도를 인정받아 AI SPARK 부트캠프 아이디어톤 대상 수상",
        ],
      },
    ],
  },
];
