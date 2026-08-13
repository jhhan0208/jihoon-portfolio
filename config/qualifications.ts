export interface LanguageScore {
  name: string;
  score: string;
  detail?: string;
  issuer?: string;
  issuerUrl?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  issuerUrl?: string;
  date?: string;
}

export const languageSectionDescription =
  "Scores regarding my English proficiency.";

export const certificationsSectionDescription =
  "Certifications related to my work.";

export const languageScores: LanguageScore[] = [
  {
    name: "TOEFL",
    score: "108",
    issuer: "ETS",
    issuerUrl: "https://www.ets.org/toefl",
  },
  {
    name: "OPIC",
    score: "AL",
    issuer: "ACTFL",
    issuerUrl: "https://www.languagetesting.com",
  },
];

export const certifications: Certification[] = [
  {
    name: "SQLD",
    issuer: "한국데이터산업진흥원",
    issuerUrl: "https://www.kdata.or.kr",
  },
  {
    name: "ADSP",
    issuer: "한국데이터산업진흥원",
    issuerUrl: "https://www.kdata.or.kr",
  },
];
