import type { ExperienceInterface } from "../experience";

export const projectExperiences: ExperienceInterface[] = [
  {
    id: "termcorrector",
    type: "Project",
    position: "TermCorrector: AI 스피치 교정 프로젝트",
    company: "Kyung Hee University",
    location: "Yongin, South Korea",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-11-22"),
    description: [
      "Whisper STT의 전공 용어 오인식을 자동으로 교정하는 AI 프로젝트를 개발했습니다.",
      "발음 기반 유사도와 AI 모델을 활용하여 전공 용어 보정 시스템을 구현했습니다.",
    ],
    achievements: [
      "HTML 기반 교정 결과 시각화를 구현했습니다.",
      "SWCON 우수상의 기반이 된 프로젝트입니다.",
    ],
    skills: ["Python", "Flask", "Whisper", "FastText"],
    companyUrl: "",
    logo: "/timeline/project/term-corrector.png",
  },
  {
    id: "seecode",
    type: "Project",
    position: "SeeCode: 시각장애인을 위한 앱 접근성 개선 서비스",
    company: "Kyung Hee University",
    location: "Yongin, South Korea",
    startDate: new Date("2024-12-01"),
    endDate: new Date("2025-11-30"),
    description: [
      "Flutter 애플리케이션의 접근성을 자동으로 분석하고 개선하는 개발 도구를 개발했습니다.",
      "VS Code Extension과 Android Emulator를 활용하여 접근성 문제를 탐지하고 개선안을 제안했습니다.",
    ],
    achievements: [
      "대체 텍스트 자동 생성 기능을 구현했습니다.",
      "접근성 개선 코드 자동 제안 기능을 구현했습니다.",
    ],
    skills: ["Python", "Flutter", "React"],
    companyUrl: "",
    logo: "/timeline/project/seecode.png",
  },
  {
    id: "woodjudge",
    type: "Project",
    position: "WoodJudge: RAG 기반 법률 QA 시스템",
    company: "Personal Project",
    location: "South Korea",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-06-30"),
    description: [
      "판례 데이터를 기반으로 RAG 기반 법률 질의응답 시스템을 개발했습니다.",
    ],
    achievements: [
      "Vector DB를 구축하여 판례 검색 성능을 향상시켰습니다.",
      "RAG 기반 검색 및 응답 시스템을 구현했습니다.",
    ],
    skills: ["Python", "Flask", "Chroma", "LangChain"],
    companyUrl: "",
    logo: "/timeline/project/woodjudge.png",
  },
];
