import { ValidCategory, ValidExpType, ValidSkills } from "./constants";
import { ContentBlock } from "./content-blocks";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  detailBlocks?: ContentBlock[];
}

export const Projects: ProjectInterface[] = [
  // termcorrector
  {
    id: "termcorrector",
    companyName: "TermCorrector 📄 🏆",
    type: "Professional",
    category: ["AI", "Speech Recognition", "Web Service"],
    shortDescription:
      "강의 녹음(STT)에서 잘못 인식된 영문 전문 용어를 자동으로 교정하는 AI 기반 학습 지원 서비스",
    websiteLink: "",
    githubLink: "https://github.com/jhhan0208/TermCorrector",
    techStack: ["Python", "Flask", "Whisper", "FastText"],
    startDate: new Date("2024-09-06"),
    endDate: new Date("2024-11-22"),
    companyLogoImg: "/timeline/Projects/termcorrector/logo.png",
    descriptionDetails: {
      paragraphs: [
        "기존 Speech-to-Text(STT) 서비스는 일반적인 한국어 인식에는 높은 성능을 보이지만, 강의에서 자주 등장하는 영문 전문 용어는 발화자의 외래어 발음 차이로 인해 잘못 변환되는 문제가 있습니다.",
      ],
      bullets: ["블록 기반 상세 페이지 데모 카드입니다."],
    },
    pagesInfoArr: [],
    detailBlocks: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=J-eTbh80qko",
        title: "TermCorrector Demo",
      },
      {
        type: "skills",
        title: "Tech Stack",
        items: ["Python", "Flask", "Whisper", "FastText"],
      },
      {
        type: "team",
        title: "Team",
        members: [
          {
            name: "선신욱",
            github: "https://github.com/tjs1012",
            role: "-",
          },
          {
            name: "한주상",
            github: "https://github.com/H-Software224",
            role: "-",
          },
          {
            name: "한지훈",
            github: "https://github.com/jhhan0208",
            role: "-",
          },
        ],
      },
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "기존 Speech-to-Text(STT) 서비스는 일반적인 한국어 인식에는 높은 성능을 보이지만, 강의에서 자주 등장하는 영문 전문 용어는 발화자의 외래어 발음 차이로 인해 잘못 변환되는 문제가 있습니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/termcorrector/intro.png",
      },
      {
        type: "paragraphs",
        items: [
          "TermCorrector는 사용자가 업로드한 강의 자료(PDF)에서 전문 용어를 자동 추출하고, Whisper STT 결과와 비교하여 잘못 인식된 용어를 탐지합니다. 이후 데이터 증강으로 학습한 FastText 모델을 이용해 가장 적절한 영문 용어를 예측하고, 교정 결과를 웹 서비스에서 바로 확인할 수 있도록 구현했습니다.",
          "Fine-tuning 없이도 강의 자료를 활용하여 도메인 특화 STT 성능을 개선할 수 있도록 설계했으며, 실제 학습에 활용 가능한 웹 서비스를 함께 개발하여 연구의 활용 가능성을 검증했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "Whisper STT와 FastText를 결합한 영문 전문 용어 교정 시스템 설계",
          "강의 자료(PDF)에서 전문 용어를 자동 추출하여 도메인별 학습 데이터 생성",
          "한국인 영어 발음 오류 패턴을 반영한 데이터 증강 기법 적용",
          "사용자가 교정 결과를 직접 선택하거나 수정할 수 있는 웹 서비스 개발",
          "2024 SWCON Conference 우수상 수상",
          "KCC 2025 논문 발표 및 학회 포스터 전시",
          "KCC 2025 학부생 부문 최우수상 수상",
        ],
      },
      {
        type: "button",
        label: "View on GitHub",
        href: "https://github.com/jhhan0208/TermCorrector",
      },
      { type: "heading", text: "Page Info" },
      { type: "heading", text: "Landing Page", level: "h3" },
      {
        type: "paragraphs",
        items: [
          "강의 자료(PDF)와 강의 녹음(M4A)을 업로드하여 STT 교정을 시작하는 메인 화면입니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/termcorrector/main-page.png",
      },
      { type: "heading", text: "System Architecture", level: "h3" },
      {
        type: "paragraphs",
        items: [
          "강의 자료에서 전문 용어를 추출하고, Whisper 기반 STT와 FastText 모델을 결합하여 잘못 인식된 영문 용어를 교정하는 전체 파이프라인입니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/termcorrector/architecture.png",
      },
      { type: "heading", text: "Correction Pipeline", level: "h3" },
      {
        type: "paragraphs",
        items: [
          "PDF에서 추출한 전문 용어와 STT 결과를 비교하여 후보를 선정하고, 데이터 증강 기반 FastText 모델을 통해 올바른 영문 용어로 교정합니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/termcorrector/correction-flow.png",
      },
      { type: "heading", text: "Correction Result", level: "h3" },
      {
        type: "paragraphs",
        items: [
          "교정 대상 단어를 하이라이트하여 사용자에게 보여주며, 여러 후보 중 원하는 결과를 선택하거나 직접 수정할 수 있습니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/termcorrector/result-page.png",
      },
      {
        type: "image",
        src: "/timeline/Projects/termcorrector/result-detail.png",
      },
      { type: "heading", text: "📄 Poster & Publication", level: "h2", id: "publications" },
      {
        type: "paragraphs",
        items: [
          "KCC 2025 논문과 학회 포스터를 통해 프로젝트의 연구 내용과 시스템 구조를 발표했습니다.",
        ],
      },
      {
        type: "button",
        label: "KCC 2025",
        href: "https://www.kiise.or.kr/conference/kcc/2025/",
      },
      {
        type: "image",
        src: "/timeline/Projects/termcorrector/KCC2025poster.png",
      },
      {
        type: "button",
        label: "TermCorrector: Speech-to-Text(STT)에서의 영문 용어 교정 서비스",
        href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318661",
      },
      {
        type: "button",
        label: "논문 PDF 보기",
        href: "/timeline/Projects/termcorrector/TermCorrector_논문.pdf",
      },
      {
        type: "button",
        label: "논문 포스터 보기",
        href: "/timeline/Projects/termcorrector/TermCorrector_포스터.pdf",
      },
      { type: "heading", text: "🏆 Awards", level: "h2", id: "awards" },
      { type: "image", src: "/timeline/Projects/termcorrector/수상사진.jpg" },
      {
        type: "button",
        label: "2024 경희대학교 Swcon Conference 우수상",
        href: "/timeline/Projects/termcorrector/SW_컨퍼런스_우수상.pdf",
      },
      {
        type: "button",
        label: "KCC 2025 학부생부문 최우수상",
        href: "/timeline/Projects/termcorrector/TermCorrector 최우수상.pdf",
      },
    ],
  },

  // seecode
  {
    id: "seecode",
    companyName: "SeeCode 📄 🏆",
    type: "Professional",
    category: ["AI", "Accessibility", "Developer Tool"],
    shortDescription:
      "Flutter 앱의 접근성 문제를 자동으로 탐지하고 AI 기반 코드 수정안을 제안하는 VS Code Extension",
  
    websiteLink: "",
    githubLink: "https://github.com/jhhan0208/flutter-accessbility-checker",
  
    techStack: [
      "Python",
      "Flutter",
      "React",
    ],
    startDate: new Date("2001-02-08"),
    endDate: new Date("2001-02-08"),
  
    companyLogoImg: "/timeline/Projects/seecode/logo.png",
  
    descriptionDetails: {
      paragraphs: [
        "모바일 접근성은 누구나 서비스를 이용하기 위한 필수 요소이지만, 많은 앱이 대체 텍스트 부족과 스크린리더 미지원으로 인해 시각장애인이 사용하기 어려운 문제가 있습니다.",
      ],
      bullets: [
        "Flutter 기반 접근성 자동 진단 및 코드 수정 제안",
      ],
    },
  
    pagesInfoArr: [],
  
    detailBlocks: [
      {
        type: "video",
        src: "https://www.youtube.com/watch?v=pdvzpfMuuqQ",
        title: "SeeCode Demo",
      },
  
      {
        type: "skills",
        title: "Tech Stack",
        items: [
          "Python",
          "Flutter",
          "React",
        ],
      },
  
      {
        type: "team",
        title: "Team",
        members: [
          {
            name: "오종현",
            github: "https://github.com/Sjaize",
            role: "-",
          },
          {
            name: "정유진",
            github: "https://github.com/YuujInJeong",
            role: "-",
          },
          {
            name: "오찬세",
            github: "https://github.com/chansses",
            role: "-",
          },
          {
            name: "한지훈",
            github: "https://github.com/jhhan0208",
            role: "-",
          },
        ],
      },
  
      {
        type: "heading",
        text: "Description",
      },
  
      {
        type: "paragraphs",
        items: [
          "많은 모바일 애플리케이션은 스크린리더를 위한 접근성 정보가 부족하여 시각장애인이 버튼이나 아이콘의 의미를 이해하지 못하는 문제가 있습니다.",
          "SeeCode는 Flutter 프로젝트를 분석하여 접근성 문제를 자동으로 탐지하고, LLM을 활용해 사용자 흐름(Context)을 고려한 대체 텍스트와 코드 수정안을 생성하는 VS Code Extension입니다.",
          "접근성 전문가가 아니더라도 개발 단계에서 즉시 접근성을 점검하고 개선할 수 있도록 설계하여 개발 비용을 줄이고 모바일 접근성을 향상시키는 것을 목표로 했습니다.",
        ],
      },
  
      {
        type: "bullets",
        items: [
          "VS Code Extension 기반 접근성 검사 도구 개발",
          "Flutter 코드와 실행 화면을 함께 분석하는 Context-aware 접근성 진단",
          "LLM을 활용한 대체 텍스트 및 코드 수정 제안",
          "Diff View를 통한 원클릭 코드 반영 기능",
          "실제 시각장애인 인터뷰를 기반으로 서비스 검증",
          "한국소프트웨어종합학술대회(KSC 2025) 논문 발표",
          "KSC 2025 학부생 논문경진대회 장려상 수상",
          "2025 SW인재페스티벌 우수작품 발표 및 전시",
        ],
      },
  
      {
        type: "button",
        label: "View on GitHub",
        href: "https://github.com/jhhan0208/flutter-accessbility-checker",
      },
  
      {
        type: "heading",
        text: "Page Info",
      },
  
      {
        type: "heading",
        text: "Problem Definition",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "시각장애인은 모바일 앱을 사용할 때 스크린리더에 의존하지만, 많은 앱에서 버튼과 아이콘에 접근성 정보가 부족하여 기능을 이해하기 어렵습니다.",
        ],
      },

      {
        type: "image",
        src: "/timeline/Projects/seecode/문제정의.png",
      },

      {
        type: "paragraphs",
        items: [
          "국내 모바일 앱과 SW중심대학 통합앱을 조사한 결과 접근성 부족 문제가 광범위하게 존재함을 확인했습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/seecode/학교문제.png",
      },
  
      {
        type: "heading",
        text: "System Overview",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "Flutter 프로젝트를 분석하고 실행 화면과 코드 문맥을 함께 고려하여 접근성 문제를 탐지하는 전체 시스템 구조입니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/seecode/architecture.png",
      },

      {
        type: "image",
        src: "/timeline/Projects/seecode/architecture2.png",
      },
  
      {
        type: "heading",
        text: "Accessibility Diagnosis",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "앱 화면과 코드의 연결 관계를 분석하여 스크린리더가 읽지 못하는 UI 요소를 탐지하고 대시보드에 시각적으로 제공합니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/seecode/logo.png",
      },
  
      {
        type: "heading",
        text: "AI Code Suggestion",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "LLM이 사용자 흐름과 코드 문맥을 함께 고려하여 적절한 접근성 코드와 대체 텍스트를 생성하고, Diff View를 통해 원클릭으로 적용할 수 있습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/seecode/code-suggestion.png",
      },
  
      {
        type: "heading",
        text: "Result",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "실제 시각장애인과 개발자 인터뷰를 통해 접근성 향상 효과와 개발 편의성을 검증했습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/seecode/result1.png",
      },
      {
        type: "image",
        src: "/timeline/Projects/seecode/result2.png",
      },
  
      {
        type: "heading",
        text: "📄 Poster & Publication",
        level: "h2",
        id: "publications",
      },
  
      {
        type: "paragraphs",
        items: [
          "KSC 2025에서 연구 결과를 발표했으며, 모바일 접근성 진단 및 코드 수정 제안 시스템을 논문으로 출판했습니다.",
        ],
      },
  
      {
        type: "button",
        label: "KSC 2025",
        href: "https://www.kiise.or.kr/conference/KSC/2025/",
      },
  
      {
        type: "button",
        label: "맥락 정보를 활용한 모바일 접근성 진단 및 코드 수정 제안 시스템",
        href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12577742",
      },
  
      {
        type: "button",
        label: "논문 PDF 보기",
        href: "/timeline/Projects/seecode/seecode_논문.pdf",
      },
  
      {
        type: "button",
        label: "논문 포스터 보기",
        href: "/timeline/Projects/seecode/seecode_포스터.pdf",
      },
  
      {
        type: "heading",
        text: "🏆 Awards & Exhibition",
        level: "h2",
        id: "awards",
      },
      { type: "image", src: "/timeline/Projects/seecode/인재패스티벌_사진.jpg" },
      {
        type: "paragraphs",
        items: [
          "SW인재페스티벌에서 우수작품으로 선정되어 전시 및 발표를 진행했으며, KSC 학부생 논문경진대회 장려상을 수상했습니다.",
        ],
      },
  
      {
        type: "button",
        label: "2025 SW인재페스티벌",
        href: "https://www.swfestival2025.kr/",
      },
  
      {
        type: "button",
        label: "KSC 2025 학부생 논문경진대회 장려상",
        href: "/timeline/Projects/seecode/seecode_수상확인서.pdf",
      },
    ],
  },

  // woodjudge
  {
    id: "woodjudge",
    companyName: "WOODJUDGE",
    type: "Professional",
    category: ["LLM", "RAG", "AI"],
    shortDescription:
      "유사 판례 검색(RAG)을 기반으로 신뢰도 높은 법률 조언을 제공하는 AI 서비스",
  
    websiteLink: "",
    githubLink: "https://github.com/jhhan0208/WoodJudge",
  
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "MySQL",
    ],
  
    startDate: new Date("2001-02-08"),
    endDate: new Date("2001-02-08"),
  
    companyLogoImg: "/timeline/Projects/woodjudge/logo.png",
  
    descriptionDetails: {
      paragraphs: [
        "일반 사용자가 법률 지식 없이도 자신의 상황을 자연어로 입력하면, 유사 판례를 기반으로 대응 전략을 제안하는 RAG 기반 법률 상담 서비스입니다.",
      ],
      bullets: [
        "LLM + RAG 기반 판례 검색 및 법률 조언 시스템",
      ],
    },
  
    pagesInfoArr: [],
  
    detailBlocks: [
      {
        type: "video",
        src: "https://youtu.be/BF-l0Enyq-A",
        title: "WOODJUDGE Demo",
      },
  
      {
        type: "skills",
        title: "Tech Stack",
        items: [
          "Python",
          "FastAPI",
          "React",
          "MySQL",
        ],
      },
  
      {
        type: "team",
        title: "Team",
        members: [
          {
            name: "문상혁",
            github: "",
            role: "-",
          },
          {
            name: "민지원",
            github: "",
            role: "-",
          },
          {
            name: "신진수",
            github: "https://github.com/jsshin8128",
            role: "-",
          },
          {
            name: "안성재",
            github: "https://github.com/dmach1ne",
            role: "-",
          },
          {
            name: "우은진",
            github: "",
            role: "-",
          },
          {
            name: "장은서",
            github: "",
            role: "-",
          },
          {
            name: "한지훈",
            github: "https://github.com/jhhan0208",
            role: "-",
          },
        ],
      },
  
      {
        type: "heading",
        text: "Description",
      },
  
      {
        type: "paragraphs",
        items: [
          "기존 GPT 기반 법률 상담은 판례 전문 데이터에 접근하지 못해 사실성이 부족하고, 기존 판례 검색 서비스는 키워드 검색만 가능하여 일반 사용자가 활용하기 어렵다는 문제를 해결하고자 프로젝트를 시작했습니다.",
          "WOODJUDGE는 사용자의 자연어 질의를 기반으로 유사 판례를 검색하고, 검색된 판례를 근거로 대응 전략과 예상 처벌, 법적 근거를 함께 제시하는 RAG 기반 법률 상담 시스템입니다.",
          "판례 검색 성능 향상을 위해 법률 특화 임베딩 모델과 Chroma Vector Database를 활용했으며, 검색된 결과를 기반으로 GPT-4o mini가 신뢰도 높은 답변을 생성하도록 설계했습니다.",
        ],
      },
  
      {
        type: "bullets",
        items: [
          "RAG 기반 유사 판례 검색 및 법률 조언 시스템 구현",
          "LangChain + Chroma Vector DB 기반 Retrieval Pipeline 구축",
          "법률 특화 임베딩(KURE)을 활용한 판례 검색 성능 향상",
          "GPT-4o mini 기반 대응 전략 및 법적 근거 생성",
          "Prompt Engineering을 통한 답변 품질 개선",
          "RAG 파이프라인 최적화 및 검색 성능 평가",
        ],
      },
  
      {
        type: "button",
        label: "View on GitHub",
        href: "https://github.com/jhhan0208/WoodJudge",
      },
  
      {
        type: "heading",
        text: "Page Info",
      },
  
      {
        type: "heading",
        text: "Problem Definition",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "법률 상담은 높은 비용과 심리적 장벽이 존재하며, GPT 기반 서비스는 판례를 근거로 한 신뢰도 높은 답변을 제공하기 어렵습니다. 또한 기존 판례 검색 서비스는 자연어 질의를 지원하지 않아 일반 사용자가 활용하기 어렵습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/woodjudge/problem.png",
      },
  
      {
        type: "heading",
        text: "System Architecture",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "LangChain을 중심으로 Chroma Vector DB와 MySQL을 연결하고, GPT-4o mini를 통해 판례 기반 답변을 생성하는 전체 시스템 구조입니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/woodjudge/woodjudge_파이프라인.png",
      },
  
      {
        type: "heading",
        text: "RAG",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "사용자의 자연어 질의를 임베딩하여 유사 판례를 검색하고, 검색된 판례를 참고하여 LLM이 프롬프트 기반 대응 전략과 예상 처벌을 생성합니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/woodjudge/프롬프트.png",
      },
  
      {
        type: "heading",
        text: "Retrieval Optimization",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "RecursiveCharacterTextSplitter를 이용한 Chunking과 KURE 임베딩 모델을 적용하여 검색 성능을 최적화했습니다. Chunk Size, Chunk Overlap, Embedding Model 등 다양한 파라미터를 비교하며 최적의 Retrieval 성능을 탐색했습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/woodjudge/retrieval.png",
      },
  
      {
        type: "heading",
        text: "Evaluation",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "일반적인 RAGAS 평가 방식 대신, 법률 상담 특성에 맞는 평가 방식을 설계했습니다. 사용자 질의와 검색된 판례 간의 관련성을 코사인 유사도와 LLM-as-Judge를 활용해 정량·정성적으로 함께 평가했습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/woodjudge/evaluation.png",
      },
  
      {
        type: "heading",
        text: "Result",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "사용자는 자신의 상황을 자연어로 입력하면 유사 판례, 판례 요약, 예상 처벌, 대응 전략을 함께 확인할 수 있으며, 기존 검색 서비스보다 직관적인 법률 상담 경험을 제공합니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/woodjudge/result.png",
      },
  
      {
        type: "heading",
        text: "📄 Project Documents",
        level: "h2",
      },
  
      {
        type: "paragraphs",
        items: [
          "프로젝트 기획서와 발표 자료를 통해 RAG 기반 법률 상담 시스템의 설계 과정과 기술 구현 내용을 정리했습니다.",
        ],
      },
  
      {
        type: "button",
        label: "프로젝트 발표자료",
        href: "/timeline/Projects/woodjudge/woodjudge_ppt.pdf",
      },
  
      {
        type: "button",
        label: "프로젝트 기획서",
        href: "/timeline/Projects/woodjudge/woodjudge_계획서.pdf",
      },
    ],
  },

  // cleansedFeedback
  {
    id: "cleansedfeedback",
    companyName: "CleansedFeedback",
    type: "Professional",
    category: ["NLP", "LLM", "Chrome Extension"],
    shortDescription:
      "비난은 제거하고 피드백은 보존하는 AI 기반 댓글 정제 서비스",
  
    websiteLink: "",
    githubLink: "https://github.com/jhhan0208/CleansedFeedback",
  
    techStack: [
      "Python",
      "Flask",
      "Chrome Extension",
      "Selenium",
      "KcELECTRA",
      "Hugging Face",
    ],
  
    startDate: new Date("2001-02-08"),
    endDate: new Date("2001-02-08"),
  
    companyLogoImg: "/timeline/Projects/cleansedFeedback/main.png",
  
    descriptionDetails: {
      paragraphs: [
        "악성 댓글을 단순히 제거하는 것이 아니라, 비난은 제거하고 피드백은 유지하여 창작자에게 도움이 되는 댓글만 제공하는 AI 댓글 정제 서비스입니다.",
      ],
      bullets: [
        "LLM + Fine-tuned NLP 모델 기반 댓글 분류 및 순화 시스템",
      ],
    },
  
    pagesInfoArr: [],
  
    detailBlocks: [
      {
        type: "video",
        src: "https://youtu.be/EaX9uLS-Ggk?si=voMyT3rqJeBzxXkP",
        title: "CleansedFeedback Demo",
      },
  
      {
        type: "skills",
        title: "Tech Stack",
        items: [
          "Python",
          "Flask",
          "Chrome Extension",
          "Selenium",
          "KcELECTRA",
          "Hugging Face",
        ],
      },
  
      {
        type: "heading",
        text: "Description",
      },
  
      {
        type: "paragraphs",
        items: [
          "기존 악성 댓글 연구는 비난을 제거하거나 순화하는 데 집중하여, 창작자에게 필요한 피드백까지 함께 사라지는 문제가 있었습니다.",
          "CleansedFeedback는 댓글을 '중립 / 순수 피드백 / 순수 비난 / 비난 섞인 피드백'의 네 가지 유형으로 분류한 뒤, 비난만 존재하는 댓글은 제거하고 피드백이 포함된 댓글은 GPT를 이용해 비난 표현만 순화하여 제공합니다.",
          "Chrome Extension과 Flask 서버를 이용하여 실제 네이버 웹툰 댓글 페이지에서 동작하는 서비스 형태로 구현했습니다.",
        ],
      },
  
      {
        type: "bullets",
        items: [
          "Chrome Extension 기반 실시간 댓글 정제 서비스 구현",
          "KcELECTRA 기반 비난 분류 모델 활용",
          "GPT-4o를 활용한 자동 데이터 라벨링",
          "KcELECTRA Fine-tuning을 통한 피드백 분류 모델 개발",
          "LLM 기반 댓글 순화(Prompt Engineering)",
          "실제 웹툰 서비스 환경에서 동작하는 End-to-End 파이프라인 구축",
        ],
      },
  
      {
        type: "button",
        label: "View on GitHub",
        href: "https://github.com/jhhan0208/CleansedFeedback",
      },
  
      {
        type: "heading",
        text: "Page Info",
      },
  
      {
        type: "heading",
        text: "Problem Definition",
        level: "h3",
      },

      {
        type: "image",
        src: "/timeline/Projects/cleansedFeedback/문제정의.png",
      },
  
      {
        type: "paragraphs",
        items: [
          "기존 악성 댓글 제거 방식은 건설적인 피드백까지 함께 삭제하여 창작자가 필요한 의견을 놓칠 수 있습니다. 본 프로젝트는 '비난'과 '피드백'을 구분하여 가치 있는 의견만 남기는 것을 목표로 했습니다.",
        ],
      },

      {
        type: "image",
        src: "/timeline/Projects/cleansedFeedback/기존연구.png",
      },

      {
        type: "image",
        src: "/timeline/Projects/cleansedFeedback/기존연구와_비교.png",
      },

      {
        type: "heading",
        text: "System Pipeline",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "Chrome Extension이 현재 웹툰 댓글을 수집하면 Flask 서버에서 비난 여부와 피드백 여부를 각각 분류하고, GPT-4o를 이용해 비난 섞인 피드백 댓글만 순화하여 다시 웹페이지에 표시합니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/cleansedFeedback/파이프라인.png",
      },
  
      {
        type: "heading",
        text: "Dataset Construction",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "공개된 피드백 데이터셋이 존재하지 않아 다양한 평점의 네이버 웹툰 댓글을 직접 수집했습니다. GPT-4o를 활용해 1차 자동 라벨링을 수행하고, 무작위 샘플에 대해 사람 검증(Gold Label)을 진행하여 데이터셋의 신뢰성을 확보했습니다.",
        ],
      },
  
      {
        type: "heading",
        text: "Model Training",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "피드백 데이터 불균형 문제를 해결하기 위해 Down Sampling을 적용했으며, KcELECTRA를 Fine-tuning하여 피드백 분류 모델을 구축했습니다. 이후 Hugging Face에 모델을 배포하여 서비스에서 활용했습니다.",
        ],
      },

      {
        type: "button",
        label: "HuggingFace Link",
        href: "https://huggingface.co/jhhan0208/feedback-classification-kcelectra-v1",
      },
  
      {
        type: "heading",
        text: "Evaluation",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "GPT 라벨링은 Accuracy 약 0.90, F1 약 0.91을 기록했고, Fine-tuned KcELECTRA 모델은 5-Fold Cross Validation 기준 Accuracy 약 0.83, F1 Score 약 0.85를 달성했습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/cleansedFeedback/모델_성능평가.png",
      },
  
      {
        type: "heading",
        text: "Result",
        level: "h3",
      },
  
      {
        type: "paragraphs",
        items: [
          "순수 비난 댓글은 제거되고, 비난 섞인 피드백은 순화된 피드백으로 변경되어 사용자에게 제공됩니다. 이를 통해 창작자는 감정적인 공격 없이 개선에 도움이 되는 의견만 확인할 수 있습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/Projects/cleansedFeedback/결과_웹.png",
      },

      {
        type: "image",
        src: "/timeline/Projects/cleansedFeedback/결과_통계2.png",
      },
  
      {
        type: "heading",
        text: "📄 Project Documents",
        level: "h2",
      },
  
      {
        type: "button",
        label: "Project Presentation",
        href: "/timeline/Projects/cleansedFeedback/소융캡디_발표자료_2차.pdf",
      },
  
      {
        type: "button",
        label: "Paper",
        href: "/timeline/Projects/cleansedFeedback/가논문.pdf",
      },
    ],
  },

  // fertility-rate-analysis
  {
    id: "fertility-rate-analysis",
    companyName: "국가별 지표를 활용한 출산율 분석",
    type: "Personal",
    category: [
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",],
    shortDescription:
      "국가별 사회·경제 지표를 활용해 출산율 관련 요인을 분석하고, 한국과 유사한 국가를 탐색한 머신러닝·통계 분석 프로젝트",

    websiteLink: "",
    githubLink:
      "https://github.com/jhhan0208/Predict_Fertility_Rate-based_on_other_factors",

    techStack: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
    ],

    // 정확한 수행 기간 확인 필요
    startDate: new Date("2024-11-08"),
    endDate: new Date("2024-11-24"),

    companyLogoImg:
      "/timeline/Projects/fertility-rate-analysis/logo2.png",

    descriptionDetails: {
      paragraphs: [
        "경제적 지원 중심의 저출산 정책을 데이터 관점에서 검토하기 위해 국가별 출산율과 사회·경제 지표를 결합하고, 회귀 모델·PCA·K-means·독립표본 t-test를 적용한 데이터 분석 프로젝트입니다.",
      ],
      bullets: [
        "130개 국가의 출산율 및 7개 사회·경제 지표 통합",
        "7개 회귀 모델을 활용한 출산율 예측 성능 비교",
        "PCA를 통한 문해율·의료 수준 변수 통합 및 다중공선성 완화",
        "K-means를 활용한 한국과 유사한 국가 탐색",
        "독립표본 t-test를 통한 GDP 수준별 출산율 차이 분석",
      ],
    },

    pagesInfoArr: [],

    detailBlocks: [
      {
        type: "image",
        src: "/timeline/Projects/fertility-rate-analysis/상단_사진2.png",
        alt: "GDP 상위 국가와 하위 국가의 출산율 분포 비교",
      },
      {
        type: "skills",
        title: "Tech Stack",
        items: [
          "Python",
          "Data Analysis",
          "Machine Learning",
          "Data Visualization",
        ],
      },

      {
        type: "heading",
        text: "Description",
      },
      {
        type: "paragraphs",
        items: [
          "한국의 저출산 문제에 대응하기 위한 정부 정책이 경제적 지원에 집중되어 있다는 점에서 출발하여, 출산율과 관련된 사회·경제적 요인을 데이터로 분석한 개인 프로젝트입니다.",
          "국가별 출산율과 GDP뿐 아니라 비만율, 성비, 문해율, 의료 수준, 부양비, 여성 경제활동 참가율을 결합하여 총 130개 국가의 분석 데이터를 구성했습니다.",
          "분석은 세 가지 가설을 중심으로 진행했습니다. 먼저 여러 회귀 모델을 통해 출산율과 관련성이 높은 요인을 탐색하고, 다음으로 K-means를 이용해 한국과 사회적 조건이 유사한 국가를 찾았습니다. 마지막으로 GDP 수준에 따른 출산율 차이가 통계적으로 나타나는지 독립표본 t-test로 검토했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "서로 다른 출처에서 수집한 8개 국가별 데이터셋 통합",
          "국가명 불일치, 자료형 변환, 결측치와 이상치 처리",
          "상관계수와 VIF를 활용한 독립변수 간 다중공선성 점검",
          "PCA·회귀·앙상블·군집화·가설검정을 결합한 단계별 분석",
          "분석 결과를 바탕으로 경제적 지원 이외의 저출산 정책 방향 제안",
        ],
      },
      {
        type: "button",
        label: "Jupyter Notebook",
        href: "https://github.com/jhhan0208/Predict_Fertility_Rate-based_on_other_factors/blob/main/main.ipynb",
      },

      {
        type: "heading",
        text: "Data Collection & Preprocessing",
      },
      {
        type: "paragraphs",
        items: [
          "출산율에 영향을 줄 가능성이 있는 요인을 폭넓게 비교하기 위해 출산율, GDP, 비만율, 성비, 문해율, 의료 수준, 부양비, 여성 경제활동 참가율 데이터를 수집했습니다.",
          "각 데이터셋은 포함된 국가와 국가명 표기 방식이 달랐기 때문에 공통 국가명을 기준으로 병합하고, 분석에 사용할 수 있도록 수치형 데이터로 변환했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "Listly를 이용해 국가별 지표가 포함된 웹 데이터를 수집하고 Excel 파일로 저장",
          "통화 기호·천 단위 구분자·백분율 기호를 제거하고 데이터를 수치형으로 변환",
          "각기 다른 출처의 데이터셋을 국가명을 기준으로 병합",
          "South Korea·Korea 등 서로 다르게 표기된 국가명을 공통 명칭으로 정규화",
          "결측치가 있는 국가를 제외하고 130개 국가와 8개 속성으로 최종 데이터셋 구성",
          "한국의 낮은 출산율은 데이터 오류가 아닌 분석 가치가 있는 이상치로 판단해 유지",
        ],
      },

      {
        type: "heading",
        text: "Hypothesis 1",
        level: "h2",
      },
      {
        type: "heading",
        text: "출산율과 관련된 사회적 요인은 무엇인가?",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "경제적 요인을 제외한 사회적 지표들이 출산율과 어떤 관계를 보이는지 확인하고, 여러 회귀 모델의 예측 성능과 선형 모델의 계수를 비교하여 주요 변수를 탐색했습니다.",
        ],
      },

      {
        type: "heading",
        text: "Multicollinearity & PCA",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "독립변수 간 상관관계와 VIF를 확인한 결과 문해율과 의료 수준의 상관계수가 약 0.79로 상대적으로 높게 나타났습니다.",
          "두 변수를 그대로 사용하는 대신 PCA를 적용하여 하나의 변수인 literacy_healthcare로 축소했습니다. 첫 번째 주성분은 기존 두 변수 분산의 약 89%를 설명했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "StandardScaler를 이용한 독립변수 표준화",
          "상관계수 히트맵과 VIF를 활용한 다중공선성 점검",
          "문해율과 의료 수준을 하나의 주성분으로 결합",
          "PCA 적용 전후의 독립변수 간 상관관계 비교",
        ],
      },

      {
        type: "heading",
        text: "Regression Model Comparison",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "Linear Regression부터 부스팅 기반 모델까지 총 7개 회귀 모델을 동일한 학습·테스트 데이터에 적용하고 MAE, MSE, RMSE와 R²를 비교했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "LinearRegression·Ridge·Lasso를 활용한 선형 모델 비교",
          "VotingRegressor·BaggingRegressor를 이용한 앙상블 모델 평가",
          "AdaBoostRegressor·GradientBoostingRegressor를 이용한 부스팅 모델 평가",
          "Linear·Ridge·Lasso 회귀계수의 절댓값 평균을 이용해 변수 영향력 비교",
          "노트북의 단일 데이터 분할 실험에서 AdaBoost와 Gradient Boosting이 0.9 이상의 R² 기록",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/fertility-rate-analysis/1.png",
        alt: "출산율 관련 변수의 회귀계수 중요도 분석 결과",
      },
      {
        type: "paragraphs",
        items: [
          "분석 결과 출산율과 관련성이 크게 나타난 변수는 문해율·의료 수준을 결합한 literacy_healthcare와 부양비였습니다.",
          "특히 부양비와 출산율 사이에서 관찰된 관계를 바탕으로, 경제활동인구가 일과 육아를 병행할 때 발생하는 부담을 완화하는 정책이 필요하다는 방향을 제안했습니다.",
        ],
      },

      {
        type: "heading",
        text: "Hypothesis 2",
        level: "h2",
      },
      {
        type: "heading",
        text: "한국과 유사한 상황에 놓인 국가는 어디인가?",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "첫 번째 분석에서 출산율과 관련성이 높게 나타난 의료 수준과 부양비를 기준으로 국가를 군집화하고, 한국과 유사한 지표를 가진 국가를 탐색했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "클러스터 수를 2개부터 5개까지 변경하며 Silhouette Score 비교",
          "Silhouette Score가 가장 높게 나타난 3개 군집을 최종 K값으로 선택",
          "의료 수준과 부양비를 기준으로 K-means 군집화 수행",
          "Pairwise Distance를 이용해 한국과 가까운 국가 탐색",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/fertility-rate-analysis/2.png",
        alt: "의료 수준과 부양비를 기준으로 한 국가별 K-means 군집화 결과",
      },
      {
        type: "paragraphs",
        items: [
          "한국은 의료 수준과 부양비가 상대적으로 높은 군집에 포함되었습니다. 거리 계산 결과 한국과 유사하게 나타난 국가로 이스라엘, 아이슬란드, 룩셈부르크와 아일랜드를 확인했습니다.",
          "이를 통해 단순히 출산율이 높은 국가를 참고하는 대신, 한국과 사회적 조건이 유사한 국가의 육아 지원 및 노동 정책을 비교하는 접근을 제안했습니다.",
        ],
      },

      {
        type: "heading",
        text: "Hypothesis 3",
        level: "h2",
      },
      {
        type: "heading",
        text: "경제력이 높은 국가일수록 출산율도 높은가?",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "경제적 지원 중심의 저출산 정책을 검토하기 위해 국가를 1인당 GDP 순으로 나누고, GDP가 높은 집단과 낮은 집단 사이의 출산율 차이를 독립표본 t-test로 분석했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "159개 국가를 1인당 GDP 순으로 정렬",
          "GDP 상위 80개국과 하위 79개국을 서로 독립적인 표본으로 구성",
          "양측검정과 두 방향의 단측검정을 각각 수행",
          "표본 내에서 GDP가 높은 국가의 출산율이 더 높다는 근거를 확인하지 못함",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/fertility-rate-analysis/3.png",
        alt: "GDP 상위 국가와 하위 국가의 출산율 분포 비교",
      },
      {
        type: "paragraphs",
        items: [
          "분석에서는 GDP가 높은 국가 집단의 출산율이 오히려 낮게 나타나는 경향을 확인했습니다.",
          "이 결과를 바탕으로 경제적 지원을 축소해야 한다고 해석하기보다, 현금성 지원과 함께 육아휴직의 실질적 활용, 보육시설 접근성, 일과 육아의 병행 가능성을 개선하는 정책이 필요하다고 제안했습니다.",
        ],
      },

      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraphs",
        items: [
          "국가별 데이터를 활용한 분석을 통해 저출산 문제가 단일 경제 지표만으로 설명되기 어렵다는 점을 확인했습니다.",
          "회귀 분석에서는 문해율·의료 수준·부양비가 출산율과 관련된 주요 요인으로 나타났고, 군집 분석을 통해 한국과 유사한 사회적 조건을 가진 국가를 탐색했습니다. 통계 검정에서는 높은 GDP가 높은 출산율로 직접 연결되지 않는 경향을 확인했습니다.",
          "이를 바탕으로 저출산 정책은 금전적 지원에만 집중하기보다 경제활동인구가 육아를 병행할 수 있도록 노동·보육 환경을 함께 개선하는 방향으로 확장할 필요가 있다는 결론을 도출했습니다.",
        ],
      },

      {
        type: "heading",
        text: "Limitations & Improvements",
      },
      {
        type: "paragraphs",
        items: [
          "본 프로젝트는 국가 단위의 횡단면 데이터를 활용한 탐색적 분석으로, 변수 사이의 인과관계를 직접 입증하지는 않습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "서로 다른 출처와 조사 시점의 데이터를 결합해 지표 간 기준 연도가 일치하지 않을 가능성",
          "단일 Train·Test Split의 R²만으로 모델의 일반화 성능을 판단하기 어려우므로 교차검증 필요",
          "모델별 하이퍼파라미터 탐색과 반복 실험을 통한 성능 안정성 검증 필요",
          "GDP 상·하위 집단의 등분산 여부를 먼저 검정하고 결과에 따라 Welch t-test를 적용할 필요",
          "국가별 문화·주거·보육 정책처럼 데이터에 포함되지 않은 교란 요인을 추가할 필요",
          "시계열 또는 패널 데이터를 활용해 정책 시행 전후의 변화와 인과관계를 분석할 필요",
        ],
      },

      {
        type: "heading",
        text: "Repository",
      },
      {
        type: "paragraphs",
        items: [
          "저장소에는 전체 분석 과정이 기록된 Jupyter Notebook과 국가별 원본 Excel 데이터, 데이터 출처를 설명하는 참고 이미지가 포함되어 있습니다.",
        ],
      },
      {
        type: "button",
        label: "View on GitHub",
        href: "https://github.com/jhhan0208/Predict_Fertility_Rate-based_on_other_factors",
      },
    ],
  },

  // 2018/19 EPL Data Analysis
  {
    id: "epl-18-19-analysis",
    companyName: "2018/19 EPL 데이터 분석",
    type: "Personal",
    category: [],
    shortDescription:
      "2018/19 EPL 선수·경기·팀 데이터를 활용해 개인 기록, 심판 성향과 팀 성과 요인을 분석한 데이터 시각화 프로젝트",

    websiteLink: "",
    githubLink:
      "https://github.com/jhhan0208/Project_EPL_18_19_analysis",

    techStack: [
      "Python",
      "Data Analysis",
      "Data Visualization",
    ],

    // 저장소에 정확한 수행 기간이 명시되어 있지 않아 placeholder 사용
    startDate: new Date("2024-05-15"),
    endDate: new Date("2024-02-27"),

    companyLogoImg:
      "/timeline/Projects/epl_18_19_analysis/logo.png",

    descriptionDetails: {
      paragraphs: [
        "FootyStats의 2018/19 EPL 데이터를 활용하여 선수 기록 순위, 심판별 카드 성향과 팀 성적에 관련된 지표를 분석하고 시각화한 개인 데이터 분석 프로젝트입니다.",
      ],
      bullets: [
        "선수별 득점·도움·태클 등 주요 기록의 공동 순위 처리 및 출력",
        "심판별 경기당 카드 수를 계산하여 판정 성향 비교",
        "상관계수 히트맵을 활용해 리그 순위와 관련성이 높은 팀 지표 탐색",
        "경기당 승점과 득실 차를 활용한 20개 팀의 시즌 성과 시각화",
      ],
    },

    pagesInfoArr: [],

    detailBlocks: [
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/상단사진.png",
        alt: "상단사진",
      },
      {
        type: "skills",
        title: "Tech Stack",
        items: [
          "Python",
          "Data Analysis",
          "Data Visualization",
        ],
      },

      {
        type: "heading",
        text: "Description",
      },
      {
        type: "paragraphs",
        items: [
          "평소 관심이 있던 축구 데이터를 직접 분석해보기 위해 2018/19 시즌 잉글랜드 프리미어리그를 주제로 선정했습니다.",
          "해당 시즌은 맨체스터 시티와 리버풀이 각각 98점과 97점을 기록하며 우승 경쟁을 펼친 시즌입니다. 선수 개인 기록을 시각화하는 것에서 출발해 심판의 카드 부여 성향과 팀의 리그 성적에 관련된 지표까지 분석 범위를 확장했습니다.",
          "FootyStats에서 제공하는 리그·경기·선수·팀 단위 CSV 데이터를 Pandas로 가공하고, Matplotlib과 Seaborn을 활용해 분석 결과를 시각화했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "선수·경기·팀·리그 단위로 구성된 2018/19 EPL CSV 데이터 활용",
          "분석 목적에 맞는 열 선택, 정렬, 집계 및 파생변수 생성",
          "공동 순위를 반영한 선수 기록 순위표 생성",
          "경기별 카드 데이터를 심판 단위로 집계하여 성향 비교",
          "팀별 지표의 상관계수 분석과 시즌 성과 시각화",
        ],
      },
      {
        type: "button",
        label: "Jupyter Notebook",
        href: "https://github.com/jhhan0208/Project_EPL_18_19_analysis/blob/main/main.ipynb",
      },

      {
        type: "heading",
        text: "Project Goals",
      },
      {
        type: "paragraphs",
        items: [
          "프로젝트는 공식 리그 사이트에서 일반적으로 제공하는 기록 순위를 직접 재현하고, 기존 순위표만으로는 확인하기 어려운 심판과 팀 단위의 특징을 추가로 분석하는 것을 목표로 진행했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "득점·도움·태클·클린시트 등 선수별 기록을 순위표 형태로 재구성",
          "심판별 카드 부여 빈도를 이용해 상대적으로 엄격한 심판 탐색",
          "팀의 최종 리그 순위와 관련성이 높은 공격·수비 지표 분석",
          "맨체스터 시티와 리버풀을 비롯한 20개 팀의 시즌 성과 비교",
        ],
      },

      {
        type: "heading",
        text: "Data Collection",
      },
      {
        type: "paragraphs",
        items: [
          "FootyStats에서 제공하는 2018/19 EPL 데이터를 사용했습니다. 데이터는 분석 단위에 따라 League, Matches, Players, Teams의 네 개 파일로 구성되어 있습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "League CSV: 전체 경기 수와 리그 평균 득점 등 시즌 단위 지표",
          "Matches CSV: 380경기의 홈·원정 팀, 심판, 득점과 카드 기록",
          "Players CSV: 570여 명 선수의 소속 팀, 국적, 포지션과 개인 기록",
          "Teams CSV: 20개 팀의 승점, 득실, 점유율, 슈팅과 클린시트 기록",
        ],
      },
      {
        type: "button",
        label: "FootyStats Dataset",
        href: "https://footystats.org/download-stats-csv",
      },

      {
        type: "heading",
        text: "Player Ranking",
        level: "h2",
      },
      {
        type: "heading",
        text: "선수별 주요 기록 순위표",
        level: "h3",
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/기록순위.png",
        alt: "EPL 공식 사이트의 선수 기록 순위 화면",
      },
      {
        type: "paragraphs",
        items: [
          "EPL 공식 사이트의 통계 페이지를 참고하여 선수 기록을 ‘순위·선수명·소속 클럽·국적·기록’ 형태로 정리했습니다.",
          "어떤 기록 열을 입력하더라도 동일한 형식의 순위표를 생성할 수 있도록 organize_data 함수를 작성했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "선수명·소속 클럽·국적과 분석 대상 기록을 Players 데이터에서 추출",
          "선택한 기록을 기준으로 내림차순 정렬",
          "동일한 기록을 가진 선수에게 같은 순위를 부여하는 공동 순위 로직 구현",
          "함수의 입력 열을 변경해 득점·도움·태클 등 여러 기록에 재사용할 수 있도록 구성",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/내기록순위.png",
        alt: "EPL 공식 사이트의 선수 기록 순위 화면",
      },
      {
        type: "paragraphs",
        items: [
          "득점 기록에 함수를 적용한 결과 사디오 마네, 모하메드 살라와 피에르에메릭 오바메양이 각각 22골로 공동 1위에 해당하는 것을 확인했습니다.",
        ],
      },

      {
        type: "heading",
        text: "Referee Analysis",
        level: "h2",
      },
      {
        type: "heading",
        text: "경기당 카드 수를 활용한 심판 성향 비교",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "심판이 담당한 경기에서 홈·원정 팀에 부여한 옐로카드와 레드카드를 합산하고, 이를 담당 경기 수로 나누어 심판별 경기당 평균 카드 수를 계산했습니다.",
          "경기당 카드 수를 판정 성향을 살펴보기 위한 간단한 대리지표로 사용하여 어떤 심판이 상대적으로 카드를 자주 부여했는지 비교했습니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/산출방식.png",
        alt: "심판별 경기당 카드 수 산출 방식",
      },
      {
        type: "bullets",
        items: [
          "380경기의 심판명과 홈·원정 팀 카드 기록 추출",
          "Dictionary를 활용해 심판별 전체 카드 수와 담당 경기 수 누적",
          "전체 카드 수를 담당 경기 수로 나누어 경기당 평균 카드 수 계산",
          "계산 결과를 DataFrame으로 변환하고 평균 카드 수 기준으로 정렬",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/심판결과.png",
        alt: "Mike Dean의 EPL 통산 레드카드 100장 기록 관련 자료",
        width: 300
      },
      {
        type: "paragraphs",
        items: [
          "분석 결과 Mike Dean이 경기당 약 4.97장으로 가장 높은 카드 수를 기록했습니다. Roger East가 4.40장, Craig Pawson이 약 3.81장으로 뒤를 이었습니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/기사.png",
        alt: "Mike Dean의 EPL 통산 레드카드 100장 기록 관련 자료"
      },
      {
        type: "paragraphs",
        items: [
          "Mike Dean은 EPL에서 최초로 레드카드 100장을 부여한 심판으로 알려져 있어, 데이터에서 나타난 높은 카드 부여 빈도와 실제 심판 성향에 관한 기록을 함께 비교했습니다.",
        ],
      },


      {
        type: "heading",
        text: "Team Performance Analysis",
        level: "h2",
      },
      {
        type: "heading",
        text: "팀의 리그 성과와 관련된 요인 분석",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "맨체스터 시티와 리버풀이 다른 팀보다 높은 성과를 기록한 요인을 살펴보기 위해 리그 순위와 관련성이 있을 것으로 예상되는 팀별 지표를 선정하고 상관계수를 분석했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "리그 순위·경기당 승점·득점·실점·득실 차·클린시트 데이터 선택",
          "평균 점유율·전체 슈팅·유효 슈팅 등 경기력 관련 지표 추가",
          "Seaborn Heatmap을 활용해 변수 간 상관계수 시각화",
          "리그 순위와 실점처럼 낮을수록 좋은 변수를 동일한 방향으로 변환",
        ],
      },

      {
        type: "heading",
        text: "Direction Normalization",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "원래 리그 순위와 실점은 값이 낮을수록 좋은 지표인 반면, 승점·득점·득실 차 등은 높을수록 좋은 지표입니다.",
          "상관계수를 직관적으로 해석할 수 있도록 리그 순위를 ‘20 - 기존 순위’로, 실점을 음수 값으로 변환하여 모든 지표가 높을수록 좋은 성과를 의미하도록 방향을 통일했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "new_league_position = 20 - league_position",
          "new_goals_conceded = -goals_conceded",
          "변환한 지표를 기준으로 상관계수 행렬 재계산",
        ],
      },

      {
        type: "heading",
        text: "Correlation Results",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "변환된 리그 순위와 가장 높은 상관관계를 보인 지표는 경기당 승점과 득실 차였습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "경기당 승점과 변환된 리그 순위의 상관계수: 약 0.954",
          "득실 차와 변환된 리그 순위의 상관계수: 약 0.944",
          "득점과 변환된 리그 순위의 상관계수: 약 0.900",
          "실점 변환값과 변환된 리그 순위의 상관계수: 약 0.906",
        ],
      },
      {
        type: "paragraphs",
        items: [
          "경기당 승점은 리그 순위를 직접 결정하는 누적 승점에서 파생된 지표이므로 높은 상관관계가 자연스럽게 나타납니다. 따라서 실질적인 팀 경기력 비교에서는 공격과 수비 성과를 함께 반영하는 득실 차를 주요 축으로 함께 활용했습니다.",
        ],
      },

      {
        type: "heading",
        text: "Team Performance Map",
        level: "h3",
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/산점도.png",
        alt: "산점도 그래프"
      },
      {
        type: "paragraphs",
        items: [
          "경기당 승점과 득실 차를 각각 좌표축으로 설정하고 20개 팀을 산점도에 배치했습니다. 점의 색상에는 변환된 리그 순위를 반영하여 각 팀의 성과를 한 화면에서 비교할 수 있도록 구성했습니다.",
          "시각화 결과 맨체스터 시티와 리버풀이 다른 팀들과 분리된 최상위 영역에 위치하면서, 해당 시즌의 치열했던 양강 구도가 뚜렷하게 나타났습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "X축: 경기당 승점",
          "Y축: 시즌 득실 차",
          "점의 색상: 최종 리그 순위",
          "각 좌표에 팀명을 표시하여 20개 팀의 상대적 위치 비교",
        ],
      },

      {
        type: "heading",
        text: "Data Interpretation",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "프로젝트를 수행하며 단순히 그래프를 생성하는 것보다 데이터가 수집된 시점과 각 지표의 정확한 정의를 파악하는 과정이 중요하다는 점을 확인했습니다.",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/raw.png",
        alt: "EPL 원본 데이터의 다양한 항목",
      },
      {
        type: "bullets",
        items: [
          "원본 데이터에서 분석에 필요한 열을 선별하고 목적에 맞게 가공하는 데 많은 시간이 필요함을 경험",
          "동일한 명칭의 지표라도 데이터 제공처마다 집계 대상과 정의가 다를 수 있음을 발견",
          "정확한 분석을 위해 데이터의 기준 시점과 메타데이터를 함께 확인해야 한다는 점을 학습",
          "선수 이적 이후 공식 사이트의 현재 소속 팀 정보가 과거 시즌 데이터와 달라질 수 있음을 확인(Ex_ Eden Hazard)",
        ],
      },
      {
        type: "image",
        src: "/timeline/Projects/epl_18_19_analysis/아자르.png",
        alt: "선수 이적에 따라 현재 소속 팀이 변경된 사례",
      },
      {
        type: "heading",
        text: "Limitations & Improvements",
      },
      {
        type: "paragraphs",
        items: [
          "본 프로젝트는 데이터 분석과 시각화의 기초를 익히기 위한 탐색적 분석으로, 상관관계를 특정 요인이 승리의 원인이라는 인과관계로 해석하지 않았습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "경기당 승점은 최종 순위와 직접 연결된 지표이므로 독립적인 경기력 요인으로 해석하기 어려움",
          "리그에 참여한 팀이 20개뿐이므로 상관계수의 안정성을 일반화하기 어려움",
          "심판별 담당 경기 수가 달라 소수 경기만 담당한 심판의 평균값이 크게 변할 수 있음",
          "옐로카드와 레드카드의 가중치를 동일하게 합산하여 카드의 심각도를 반영하지 못함",
          "심판 성향 분석에 경기 강도·더비 여부·팀 반칙 수 등의 변수가 포함되지 않음",
          "팀별 시즌 집계 데이터만 사용해 경기별 변화와 홈·원정 효과를 분석하지 못함",
        ],
      },
      {
        type: "paragraphs",
        items: [
          "향후에는 심판별 최소 담당 경기 수를 설정하고 카드 종류에 가중치를 부여하는 방식으로 성향 지표를 개선할 수 있습니다. 또한 경기 단위 데이터를 활용해 홈·원정, 상대 팀 수준과 경기 시점 등을 포함한 회귀 분석으로 확장할 수 있습니다.",
        ],
      },

      {
        type: "heading",
        text: "What I Learned",
      },
      {
        type: "bullets",
        items: [
          "Pandas를 활용한 CSV 데이터 탐색·정렬·집계 및 파생변수 생성",
          "함수화를 통해 여러 선수 기록에 재사용할 수 있는 순위 처리 로직 구현",
          "Matplotlib과 Seaborn을 활용한 순위표·산점도·히트맵 시각화",
          "상관계수의 방향을 올바르게 해석하기 위한 변수 전처리",
          "데이터의 최신성과 지표 정의가 분석 결과에 미치는 영향 이해",
          "관심 분야의 질문을 데이터 분석 문제로 구체화하고 결과를 해석하는 경험",
        ],
      },

      {
        type: "heading",
        text: "Repository",
        level: "h3",
      },
      {
        type: "paragraphs",
        items: [
          "저장소에는 전체 분석 과정과 해석을 기록한 Jupyter Notebook, 2018/19 시즌의 리그·경기·선수·팀 CSV 데이터 및 참고 이미지가 포함되어 있습니다.",
        ],
      },
      {
        type: "button",
        label: "View on GitHub",
        href: "https://github.com/jhhan0208/Project_EPL_18_19_analysis",
      },
    ],
  },

  // Learning Archive
{
  id: "learning-archive",
  companyName: "Learning Archive",
  type: "Personal",
  category: [],
  shortDescription:
    "데이터베이스·통계·운영체제·딥러닝·3D 데이터처리와 데이터 자격증 학습 내용을 주제별로 정리한 개인 학습 아카이브",

  websiteLink: "",
  githubLink: "https://github.com/jhhan0208",

  techStack: [
    "SQL",
    "Excel",
    "Data Analysis",
    "Machine Learning",
    "Deep Learning",
  ],

  // 학습 기간이 자료별로 다르고 정확한 전체 기간이 명시되지 않아 placeholder 사용
  startDate: new Date("2001-02-08"),
  endDate: new Date("2001-02-08"),

  companyLogoImg:
    "/timeline/Projects/learning_archive/logo.png",

  descriptionDetails: {
    paragraphs: [
      "전공 수업과 개인 학습 과정에서 공부한 데이터베이스·통계·운영체제·딥러닝·3D 데이터처리 및 데이터 자격증 내용을 GitHub와 Notion에 주제별로 정리한 개인 학습 아카이브입니다.",
    ],
    bullets: [
      "Oracle SQL 실습과 데이터베이스 설계 단계 정리",
      "Excel을 활용한 신뢰구간·가설검정·ANOVA·회귀분석 계산 실습",
      "Operating System Concepts를 기반으로 한 운영체제 15개 장 정리",
      "딥러닝 기초 이론·최적화 기법·CNN 논문 및 이미지 분류 실습 정리",
      "카메라 기하·Point Cloud·3D Reconstruction 학습 내용 정리",
      "ADsP·SQLD 개념과 기출문제·오답을 시험 범위별로 정리",
    ],
  },

  pagesInfoArr: [],

  detailBlocks: [

    {
      type: "image",
      src: "/timeline/Projects/learning_archive/logo.png",
      alt: "상단사진",
    },

    {
      type: "skills",
      title: "Learning Areas",
      items: [
        "SQL",
        "Excel",
        "Data Analysis",
        "Machine Learning",
        "Deep Learning",
      ],
    },

    {
      type: "heading",
      text: "Description",
    },
    {
      type: "paragraphs",
      items: [
        "전공 수업과 자격증 준비, 개인 스터디에서 학습한 내용을 일회성 필기로 남기지 않고 이후 프로젝트와 학습에 다시 활용할 수 있도록 정리한 아카이브입니다.",
        "GitHub에는 직접 작성한 코드·실습 파일·PDF 학습 자료를 보관하고, Notion에는 개념 간 연결과 학습 진도, 논문 및 참고자료를 주제별 페이지로 구조화했습니다.",
        "데이터 분석과 AI뿐 아니라 데이터베이스·운영체제·3D 데이터처리 등 개발자로서 필요한 기반 지식을 함께 축적하고 있습니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "개념을 읽는 데서 그치지 않고 SQL·Excel·Python 실습으로 재현",
        "방대한 학습 범위를 주제와 챕터 단위로 분리해 탐색 가능하도록 구성",
        "틀렸거나 헷갈린 내용을 별도로 기록하여 반복 학습에 활용",
        "논문·공식 문서·교재·강의와 실습 결과를 한곳에서 연결",
        "이후 프로젝트에서 필요한 개념을 빠르게 다시 찾을 수 있는 개인 지식 저장소 구축",
      ],
    },

    // {
    //   type: "heading",
    //   text: "Archive Overview",
    // },
    // {
    //   type: "bullets",
    //   items: [
    //     "Database: Oracle SQL 문법 실습 및 데이터베이스 설계",
    //     "Statistics: Excel을 활용한 통계 추정·검정과 회귀분석",
    //     "Computer Science: 프로세스·동시성·메모리·파일 시스템 등 운영체제",
    //     "Artificial Intelligence: 딥러닝 학습 과정과 주요 CNN 논문",
    //     "3D Vision: 카메라 기하·Point Cloud·3D Reconstruction",
    //     "Certification: ADsP와 SQLD 개념·기출·오답 정리",
    //   ],
    // },

    {
      type: "heading",
      text: "Database",
      level: "h2",
    },
    {
      type: "heading",
      text: "Oracle Database Study",
      level: "h3",
    },
    {
      type: "paragraphs",
      items: [
        "Oracle Live SQL을 이용해 관계형 데이터베이스의 기본 문법부터 테이블 생성과 제약조건까지 직접 실행한 SQL 실습 저장소입니다.",
        "SQL 문법 실습 이후에는 데이터베이스를 구축하는 과정을 개념적·논리적·물리적 설계 단계로 나누어 정리했습니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "SELECT 문을 활용한 기본 데이터 조회",
        "WHERE·ORDER BY를 활용한 데이터 제한 및 정렬",
        "문자·숫자·날짜 등 단일 행 함수 사용",
        "여러 테이블의 데이터를 결합하는 JOIN 실습",
        "GROUP BY·HAVING과 집계 함수를 활용한 그룹 분석",
        "단일 행·다중 행 서브쿼리 작성",
        "INSERT·UPDATE·DELETE 등 DML 실습",
        "테이블 생성·수정·삭제와 데이터 타입 설정",
        "Primary Key·Foreign Key·Unique·Not Null 등 제약조건 적용",
        "개념적·논리적·물리적 데이터베이스 설계 과정 정리",
      ],
    },
    {
      type: "paragraphs",
      items: [
        "각 실습 주제에는 SQL 코드뿐 아니라 학습 내용을 점검할 수 있는 질문지를 함께 구성하여 문법의 동작 방식과 사용 목적을 반복해서 확인할 수 있도록 했습니다.",
      ],
    },
    {
      type: "button",
      label: "Oracle Database Study",
      href: "https://github.com/jhhan0208/Study_Oracle_DataBase",
    },

    {
      type: "heading",
      text: "Statistics",
      level: "h2",
    },
    {
      type: "heading",
      text: "Statistical Analysis with Excel",
      level: "h3",
    },
    {
      type: "paragraphs",
      items: [
        "응용통계학에서 다룬 추정과 가설검정 과정을 Excel 수식으로 직접 계산하고, 통계량과 검정 결과가 산출되는 과정을 단계별로 확인한 실습 저장소입니다.",
        "통계 프로그램의 결과를 그대로 사용하는 대신 표본 통계량, 검정통계량, 임계값과 신뢰구간을 직접 계산하며 각 분석 방법의 원리를 학습했습니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "모평균에 대한 양측 신뢰구간 계산",
        "신뢰구간을 활용한 양측 가설검정",
        "단측 가설검정과 임계영역 계산",
        "단일 모집단 비율에 대한 단측 가설검정",
        "Pooled Proportion을 활용한 두 모집단 비율 검정",
        "카이제곱 검정과 기대도수 계산",
        "집단 간 평균 차이를 비교하는 ANOVA Table 작성",
        "표본을 이용한 모수 추정",
        "독립변수와 종속변수 사이의 선형회귀 계산",
      ],
    },
    {
      type: "button",
      label: "Statistical Analysis Study",
      href: "https://github.com/jhhan0208/Study_various_statistical_analysis",
    },

    {
      type: "heading",
      text: "Computer Science",
      level: "h2",
    },
    {
      type: "heading",
      text: "Operating System Study",
      level: "h3",
    },
    {
      type: "paragraphs",
      items: [
        "Operating System Concepts 10판을 바탕으로 운영체제의 주요 개념을 15개 장으로 나누어 정리한 저장소입니다.",
        "교재의 내용을 그대로 옮기기보다 각 개념을 이해하기 쉬운 표현과 사례로 다시 설명하고, 서로 연결되는 주제를 CPU·메모리·I/O 관리 영역으로 묶었습니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "컴퓨터 시스템 구성과 운영체제의 역할",
        "운영체제 서비스·시스템 콜·커널 구조",
        "프로세스 상태·PCB·프로세스 간 통신",
        "스레드와 멀티코어 프로그래밍 및 동시성",
        "CPU 스케줄링 알고리즘과 평가 기준",
        "동기화 도구·동기화 문제와 데드락",
        "메인 메모리 관리와 가상 메모리",
        "대용량 저장장치와 I/O 시스템",
        "파일 시스템 인터페이스·구현·내부 구조",
      ],
    },
    {
      type: "button",
      label: "Operating System Study",
      href: "https://github.com/jhhan0208/Study_Operating-System",
    },

    {
      type: "heading",
      text: "Artificial Intelligence",
      level: "h2",
    },
    {
      type: "heading",
      text: "Deep Learning Notes",
      level: "h3",
    },
    {
      type: "paragraphs",
      items: [
        "딥러닝 모델의 학습 원리와 성능 개선 기법을 강의 단위로 정리하고, 주요 논문과 이미지 분류 실습을 연결한 Notion 학습 페이지입니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "딥러닝의 개념과 전체 학습 파이프라인",
        "Loss Function과 Gradient 기반 학습 원리",
        "Dataset 구성과 Backpropagation",
        "Optimizer·Regularization·Learning Rate 설정",
        "Activation Function별 특징과 선택 기준",
        "논문을 읽고 구조·실험·결과를 정리하는 방법",
        "AlexNet 논문 ‘ImageNet Classification with Deep Convolutional Neural Networks’ 정리",
        "CIFAR-10 이미지 분류 모델 구현 자료 연결",
      ],
    },
    {
      type: "button",
      label: "Deep Learning Notes",
      href: "https://app.notion.com/p/16f0bd7d529e80d8a080f7a090cf41a9#abdefd70d4084248a5e47e1ddee1aa99",
    },

    {
      type: "heading",
      text: "3D Data Processing",
      level: "h2",
    },
    {
      type: "heading",
      text: "3D Vision & Point Cloud Notes",
      level: "h3",
    },
    {
      type: "paragraphs",
      items: [
        "2D 영상으로부터 3차원 공간을 해석하고 재구성하는 과정과 Point Cloud 처리 기법을 강의 주제별로 정리한 Notion 학습 페이지입니다.",
        "카메라의 투영 원리에서 시작해 두 영상의 대응 관계, 3차원 포인트 처리와 여러 이미지로부터 구조를 복원하는 과정까지 단계적으로 구성했습니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "Homography를 활용한 영상 간 평면 변환",
        "RANSAC을 활용한 이상치 제거와 모델 추정",
        "Camera Geometry와 카메라 투영 관계",
        "Stereo Vision을 활용한 깊이 정보 추정",
        "Point Cloud의 구조와 기본 처리 방법",
        "Point Cloud Filtering과 노이즈 제거",
        "3D Descriptor를 활용한 특징 표현",
        "Point Cloud Clustering과 객체 영역 분리",
        "Registration을 활용한 서로 다른 Point Cloud 정합",
        "RGB-D 기반 3D Reconstruction",
        "여러 RGB 영상으로부터 수행하는 3D Reconstruction",
        "Structure from Motion과 Bundle Adjustment",
      ],
    },
    {
      type: "button",
      label: "3D Data Processing Notes",
      href: "https://app.notion.com/p/3D-1ae0bd7d529e807c95aaffaf6c93f23a",
    },

    {
      type: "heading",
      text: "Certification",
      level: "h2",
    },
    {
      type: "heading",
      text: "ADsP Study Notes",
      level: "h3",
    },
    {
      type: "paragraphs",
      items: [
        "ADsP 시험 범위를 데이터 이해·분석 기획·데이터 분석의 세 영역으로 나누고, 강의 진도와 개념 학습 상태를 함께 관리한 Notion 페이지입니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "데이터와 정보의 정의 및 데이터베이스의 특징",
        "데이터 가치와 데이터 사이언스의 역할",
        "분석 과제 정의와 분석 마스터플랜 수립",
        "분석 거버넌스와 분석 조직·성숙도",
        "기초 통계·확률분포·추정과 가설검정",
        "회귀분석·분산분석·다변량 분석",
        "데이터 마이닝과 분류·군집 분석",
        "시험에 등장하는 주요 R 스크립트와 실행 결과 해석",
      ],
    },
    {
      type: "paragraphs",
      items: [
        "각 파트의 학습 범위와 진도를 표로 관리하고, 강령과 Part 1·2·3 세부 페이지를 통해 개념을 시험 영역별로 다시 확인할 수 있도록 구성했습니다.",
      ],
    },
    {
      type: "button",
      label: "ADsP Study Notes",
      href: "https://app.notion.com/p/ADSP-3640bd7d529e80999c32ffe1300a4dca",
    },

    {
      type: "heading",
      text: "SQLD Study Notes",
      level: "h3",
    },
    {
      type: "paragraphs",
      items: [
        "SQLD 자격증 준비 과정에서 데이터 모델링과 SQL 문법을 시험 범위별로 정리하고, 기출문제와 오답을 반복 학습할 수 있도록 구성한 Notion 페이지입니다.",
      ],
    },
    {
      type: "bullets",
      items: [
        "엔터티·속성·관계와 데이터 모델링의 이해",
        "정규화·반정규화와 데이터 모델의 성능",
        "데이터 모델과 SQL의 관계",
        "SELECT·WHERE·GROUP BY·HAVING 등 SQL 기본 문법",
        "JOIN·서브쿼리·집합 연산자·윈도우 함수 등 SQL 활용",
        "DML·TCL·DDL·DCL 등 관리 구문",
        "59회·60회 기출문제 풀이 및 핵심 내용 정리",
        "개념 부족·암기 부족·고난도 문제를 유형별로 분리한 오답 관리",
        "다시 풀어 정답을 맞힌 문제와 반복 학습이 필요한 문제 구분",
      ],
    },
    {
      type: "paragraphs",
      items: [
        "개념 정리에는 기출문제에서 반복적으로 출제된 내용을 별도로 표시하고, 암기가 부족한 내용과 헷갈리는 문제를 분리해 시험 직전에 우선순위별로 복습할 수 있도록 했습니다.",
      ],
    },
    {
      type: "button",
      label: "SQLD Study Notes",
      href: "https://app.notion.com/p/SQLD-36c0bd7d529e806894d0dc190c01315e",
    },

    {
      type: "heading",
      text: "Repository Links",
    },
    {
      type: "button",
      label: "Oracle Database Study",
      href: "https://github.com/jhhan0208/Study_Oracle_DataBase",
    },
    {
      type: "button",
      label: "Statistical Analysis Study",
      href: "https://github.com/jhhan0208/Study_various_statistical_analysis",
    },
    {
      type: "button",
      label: "Operating System Study",
      href: "https://github.com/jhhan0208/Study_Operating-System",
    },
    {
      type: "button",
      label: "Deep Learning Notes",
      href: "https://app.notion.com/p/16f0bd7d529e80d8a080f7a090cf41a9#abdefd70d4084248a5e47e1ddee1aa99",
    },
    {
      type: "button",
      label: "3D Data Processing Notes",
      href: "https://app.notion.com/p/3D-1ae0bd7d529e807c95aaffaf6c93f23a",
    },
    {
      type: "button",
      label: "ADsP Study Notes",
      href: "https://app.notion.com/p/ADSP-3640bd7d529e80999c32ffe1300a4dca",
    },
    {
      type: "button",
      label: "SQLD Study Notes",
      href: "https://app.notion.com/p/SQLD-36c0bd7d529e806894d0dc190c01315e",
    },
  ],
},
];

export const featuredProjects = Projects.slice(0, 3);
