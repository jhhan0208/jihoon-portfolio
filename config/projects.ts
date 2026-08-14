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
    companyName: "TermCorrector",
    type: "Professional",
    category: ["AI", "Speech Recognition", "Web Service"],
    shortDescription:
      "강의 녹음(STT)에서 잘못 인식된 영문 전문 용어를 자동으로 교정하는 AI 기반 학습 지원 서비스",
    websiteLink: "",
    githubLink: "https://github.com/jhhan0208/TermCorrector",
    techStack: ["Python", "Flask", "Whisper", "FastText"],
    startDate: new Date("2024-09-06"),
    endDate: new Date("2024-11-22"),
    companyLogoImg: "/timeline/project/termcorrector/logo.png",
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
        src: "/timeline/project/termcorrector/intro.png",
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
        src: "/timeline/project/termcorrector/main-page.png",
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
        src: "/timeline/project/termcorrector/architecture.png",
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
        src: "/timeline/project/termcorrector/correction-flow.png",
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
        src: "/timeline/project/termcorrector/result-page.png",
      },
      {
        type: "image",
        src: "/timeline/project/termcorrector/result-detail.png",
      },
      { type: "heading", text: "📄 Poster & Publication", level: "h2" },
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
        src: "/timeline/project/termcorrector/KCC2025poster.png",
      },
      {
        type: "button",
        label: "TermCorrector: Speech-to-Text(STT)에서의 영문 용어 교정 서비스",
        href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318661",
      },
      {
        type: "button",
        label: "논문 PDF 보기",
        href: "/timeline/project/termcorrector/TermCorrector_논문.pdf",
      },
      {
        type: "button",
        label: "논문 포스터 보기",
        href: "/timeline/project/termcorrector/TermCorrector_포스터.pdf",
      },
      { type: "heading", text: "🏆 Awards", level: "h2" },
      {
        type: "button",
        label: "2024 경희대학교 Swcon Conference 우수상",
        href: "/timeline/project/termcorrector/SW_컨퍼런스_우수상.pdf",
      },
      {
        type: "button",
        label: "KCC 2025 학부생부문 최우수상",
        href: "/timeline/project/termcorrector/TermCorrector 최우수상.pdf",
      },
    ],
  },

  // seecode
  {
    id: "seecode",
    companyName: "SeeCode",
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
  
    companyLogoImg: "/timeline/project/seecode/logo.png",
  
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
        src: "/timeline/project/seecode/문제정의.png",
      },

      {
        type: "paragraphs",
        items: [
          "국내 모바일 앱과 SW중심대학 통합앱을 조사한 결과 접근성 부족 문제가 광범위하게 존재함을 확인했습니다.",
        ],
      },
  
      {
        type: "image",
        src: "/timeline/project/seecode/학교문제.png",
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
        src: "/timeline/project/seecode/architecture.png",
      },

      {
        type: "image",
        src: "/timeline/project/seecode/architecture2.png",
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
        src: "/timeline/project/seecode/logo.png",
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
        src: "/timeline/project/seecode/code-suggestion.png",
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
        src: "/timeline/project/seecode/result1.png",
      },
      {
        type: "image",
        src: "/timeline/project/seecode/result2.png",
      },
  
      {
        type: "heading",
        text: "📄 Poster & Publication",
        level: "h2",
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
        href: "/timeline/project/seecode/seecode_논문.pdf",
      },
  
      {
        type: "button",
        label: "논문 포스터 보기",
        href: "/timeline/project/seecode/seecode_포스터.pdf",
      },
  
      {
        type: "heading",
        text: "🏆 Awards & Exhibition",
        level: "h2",
      },
  
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
        href: "/timeline/project/seecode/seecode_수상확인서.pdf",
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
  
    companyLogoImg: "/timeline/project/woodjudge/logo.png",
  
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
        src: "/timeline/project/woodjudge/problem.png",
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
        src: "/timeline/project/woodjudge/woodjudge_파이프라인.png",
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
        src: "/timeline/project/woodjudge/프롬프트.png",
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
        src: "/timeline/project/woodjudge/retrieval.png",
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
        src: "/timeline/project/woodjudge/evaluation.png",
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
        src: "/timeline/project/woodjudge/result.png",
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
        href: "/timeline/project/woodjudge/woodjudge_ppt.pdf",
      },
  
      {
        type: "button",
        label: "프로젝트 기획서",
        href: "/timeline/project/woodjudge/woodjudge_계획서.pdf",
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
  
    companyLogoImg: "/timeline/project/cleansedFeedback/main.png",
  
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
        src: "/timeline/project/cleansedFeedback/문제정의.png",
      },
  
      {
        type: "paragraphs",
        items: [
          "기존 악성 댓글 제거 방식은 건설적인 피드백까지 함께 삭제하여 창작자가 필요한 의견을 놓칠 수 있습니다. 본 프로젝트는 '비난'과 '피드백'을 구분하여 가치 있는 의견만 남기는 것을 목표로 했습니다.",
        ],
      },

      {
        type: "image",
        src: "/timeline/project/cleansedFeedback/기존연구.png",
      },

      {
        type: "image",
        src: "/timeline/project/cleansedFeedback/기존연구와_비교.png",
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
        src: "/timeline/project/cleansedFeedback/파이프라인.png",
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
        src: "/timeline/project/cleansedFeedback/모델_성능평가.png",
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
        src: "/timeline/project/cleansedFeedback/결과_웹.png",
      },

      {
        type: "image",
        src: "/timeline/project/cleansedFeedback/결과_통계2.png",
      },
  
      {
        type: "heading",
        text: "📄 Project Documents",
        level: "h2",
      },
  
      {
        type: "button",
        label: "Project Presentation",
        href: "/timeline/project/cleansedFeedback/소융캡디_발표자료_2차.pdf",
      },
  
      {
        type: "button",
        label: "Paper",
        href: "/timeline/project/cleansedFeedback/가논문.pdf",
      },
    ],
  },
];

export const featuredProjects = Projects.slice(0, 3);
