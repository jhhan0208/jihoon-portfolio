import type { ExperienceInterface } from "../experience";

export const publicationExperiences: ExperienceInterface[] = [
  // {
  //   id: "ksc-paper",
  //   type: "Publication",
  //   position: "Conference Paper",
  //   company: "KSC 2025",
  //   location: "South Korea",
  //   startDate: new Date("2025-01-01"),
  //   endDate: new Date("2025-01-01"),
  //   description: ["SEECODE 프로젝트 연구 결과를 KSC 학회에 발표했습니다."],
  //   achievements: ["AI 기반 접근성 개선 기술을 논문으로 발표했습니다."],
  //   skills: ["Python", "Flutter"],
  //   companyUrl: "",
  //   logo: "/publication/ksc.png",
  // },

  {
    id: "ksc-paper",
    type: "Publication",
    position: "Conference Paper",
    company: "KSC 2025",
    location: "South Korea",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-06-30"),
    description: [
      "SEECODE 프로젝트 연구 결과를 KSC 학회에 발표했습니다.",
    ],
    achievements: [
      "AI 기반 접근성 개선 기술을 논문으로 발표했습니다.",
    ],
    skills: ["Python", "Flutter"],
    companyUrl: "",
    logo: "/experience/kyunghee-logo.png",
    detailLayout: "rich",
    category: ["Web Dev", "Backend"],
    //heroImage: "/experience/kyunghee-logo.png",
    // descriptionDetails: {
    //   paragraphs: [
    //     "경희대학교 응용데이터분석 과목에서 SW 멘토로 활동하며, 학생들이 데이터 분석과 머신러닝 개념을 실습 중심으로 이해할 수 있도록 지원했습니다.",
    //     "이 데모 카드는 Experience 상세 페이지에서 Projects의 Read more 레이아웃과 동일한 구조를 보여주기 위한 예시입니다.",
    //   ],
    //   bullets: [
    //     "주차별 실습 목표와 과제 가이드를 정리해 멘토링 효율을 높였습니다.",
    //     "Python 기반 데이터 전처리와 모델 학습 흐름을 단계별로 설명했습니다.",
    //     "학생 프로젝트 리뷰를 통해 코드 품질과 결과 해석 방식을 피드백했습니다.",
    //   ],
    // },
    pagesInfoArr: [
      {
        title: "Mentoring Overview",
        description:
          "멘토링 세션에서 다룬 주요 주제와 학생들의 실습 진행 상황을 정리한 자료입니다.",
        imgArr: ["/experience/sw-mentor.png"],
      },
      {
        title: "Workshop Snapshot",
        description:
          "데이터 분석 워크숍에서 진행한 실습 예시와 토론 내용을 기록한 화면입니다.",
        imgArr: ["/experience/KSC2025_오종현"],
      },
    ],
  },
];
