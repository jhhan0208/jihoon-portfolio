export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  url?: string;
}

export interface AchievementProject {
  id: string;
  name: string;
  period: string;
  publications: AchievementItem[];
  awards: AchievementItem[];
}

export const achievementProjects: AchievementProject[] = [
  {
    id: "termcorrector",
    name: "TermCorrector",
    period: "24.09~25.06",
    publications: [
      {
        id: "termcorrector-paper",
        title:
          "TermCorrector: Speech-to-Text(STT)에서의 영문 용어 교정 서비스",
        organization: "KCC 2025",
        url: "/projects/termcorrector#publications",
      },
    ],
    awards: [
      {
        id: "kcc-2025-best",
        title: "KCC 2025 학부생/주니어 논문경진대회 학부생부문 최우수상",
        organization: "KCC 2025",
        url: "/projects/termcorrector#awards",
      },
      {
        id: "swcon-excellence",
        title: "경희대학교 소프트웨어융합학과 컨퍼런스 우수상",
        organization: "경희대학교 소프트웨어융합학과",
        url: "/projects/termcorrector#awards",
      },
    ],
  },
  {
    id: "naratsmalsami",
    name: "나랏말싸미",
    period: "25.01~25.02",
    publications: [],
    awards: [
      {
        id: "khuda-toy-special",
        title: "2025 KHUDA 7기 토이프로젝트 컨퍼런스 특별상",
        organization: "KHUDA",
        url: "/experience/khuda-7th#awards",
      },
    ],
  },
  {
    id: "seecode",
    name: "SeeCode",
    period: "25.08~25.11",
    publications: [
      {
        id: "seecode-paper",
        title:
          "SeeCode:맥락정보 활용한 모바일 접근성 진단 및 코드수정 제안 시스템",
        organization: "KSC 2025",
        url: "/projects/seecode#publications",
      },
    ],
    awards: [
      {
        id: "ksc-2025-encouragement",
        title: "KSC 2025 학부생/주니어 논문경진대회 학부생부문 장려상",
        organization: "KSC 2025",
        url: "/projects/seecode#awards",
      },
    ],
  },
];

export type FeaturedAchievement = AchievementItem & {
  kind: "Publication" | "Award";
  projectName: string;
};

export function getFeaturedAchievements(
  limit = 3
): FeaturedAchievement[] {
  const items: FeaturedAchievement[] = [];

  for (const project of achievementProjects) {
    for (const publication of project.publications) {
      items.push({
        ...publication,
        kind: "Publication",
        projectName: project.name,
      });
    }
    for (const award of project.awards) {
      items.push({
        ...award,
        kind: "Award",
        projectName: project.name,
      });
    }
  }

  return items.slice(0, limit);
}
