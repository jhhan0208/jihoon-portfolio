import type { ExperienceInterface } from "../experience";

export const awardExperiences: ExperienceInterface[] = [
  {
    id: "swcon-award",
    type: "Award",
    position: "SWCON Competition",
    company: "Kyung Hee University",
    location: "Yongin, South Korea",
    startDate: new Date("2024-11-22"),
    endDate: new Date("2024-11-22"),
    description: ["TermCorrector 프로젝트로 SWCON 우수상을 수상했습니다."],
    achievements: [
      "AI 기반 STT 전공 용어 교정 기술의 완성도를 인정받았습니다.",
    ],
    skills: ["Python", "Whisper", "FastText"],
    companyUrl: "",
    logo: "/awards/swcon.png",
  },
  {
    id: "undergraduate-award",
    type: "Award",
    position: "Undergraduate Excellence Award",
    company: "Kyung Hee University",
    location: "Yongin, South Korea",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-01-01"),
    description: ["SEECODE 프로젝트로 학부 장려상을 수상했습니다."],
    achievements: ["프로젝트의 기술성과 활용 가능성을 인정받았습니다."],
    skills: ["Python", "Flutter"],
    companyUrl: "",
    logo: "/awards/undergraduate-award.png",
  },
];
