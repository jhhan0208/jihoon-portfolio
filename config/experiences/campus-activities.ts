import type { ExperienceInterface } from "../experience";

export const campusActivityExperiences: ExperienceInterface[] = [
  // SW 멘토
  {
    id: "sw-mentor",
    type: "Campus Activities",
    position: "2025년 1학기 KHU SW 멘토",
    company: "Kyung Hee University",
    location: "",
    startDate: new Date("2025-03-17"),
    endDate: new Date("2025-06-23"),
    description: [
      "경희대학교 박상근 교수님의 제안을 받아 응용데이터분석 과목의 SW 멘토로 활동하며 데이터 분석 및 머신러닝 수업 자료 개발과 수업 운영을 지원했습니다.",
    ],
    achievements: [
      "회귀·분류·데이터 증강·클러스터링·시계열 분석 관련 논문 조사 및 교육 자료 제작",
      "토론형 질문과 사례 데이터셋을 활용한 수업 개선사항 제안",
      "중간·기말고사 시험감독 및 수업 보조 업무 수행",
    ],
    skills: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Technical Research",
    ],
    companyUrl: "https://www.khu.ac.kr",
    logo: "/timeline/Campus Activities/sw_mentor/kyunghee-logo.png",
    detailLayout: "rich",
    category: [],
    detailBlocks: [
      { type: "image", src: "/timeline/Campus Activities/sw_mentor/sw-mentor_3.png" },
      {
        type: "button",
        label: "모집공고 링크",
        href: "https://swedu.khu.ac.kr/bbs/board.php?bo_table=07_01&wr_id=2415&sfl=wr_subject&stx=%EB%A9%98%ED%86%A0&sop=and",
      },
      {
        type: "button",
        label: "최종 활동보고서",
        href: "/timeline/Campus Activities/sw_mentor/sw-mentor_2.pdf",
      },
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "경희대학교 박상근 교수님의 제안을 받아 2025년 1학기 응용데이터분석 과목의 SW 멘토로 활동했습니다.",
          "학생들이 데이터 분석과 머신러닝 개념을 실제 사례와 함께 이해할 수 있도록 수업 교재 개발, 교육 자료 조사 및 수업 운영을 지원했습니다.",
        ],
      },
      {
        type: "paragraphs",
        items: [""],
      },
      { type: "heading", text: "수업 방향 및 교육 자료 개선" },
      {
        type: "bullets",
        items: [
          "Precision과 Recall처럼 분석 목적에 따라 판단이 달라지는 개념을 다양한 사례에 적용해보는 토론형 질문 제안",
          "ROC Curve와 AUC 등 강의에서 다룬 개념을 단순 계산에 그치지 않고 모델의 성능과 연결해 해석할 수 있도록 응용 문제 구상",
          "기존 강의자료와 퀴즈를 검토하고, 학생들의 개념 이해와 결과 해석을 유도할 수 있는 수업 개선사항 제시",
        ],
      },
      { type: "heading", text: "논문 조사 및 수업 참고자료 제작" },
      {
        type: "paragraphs",
        items: [
          "간단한 데이터 분석 기법이 실제 연구에 어떻게 활용되는지 보여주기 위해 관련 학부생 논문을 조사하고, 수업에 활용할 수 있는 내용을 중심으로 정리했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "회귀·분류·시계열 분석 관련 논문을 조사하고 모델, 분석 방법, 평가 지표와 주요 결과 정리",
          "데이터 증강과 클러스터링 기법이 실제 연구에 활용된 사례를 조사하여 핵심 내용 요약",
          "저출산 데이터 분석 프로젝트와 데이터 분석가 지원서 작성 요령 등 수업 보조자료 준비",
        ],
      },
      {
        type: "button",
        label: "회귀 관련 논문 정리",
        href: "https://app.notion.com/p/SW-1-3bd0bd7d529e8066b20fed46b00f73ab",
      },
      {
        type: "button",
        label: "분류 관련 논문 정리",
        href: "https://app.notion.com/p/SW-2-3bd0bd7d529e80dcbbc7c752051e4913",
      },
      {
        type: "button",
        label: "데이터 증강·클러스터링 관련 논문 정리",
        href: "https://app.notion.com/p/SW-3-3bd0bd7d529e80f3a03cd038595ceca3",
      },
      {
        type: "button",
        label: "시계열 관련 논문 정리",
        href: "https://app.notion.com/p/SW-4-3bd0bd7d529e80a18496fca756934e8a",
      },
      { type: "heading", text: "수업 운영 지원" },
      {
        type: "bullets",
        items: [
          "주차별 강의 진행에 필요한 교재와 수업 보조자료 준비",
          "응용데이터분석 과목의 중간고사와 기말고사 시험감독에 참여",
          "담당 교수 및 다른 멘토들과 수업 운영 방향과 개선사항 논의",
        ],
      },
    ],
  },

  // KHUDA 7기
  {
    id: "khuda-7th",
    type: "Campus Activities",
    position: "KHUDA 7기 NLP 트랙 🏆",
    company: "KHUDA",
    location: "Kyung Hee University",
    startDate: new Date("2025-01-10"),
    endDate: new Date("2025-07-09"),
    description: [
      "경희대학교 데이터분석·AI 중앙동아리 KHUDA 7기의 NLP 트랙원으로 활동하며, 방학/학기 세션을 통해 NLP 이론을 학습하고 관련 프로젝트를 수행했습니다.",
    ],
    achievements: [
      "방학 심화 세션에서 머신러닝·딥러닝 핵심 개념 학습 및 3주차 발제 진행",
      "맞춤법 학습을 위한 단계별 퀴즈 서비스 ‘나랏말싸미’ 개발",
      "학기 NLP 세션에서 Transformer·LLM·RAG 관련 이론 학습 및 과제 수행",
      "판례 검색과 답변 생성을 결합한 법률 RAG 서비스 ‘WoodJudge’ 개발",
    ],
    skills: [
      "Python",
      "Natural Language Processing",
      "Machine Learning",
      "Large Language Models",
      "RAG",
      "LangChain",
    ],
    companyUrl: "https://www.khuda.co.kr/",
    logo: "/timeline/Campus Activities/khuda-7th/khuda-7th.png",
    detailLayout: "rich",
    category: [],
    detailBlocks: [
      { type: "image", src: "/timeline/Campus Activities/khuda-7th/상단사진.png" },
      {
        type: "button",
        label: "KHUDA 공식 홈페이지",
        href: "https://www.khuda.co.kr/",
      },
      {
        type: "button",
        label: "KHUDA 7기 노션",
        href: "https://app.notion.com/p/khuda7/KHUDA-7th-AI-KHUDA-17778008bf5880a7b78fe2c880a07b9f",
      },
      {
        type: "button",
        label: "KHUDA 7기 수료증",
        href: "/timeline/Campus Activities/khuda-7th/KHUDA_7기_수료증.pdf",
      },
  
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "경희대학교 데이터분석·AI 중앙동아리 KHUDA 7기에서 NLP 트랙원으로 활동했습니다.",
          "방학에는 머신러닝과 딥러닝의 기반 개념을 학습하고 발제와 토이 프로젝트를 진행했으며, 학기 중에는 자연어 처리와 LLM 관련 내용을 심화 학습한 뒤 이를 법률 도메인에 적용한 RAG 프로젝트를 수행했습니다.",
        ],
      },
  
      { type: "heading", text: "방학 심화 세션" },
      { type: "image", src: "/timeline/Campus Activities/khuda-7th/방학세션.png" },
      {
        type: "paragraphs",
        items: [
          "주차별 학습 자료와 실습 코드를 바탕으로 머신러닝·딥러닝의 핵심 개념을 정리하고, 세션 구성원들과 발표 및 질의응답을 진행했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "머신러닝과 딥러닝의 주요 개념을 학습하고 주차별 내용을 코드와 함께 정리",
          "3주차 세션 발제를 담당하여 학습 내용을 구조화하고 발표 자료 준비",
          "세션에서 다룬 이론을 토이 프로젝트에 적용하며 데이터 전처리부터 모델 활용까지의 흐름 경험",
        ],
      },
      {
        type: "button",
        label: "3주차 발제 자료",
        href: "https://app.notion.com/p/KHUDA-3-02-05-17f0bd7d529e80bda290ea8442a30b7c?pvs=25",
      },
      {
        type: "button",
        label: "방학 학습 정리 GitHub",
        href: "https://github.com/jhhan0208/KHUDA-7TH/tree/main/%ED%95%9C%EC%A7%80%ED%9B%88",
      },
  
      { type: "heading", text: "토이 프로젝트: 나랏말싸미" },
      { type: "image", src: "/timeline/Campus Activities/khuda-7th/나랏말싸미_시연.png" },
      {
        type: "paragraphs",
        items: [
          "방학 세션에서 학습한 내용을 활용해 사용자가 문장 속 맞춤법 오류를 단계별 퀴즈로 학습할 수 있는 서비스 ‘나랏말싸미’를 개발했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "여러 맞춤법 검사 API와 형태소 분석·문장 분리 도구를 비교하고 데이터 생성 과정에 활용",
          "약 1,000개의 초기 문항을 검토·가공하여 1,296개의 맞춤법 퀴즈 데이터셋 구축",
          "문항을 난이도 1~5단계로 분류하고 단계별 데이터 분포가 균형을 이루도록 구성",
          "팀 프로젝트를 통해 데이터 수집·정제와 NLP 기반 서비스 구현 과정을 경험",
        ],
      },
      {
        type: "button",
        label: "나랏말싸미 프로젝트 노션",
        href: "https://app.notion.com/p/khuda7/1-c07e860602ad40a5adfbef69f44073a1",
      },
      {
        type: "button",
        label: "나랏말싸미 GitHub",
        href: "https://github.com/jhhan0208/KHUDA-7TH-TOYPROJECT",
      },
      {
        type: "button",
        label: "나랏말싸미 발표 PPT",
        href: "/timeline/Campus Activities/khuda-7th/toyproject_ML심화_PPT.pdf",
      },
      { type: "heading", text: "🏆 Awards", level: "h2", id: "awards" },
      {
        type: "button",
        label: "2025 KHUDA 7기 토이프로젝트 컨퍼런스 특별상",
        href: "/timeline/Projects/나랏말싸미/KHUDA_컨퍼런스_특별상.pdf",
      },
  
      { type: "heading", text: "학기 NLP 세션" },
      {
        type: "paragraphs",
        items: [
          "학기 중에는 NLP 트랙에서 자연어 처리 모델의 발전 과정과 Transformer·LLM 관련 개념을 학습하고, 매주 실습과 과제를 통해 주요 모델의 구조와 활용 방법을 익혔습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "자연어 처리의 기본적인 전처리와 임베딩부터 Transformer 기반 모델까지 단계적으로 학습",
          "LLM의 구조와 학습·추론 방식을 공부하고 관련 구현 과제 수행",
          "검색 증강 생성과 벡터 데이터베이스 등 LLM 기반 서비스 개발에 필요한 기술 탐구",
          "세션 학습 내용을 정리하고 코드로 구현하여 별도의 GitHub 저장소로 관리",
        ],
      },
      {
        type: "button",
        label: "학기 NLP 세션 노션",
        href: "https://app.notion.com/p/khuda7/19778008bf5880e4adcdfd737fe1ec6c",
      },
      {
        type: "button",
        label: "NLP 세션 과제 GitHub",
        href: "https://github.com/jhhan0208/LLM101n",
      },
  
      { type: "heading", text: "심화 프로젝트: WoodJudge" },
      { type: "image", src: "/timeline/Campus Activities/khuda-7th/logo.png" },
      {
        type: "paragraphs",
        items: [
          "학기 NLP 세션에서 학습한 LLM과 RAG 기술을 실제 문제에 적용하기 위해, 사용자의 법률 질문과 유사한 판례를 검색하고 이를 근거로 답변을 생성하는 서비스 ‘WoodJudge’를 개발했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "판례 데이터를 사건 유형별로 분류하고 검색 가능한 벡터 데이터베이스로 구축",
          "OpenAI Embeddings와 Chroma를 활용해 사용자 질문과 유사한 판례를 검색하는 파이프라인 구현",
          "검색된 판례를 LLM 프롬프트에 결합하여 근거 기반 답변을 생성하는 RAG 구조 설계",
          "Ragas를 활용한 검색·생성 결과의 정량적 평가 방법 검토",
        ],
      },
      {
        type: "button",
        label: "WoodJudge GitHub",
        href: "https://github.com/jhhan0208/WoodJudge",
      },
      {
        type: "button",
        label: "WoodJudge 소개 페이지",
        href: "",
      },
    ],
  },

  // 스터디그룹+
  {
    id: "study-group-plus",
    type: "Campus Activities",
    position: "2025년 1학기 스터디그룹+ 자유스터디",
    company: "Kyung Hee University",
    location: "",
    startDate: new Date("2025-03-25"),
    endDate: new Date("2025-05-26"),
    description: [
      "경희대학교 교수학습개발원의 스터디그룹+ 프로그램에 참여하여 KHUDA 팀원들과 딥러닝/자연어 처리를 주제로 6회차 이론 학습/코드 실습을 진행했습니다.",
    ],
    achievements: [
      "MLP와 신경망 최적화부터 Transformer·GPT까지 단계적으로 학습",
      "임베딩·초기화·활성화 함수·Batch Normalization·Residual Connection을 코드 중심으로 탐구",
      "Transformer 핵심 구조를 분석하고 Tiny Shakespeare 데이터셋 기반 GPT 학습 과정 실습",
      "회차별 실습 코드 작성·과제 검토·활동보고서 작성 및 스터디 운영 참여",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Natural Language Processing",
      "Transformer",
      "Large Language Models",
    ],
    companyUrl: "https://www.khu.ac.kr",
    logo: "/timeline/Campus Activities/study_group_plus/kyunghee-logo.png",
    detailLayout: "rich",
    category: [],
    detailBlocks: [
      {
        type: "image",
        src: "/timeline/Campus Activities/study_group_plus/윗사진.png",
      },
      {
        type: "button",
        label: "스터디그룹+ 이수증",
        href: "/timeline/Campus Activities/study_group_plus/스터디그룹_이수증.pdf",
      },
      {
        type: "button",
        label: "최종 활동보고서",
        href: "/timeline/Campus Activities/study_group_plus/활동보고서/[자유][KHUDA]_2025-1학기_스터디그룹__최종_보고서.pdf",
      },
  
      { type: "heading", text: "Description" },
      {
        type: "paragraphs",
        items: [
          "경희대학교 교수학습개발원의 2025학년도 1학기 스터디그룹+ 프로그램에 자유스터디 유형으로 참여했습니다.",
          "KHUDA 구성원 5명과 함께 ‘딥러닝과 자연어 처리’를 주제로 총 6회의 온라인 스터디를 진행했습니다. Andrej Karpathy의 Neural Networks: Zero to Hero 강의를 바탕으로 신경망의 기초부터 Transformer와 GPT의 학습 구조까지 이론과 코드 실습을 병행했습니다.",
          "각 회차에는 이론 발제, 실습 코드 작성, 과제 풀이와 검토, 최신 기술 조사 등의 역할을 분담하고 학습 내용을 활동보고서로 정리했습니다.",
        ],
      },
  
      { type: "heading", text: "학습 목표 및 진행 방식" },
      {
        type: "bullets",
        items: [
          "이론 중심의 학습을 넘어 PyTorch를 활용해 신경망과 언어 모델의 주요 구성 요소를 직접 구현",
          "MLP부터 Transformer와 GPT까지 모델 구조가 발전하는 과정을 단계적으로 학습",
          "주차별 실습과 과제를 통해 초기화, 활성화 함수, 정규화, 잔차 연결과 Attention의 역할 확인",
          "팀원 간 코드 리뷰와 피드백을 통해 구현 과정에서 발생한 문제와 개선 방법 공유",
        ],
      },
  
      { type: "heading", text: "1회차: Multi-Layer Perceptrons" },
      {
        type: "paragraphs",
        items: [
          "통계적 언어 모델의 한계와 신경망 기반 언어 모델의 필요성을 살펴보고, Word Embedding과 MLP를 활용한 언어 모델의 기본 구조를 학습했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "Context size가 증가할 때 조건부 확률 기반 접근의 계산량이 급증하는 문제 분석",
          "One-hot Encoding 대신 저차원 공간에 정보를 표현하는 Word Embedding 학습",
          "입력 토큰의 임베딩 벡터를 결합하여 다음 토큰을 예측하는 MLP 구조 실습",
          "1회차 실습 코드를 작성하고 풀이하는 역할 수행",
        ],
      },
      {
        type: "button",
        label: "1차 활동보고서",
        href: "/timeline/Campus Activities/study_group_plus/활동보고서/[KHUDA] 2025-1학기 자유스터디 활동보고서(1차).pdf",
      },
  
      { type: "heading", text: "2~3회차: 신경망 학습 안정화" },
      {
        type: "paragraphs",
        items: [
          "신경망의 깊이가 증가하면서 발생하는 초기 손실, 포화와 기울기 소실 문제를 살펴보고, 모델을 안정적으로 학습시키기 위한 핵심 기법을 학습했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "초기 Logit과 Loss를 분석하고 적절한 가중치 초기화가 학습에 미치는 영향 확인",
          "Tanh의 포화와 Dead Neuron, Vanishing Gradient 문제 분석",
          "Kaiming Initialization을 적용하여 레이어별 출력 분포와 기울기 안정화",
          "Batch Normalization과 Residual Connection이 학습 안정성과 일반화 성능에 미치는 영향 분석",
          "Train·Validation Loss와 Gradient-to-Weight 비율을 활용한 학습률 및 과적합 점검",
        ],
      },
      {
        type: "button",
        label: "2차 활동보고서",
        href: "/timeline/Campus Activities/study_group_plus/활동보고서/[KHUDA] 2025-1학기 자유스터디 활동보고서(2차).pdf",
      },
      {
        type: "button",
        label: "3차 활동보고서",
        href: "/timeline/Campus Activities/study_group_plus/활동보고서/[KHUDA] 2025-1학기 자유스터디 활동보고서(3차).pdf",
      },
  
      { type: "heading", text: "4회차: LLM Optimization" },
      {
        type: "paragraphs",
        items: [
          "LLM의 성능을 개선하거나 특정 목적에 맞게 활용하기 위한 Prompt Engineering, RAG, Fine-tuning 접근법의 구조와 장단점을 비교했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "Pre-training과 Fine-tuning으로 이어지는 LLM 학습 및 최적화 과정 정리",
          "파라미터 변경 없이 모델의 출력을 조정하는 Prompt Engineering의 활용 방법 분석",
          "외부 지식을 검색해 생성 과정에 결합하는 RAG의 원리와 할루시네이션 감소 효과 학습",
          "Fine-tuning에 필요한 데이터와 하드웨어 자원 및 Hugging Face·W&B 등의 관련 도구 조사",
          "이전 회차 과제를 풀이하고 학습 내용을 복습하는 역할 수행",
        ],
      },
      {
        type: "button",
        label: "4차 활동보고서",
        href: "/timeline/Campus Activities/study_group_plus/활동보고서/[KHUDA] 2025-1학기 자유스터디 활동보고서(4차).pdf",
      },
  
      { type: "heading", text: "5회차: Complex Architectures & Transformers" },
      {
        type: "paragraphs",
        items: [
          "N-gram과 신경망 언어 모델부터 RNN·CNN을 거쳐 Transformer가 등장하기까지의 발전 과정을 살펴보고, Transformer의 핵심 구조와 최신 개선 방향을 학습했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "통계적 언어 모델과 초기 신경망 언어 모델의 Context Size 한계 비교",
          "RNN의 순차 처리와 장기 의존성 문제, CNN의 제한적인 장거리 관계 학습 문제 분석",
          "Self-Attention, Multi-Head Attention, Positional Encoding 및 Residual Connection 구조 학습",
          "Pre-Norm, SwiGLU, Multi-Query·Grouped-Query Attention 등 Transformer의 발전 방향 조사",
          "Transformer의 동작을 확인할 수 있는 5회차 예제 코드를 작성하고 풀이",
        ],
      },
      {
        type: "button",
        label: "5차 활동보고서",
        href: "/timeline/Campus Activities/study_group_plus/활동보고서/[KHUDA] 2025-1학기 자유스터디 활동보고서(5차).pdf",
      },
  
      { type: "heading", text: "6회차: Building a GPT" },
      {
        type: "paragraphs",
        items: [
          "Tiny Shakespeare 데이터셋을 활용하여 문자 단위 언어 모델의 데이터 전처리와 입력 시퀀스 생성 과정을 구현하고, GPT 학습 파이프라인의 전체 흐름을 실습했습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "문자와 정수 인덱스를 변환하는 stoi·itos 구조를 구현하여 토크나이징 과정 학습",
          "고정 길이 입력 시퀀스와 배치를 생성하고 다음 문자를 예측하기 위한 학습 데이터 구성",
          "Self-Attention, Multi-Head Attention과 Positional Encoding을 통한 모델 확장 방법 탐구",
          "Regularization을 비롯한 언어 모델의 성능 및 일반화 개선 요소 학습",
          "지난 회차의 스터디 과제를 검토하고 팀원들과 풀이 및 개선 방향 공유",
        ],
      },
      {
        type: "button",
        label: "6차 활동보고서",
        href: "/timeline/Campus Activities/study_group_plus/활동보고서/[KHUDA] 2025-1학기 자유스터디 활동보고서(6차).pdf",
      },
  
      { type: "heading", text: "활동 성과 및 역할" },
      {
        type: "paragraphs",
        items: [
          "스터디를 통해 LLM을 서비스로 사용하는 수준을 넘어, 언어 모델의 구성 요소와 학습 과정을 코드 단위에서 이해하는 경험을 쌓았습니다.",
        ],
      },
      {
        type: "bullets",
        items: [
          "MLP에서 Transformer와 GPT로 이어지는 신경망 기반 언어 모델의 발전 과정을 체계적으로 학습",
          "임베딩, 초기화, 활성화 함수, 정규화와 잔차 연결 등 모델 학습의 핵심 요소를 실습",
          "1·5회차 예제 코드 작성 및 풀이, 4회차 과제 풀이, 6회차 과제 리뷰 수행",
          "2회차 스터디 일정 조율·공지 및 활동보고서 작성, 3회차 과제 안내 담당",
          "총 6회, 12시간의 스터디 활동을 완료하고 경희대학교 교수학습개발원 자유스터디 과정 이수",
        ],
      },
    ],
  },
];
