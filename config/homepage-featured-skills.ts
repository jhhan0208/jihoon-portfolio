import { Icons } from "@/components/common/icons";
import { projectSkillCatalog } from "@/config/project-skills-catalog";
import { skillsInterface } from "@/config/skills";

/** 메인 페이지 Skills 미리보기에 표시할 항목 (순서 고정) */
export const homepageFeaturedSkills: skillsInterface[] = [
  {
    name: "OPIC",
    description:
      "ACTFL 주관 영어 말하기 평가에서 Advanced Low(AL) 등급을 취득했습니다.",
    rating: 5,
    icon: Icons.opic,
  },
  {
    name: "SQLD",
    description:
      "한국데이터산업진흥원 SQL 개발자(SQLD) 자격증을 취득했습니다.",
    rating: 4,
    icon: Icons.sqld,
  },
  {
    name: "Python",
    description:
      projectSkillCatalog.Python?.description ??
      "데이터 처리, ML 모델 학습, 웹 백엔드 개발 등 프로젝트 전반의 핵심 언어로 활용했습니다.",
    rating: projectSkillCatalog.Python?.rating ?? 5,
    icon: projectSkillCatalog.Python?.icon ?? Icons.python,
  },
];
