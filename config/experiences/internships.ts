import type { ExperienceInterface } from "../experience";

export const internshipExperiences: ExperienceInterface[] = [
  // OB 인턴
  {
    id: "ob-digital-sales-intern",
    type: "Internships",
    position: "Digital Sales 인턴",
    company: "오비맥주",
    location: "Seoul, South Korea",
    startDate: new Date("2026-01-02"),
    endDate: new Date("2026-02-27"),
    description: [
      "오비맥주 BEES T&A Student Intern으로 근무하며, 주류 도매사 주문 데이터의 수집·정제·전처리·시스템 적재 과정을 지원하고 반복 업무를 자동화했습니다.",
    ],
    achievements: [
      "400여 개 도매사의 상품명·규격·코드 불일치를 정제하고 데이터 매핑 기준 고도화",
      "최근 1년간 적재되지 않던 특정 도매사 데이터의 원인을 분석하고 전처리 로직을 개선하여 정상 적재",
      "Python과 Power Automate를 활용한 데이터 검증·분할 및 리포트 발송 자동화 설계",
      "BW·Analyzer 기반 판매 실적 분석과 BEES 도매사 지원 자료 제작",
      "현장실습 수행평가 98/100점 획득",
    ],
    skills: [
      "Python",
      "Excel",
      "Data Cleansing",
      "Data Analysis",
      "Data Automation",
      "Power Automate",
      "SAP BW",
    ],
    companyUrl: "https://www.ob.co.kr",
    logo: "/timeline/Internships/ob/ob-logo.png",
    detailLayout: "rich",
    category: [],
    detailBlocks: [
      { type: "image", src: "/timeline/Internships/ob/윗사진.png" },
      {
        type: "button",
        label: "경력증명서",
        href: "/timeline/Internships/ob/경력증명서_한지훈.pdf",
      },
  
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "오비맥주 Digital Sales 부서에서 BEES T&A Student Intern으로 8주간 근무했습니다.",
          "전국 주류 도매사에서 전달되는 주문 데이터를 분석 가능한 형태로 정제하고 시스템에 적재하는 데이터 파이프라인 업무를 수행했습니다. 도매사마다 서로 다른 상품명과 품목 코드를 표준화하고, 반복적인 전처리와 검증 업무를 자동화하는 데 집중했습니다.",
          "데이터 정제에 그치지 않고 BW·Analyzer 기반 판매 실적 분석, BEES 플랫폼 만족도 데이터 검토, 도매사 지원 자료 제작에도 참여하며 유통 데이터와 비즈니스 의사결정이 연결되는 과정을 경험했습니다.",
        ],
      },
  
      { type: "heading", text: "도매사 주문 데이터 파이프라인 운영" },
      {
        type: "paragraphs",
        items: [
          "도매사별 원본 데이터가 수집된 이후 정제·병합·분할·검증을 거쳐 사내 시스템에 적재되는 전체 흐름을 지원했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "약 230개 유흥 채널과 120개 가정용 채널의 원본 데이터를 병합하고 도매사·데이터 유형별로 분류",
          "원본 데이터와 클렌징 완료 파일을 대조하여 누락, 행 밀림, 작업월 불일치 및 파일 확장자 오류 검증",
          "월간 데이터 마감 과정에서 차수별 Merge·Split 작업과 미수취 데이터 관리 지원",
          "매출처 코드 누락값과 비정상 품목 코드를 탐지·제거하는 Python 검증 로직 작성",
          "상품의 용량·용기·주종·제조사와 채널별 분류 기준을 반영하여 분석 데이터 현행화",
        ],
      },
  
      { type: "heading", text: "마스터 데이터 정제 및 표준화" },
      {
        type: "paragraphs",
        items: [
          "동일한 제품도 도매사마다 상품명과 품목 코드를 다르게 관리하기 때문에 발생하는 미매핑과 오분류 문제를 분석하고, 마스터 데이터의 정확도를 개선했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "400여 개 도매사의 상품명·규격·품목 코드 불일치 항목을 조사하고 표준값으로 정제",
          "사업자번호와 품목 코드를 기준으로 중복값과 미매핑 항목을 식별하는 매핑 기준 수립",
          "XLOOKUP·COUNTIF·조건부 서식을 활용하여 중복, 누락 및 이상값을 검증",
          "지수 표기법으로 변형된 품목 코드, 비정상 상품명, 반품 내역 및 용량 오류 수정",
          "도매사별 명칭 체계를 공통 기준과 연결하는 Global Key의 필요성을 분석하고 예외 매핑 로직 보완",
        ],
      },
  
      { type: "heading", text: "데이터 적재 오류 해결" },
      {
        type: "paragraphs",
        items: [
          "최근 1년간 원인을 특정하지 못해 사내 시스템에 정상적으로 적재되지 않던 특정 도매사 데이터의 처리 과정을 분석했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "원본 파일의 구조와 기존 전처리 과정에서 발생하는 데이터 불일치 원인 조사",
          "상품명·도매사 번호와 예외 항목을 반영한 전처리 및 매핑 로직 적용",
          "개선된 전처리 결과를 시스템에 적재하여 데이터가 정상적으로 반영되는지 검증",
          "과거 1년치 누적 데이터와 향후 수집 데이터에 동일한 로직을 적용할 수 있도록 처리 절차 정리",
        ],
      },
  
      { type: "heading", text: "판매 실적 분석 및 영업 지원" },
      {
        type: "paragraphs",
        items: [
          "데이터가 실제 영업 전략과 도매사 지원에 활용되는 과정을 이해하기 위해 판매 실적 분석과 진단미팅 자료 제작 업무에 참여했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "SAP BW와 Analyzer를 활용해 지점·도매사별 판매 실적과 최근 3개월 추이 분석",
          "매출 규모가 유사한 도매사를 그룹화하고 채권·이익금 등 비교 지표 생성",
          "Excel 데이터가 프레젠테이션 자료로 연동되는 진단미팅 보고 체계 학습",
          "BEES 플랫폼 이용 도매사의 만족도 데이터를 검토하고 신뢰 가능한 응답 데이터 선별",
          "도매사에 제공할 세무·재무 정보와 영업 지원 솔루션을 조사하고 시각화 자료 제작",
        ],
      },
  
      { type: "heading", text: "업무 자동화 및 프로세스 개선" },
      {
        type: "paragraphs",
        items: [
          "반복적으로 수행되는 데이터 처리와 보고 업무의 오류를 줄이고 효율성을 높이기 위해 기존 코드와 업무 흐름을 개선했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "작업월 불일치와 파일 확장자 오류를 실행 전에 확인하는 Python 검증 로직 추가",
          "도매사 원본 데이터를 권역별 파일로 분할하는 Python 코드의 실행 구조 개선",
          "Power Automate를 활용해 Excel 리포트와 화면 캡처를 이메일로 자동 발송하는 프로세스 초안 설계",
          "기존 시스템을 데이터 포털 기반 프로세스로 전환하기 위한 마스터 파일 구조 개편 지원",
        ],
      },
  
      { type: "heading", text: "현장 이해 및 인수인계" },
      {
        type: "paragraphs",
        items: [
          "안양 도매사 관리 지부를 방문하여 현장에서 생성된 주문 데이터가 본사로 전달되는 과정을 확인하고, 실습 종료 전 업무 절차와 예외 사항을 인수인계 문서로 정리했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "현장 담당자 면담을 통해 도매사별 데이터 수집 환경과 품목 관리 방식의 차이 파악",
          "데이터 누락과 오분류를 발생시키는 현장 변수 및 자동화 시 고려사항 정리",
          "데이터 수집·전처리·검증·분할·적재 과정을 다음 담당자가 재현할 수 있도록 단계별 문서화",
          "적재 오류 대응 방법, 마스터 파일 관리 기준 및 클렌징 과정의 주요 예외 사항 기록",
        ],
      },
  
      { type: "heading", text: "활동 성과" },
      {
        type: "bullets",
        items: [
          "정제되지 않은 실제 기업 데이터를 대상으로 수집부터 배포까지의 데이터 관리 프로세스 경험",
          "데이터 오류를 도메인 지식과 코드 분석을 통해 해결하는 실무 문제 해결 역량 강화",
          "기술적 정확성뿐 아니라 데이터가 영업 지원과 의사결정에 활용되는 비즈니스 맥락 습득",
          "효율적인 업무 프로세스 개선과 적극적인 학습 태도를 인정받아 현장실습 수행평가 98/100점 획득",
        ],
      },
    ],
  },
];
