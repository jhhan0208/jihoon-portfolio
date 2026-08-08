import type { ExperienceInterface } from "../experience";

export const internExperiences: ExperienceInterface[] = [
  {
    id: "ob",
    type: "Intern",
    position: "Digital Sales 인턴",
    company: "오비맥주",
    location: "Seoul, South Korea",
    startDate: new Date("2026-01-02"),
    endDate: new Date("2026-02-27"),
    description: [
      "도매사 주문 데이터를 정제하고 분석하여 영업 의사결정을 지원하는 데이터 업무를 수행했습니다.",
      "Python과 SQL을 활용해 데이터 전처리 및 자동화 프로세스를 구축하고, 판매 데이터 분석 업무를 지원했습니다.",
      "BEES 플랫폼 관련 데이터 분석과 영업 지원 자료 제작에 참여했습니다.",
    ],
    achievements: [
      "400개 이상의 도매사 상품명 및 규격 데이터를 정제하여 데이터 품질을 개선했습니다.",
      "월별 반복되는 데이터 전처리 작업을 자동화할 수 있도록 Python 기반 프로세스를 설계했습니다.",
      "도매사 판매 실적 데이터를 분석하여 영업 진단 미팅 자료 제작을 지원했습니다.",
      "BEES 플랫폼 만족도(MPS) 분석을 수행하고 서비스 개선을 위한 인사이트를 도출했습니다.",
    ],
    skills: ["Python", "SQL", "Google Cloud"],
    companyUrl: "https://www.ob.co.kr",
    logo: "/timeline/intern/ob-logo.png",
  },
  {
    id: "khuda-7th",
    type: "Intern",
    position: "KHUDA 7기",
    company: "KHUDA",
    location: "Seoul, South Korea",
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-07-01"),
    description: [
      "쿠다 활동.",
    ],
    achievements: [
      "쿠다 활동.",
      "쿠다 활동.",
    ],
    skills: ["Python"],
    companyUrl: "https://www.khuda.co.kr",
    logo: "/timeline/intern/khuda-7th.png",
  },
];
