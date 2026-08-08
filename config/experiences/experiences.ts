import type { ExperienceInterface } from "../experience";

export const professionalExperiences: ExperienceInterface[] = [
  {
    id: "sw-mentor",
    type: "Experience",
    position: "2025년 1학기 KHU SW 멘토",
    company: "Kyung Hee University",
    location: "",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-06-30"),
    description: [
      "경희대학교 박상근 교수님의 제안을 받아 2025년 1학기 응용데이터분석 과목의 SW 멘토로 활동했습니다.",
    ],
    achievements: [],
    skills: [], //["Python", "SQL", "TensorFlow"],
    companyUrl: "https://www.khu.ac.kr",
    logo: "/timeline/experience/kyunghee-logo.png",
    detailLayout: "rich",
    category: [], //["Web Dev", "Backend"],
    detailBlocks: [
      { type: "image", src: "/timeline/experience/sw-mentor_3.png" },
      {
        type: "button",
        label: "모집공고 링크",
        href: "https://swedu.khu.ac.kr/bbs/board.php?bo_table=07_01&wr_id=2415&sfl=wr_subject&stx=%EB%A9%98%ED%86%A0&sop=and",
      },
      {
        type: "button",
        label: "최종 활동보고서",
        href: "/timeline/experience/sw-mentor_2.pdf",
      },
      // {
      //   type: "skills",
      //   title: "Tech Stack",
      //   items: ["Python", "SQL", "TensorFlow"],
      // },
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "경희대학교 응용데이터분석 과목에서 SW 멘토로 활동하며, 학생들이 데이터 분석과 머신러닝 개념을 실습 중심으로 이해할 수 있도록 지원했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "주차별 실습 목표와 과제 가이드를 정리해 멘토링 효율을 높였습니다.",
          "Python 기반 데이터 전처리와 모델 학습 흐름을 단계별로 설명했습니다.",
          "학생 프로젝트 리뷰를 통해 코드 품질과 결과 해석 방식을 피드백했습니다.",
        ],
      },
    ],
  },


  ///

  {
    id: "Template",
    type: "Experience",
    position: "Template",
    company: "Kyung Hee University",
    location: "",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-06-30"),
    description: [
      "Template",
    ],
    achievements: [],
    skills: [], // ["Python", "SQL", "TensorFlow"],
    companyUrl: "https://www.khu.ac.kr",
    logo: "/timeline/experience/kyunghee-logo.png",
    detailLayout: "rich",
    category: [], //["Web Dev", "Backend"],
    detailBlocks: [
      { type: "image", src: "/timeline/experience/sw-mentor_3.png" },
      {
        type: "button",
        label: "모집공고 링크",
        href: "https://swedu.khu.ac.kr/bbs/board.php?bo_table=07_01&wr_id=2415&sfl=wr_subject&stx=%EB%A9%98%ED%86%A0&sop=and",
      },
      {
        type: "button",
        label: "최종 활동보고서",
        href: "/timeline/experience/sw-mentor_2.pdf",
      },
      // {
      //   type: "skills",
      //   title: "Tech Stack",
      //   items: ["Python", "SQL", "TensorFlow"],
      // },
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "경희대학교 응용데이터분석 과목에서 SW 멘토로 활동하며, 학생들이 데이터 분석과 머신러닝 개념을 실습 중심으로 이해할 수 있도록 지원했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "주차별 실습 목표와 과제 가이드를 정리해 멘토링 효율을 높였습니다.",
          "Python 기반 데이터 전처리와 모델 학습 흐름을 단계별로 설명했습니다.",
          "학생 프로젝트 리뷰를 통해 코드 품질과 결과 해석 방식을 피드백했습니다.",
        ],
      },
    ],
  },
];
