import { ValidCategory, ValidExperienceType, ValidSkills } from "./constants";
import {
  ContentBlock,
  ContentBlockButton,
  ContentBlockBullets,
  ContentBlockHeading,
  ContentBlockImage,
  ContentBlockParagraphs,
  ContentBlockSkills,
} from "./content-blocks";
import { professionalExperiences } from "./experiences/experiences";
import { internExperiences } from "./experiences/interns";

export interface ExperiencePagesInfo {
  title: string;
  imgArr: string[];
  description?: string;
}

export interface ExperienceDescriptionDetails {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceRichTab {
  value: string;
  label: string;
  heroImage?: string;
  skills?: ValidSkills[];
  descriptionDetails?: ExperienceDescriptionDetails;
  listTitle?: string;
  listItems?: string[];
  pagesInfoArr?: ExperiencePagesInfo[];
}

export type ExperienceBlockHeading = ContentBlockHeading;
export type ExperienceBlockParagraphs = ContentBlockParagraphs;
export type ExperienceBlockBullets = ContentBlockBullets;
export type ExperienceBlockImage = ContentBlockImage;
export type ExperienceBlockSkills = ContentBlockSkills;
export type ExperienceBlockButton = ContentBlockButton;
export type ExperienceContentBlock = ContentBlock;

export interface ExperienceRichTabBlocks {
  value: string;
  label: string;
  blocks: ExperienceContentBlock[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExperienceType;
  position: string;
  company?: string;
  location?: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
  linkGroup?: string;
  linkGroups?: string[];
  detailLayout?: "rich";
  category?: ValidCategory[];
  githubLink?: string;
  heroImage?: string;
  descriptionDetails?: ExperienceDescriptionDetails;
  pagesInfoArr?: ExperiencePagesInfo[];
  detailTabs?: ExperienceRichTab[];
  detailBlocks?: ExperienceContentBlock[];
  detailTabBlocks?: ExperienceRichTabBlocks[];
}
export const experiences: ExperienceInterface[] = [
  ...internExperiences,
  ...professionalExperiences,
];
