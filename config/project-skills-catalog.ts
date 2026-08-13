import { Icons } from "@/components/common/icons";
import { ValidSkills } from "@/config/constants";
import { skillsInterface } from "@/config/skills";

type SkillDefinition = Omit<skillsInterface, "name">;

export const projectSkillCatalog: Partial<Record<ValidSkills, SkillDefinition>> =
  {
    Python: {
      description:
        "데이터 처리, ML 모델 학습, 웹 백엔드 개발 등 프로젝트 전반의 핵심 언어로 활용했습니다.",
      rating: 5,
      icon: Icons.python,
    },
    Flask: {
      description:
        "TermCorrector, CleansedFeedback 등 AI 기반 웹 서비스 백엔드를 구현했습니다.",
      rating: 4,
      icon: Icons.flask,
    },
    FastAPI: {
      description:
        "WoodJudge RAG 서비스의 API 서버를 구축하며 비동기 처리와 REST API를 설계했습니다.",
      rating: 4,
      icon: Icons.fastapi,
    },
    React: {
      description:
        "SeeCode, WoodJudge 등 프로젝트 프론트엔드 UI를 컴포넌트 기반으로 개발했습니다.",
      rating: 4,
      icon: Icons.react,
    },
    Flutter: {
      description:
        "SeeCode에서 Flutter 앱 접근성 분석 대상 및 데모 환경 구성에 활용했습니다.",
      rating: 3,
      icon: Icons.flutter,
    },
    MySQL: {
      description:
        "WoodJudge에서 판례 및 사용자 데이터를 저장·조회하는 관계형 DB로 사용했습니다.",
      rating: 3,
      icon: Icons.mysql,
    },
    Whisper: {
      description:
        "TermCorrector에서 강의 녹음 STT 변환에 OpenAI Whisper를 적용했습니다.",
      rating: 4,
      icon: Icons.whisper,
    },
    FastText: {
      description:
        "TermCorrector에서 영문 전문 용어 교정 모델로 FastText를 학습·적용했습니다.",
      rating: 4,
      icon: Icons.fasttext,
    },
    "Chrome Extension": {
      description:
        "CleansedFeedback에서 YouTube 댓글 수집 및 정제 기능을 브라우저 확장 프로그램으로 구현했습니다.",
      rating: 4,
      icon: Icons.chrome,
    },
    Selenium: {
      description:
        "CleansedFeedback에서 웹 페이지 자동화 및 댓글 데이터 수집에 활용했습니다.",
      rating: 3,
      icon: Icons.selenium,
    },
    KcELECTRA: {
      description:
        "CleansedFeedback에서 한국어 댓글의 비난·피드백 분류 모델로 KcELECTRA를 fine-tuning했습니다.",
      rating: 4,
      icon: Icons.kcelectra,
    },
    "Hugging Face": {
      description:
        "CleansedFeedback에서 사전학습 모델 로드, 학습, 배포 파이프라인에 Hugging Face를 사용했습니다.",
      rating: 4,
      icon: Icons.huggingface,
    },
  };
