import { ValidSkills } from "./constants";

export type ContentBlockHeading = {
  type: "heading";
  text: string;
  level?: "h2" | "h3";
  id?: string;
};

export type ContentBlockParagraphs = {
  type: "paragraphs";
  items: string[];
};

export type ContentBlockBullets = {
  type: "bullets";
  items: string[];
};

type ContentBlockImageBase = {
  type: "image";
  src: string;
  alt?: string;
};

export type ContentBlockImage =
  | (ContentBlockImageBase & { width: number; height?: never })
  | (ContentBlockImageBase & { height: number; width?: never })
  | ContentBlockImageBase;

export type ContentBlockSkills = {
  type: "skills";
  title?: string;
  items: ValidSkills[];
};

export type ContentBlockButton = {
  type: "button";
  label: string;
  href: string;
};

export type ContentBlockVideo = {
  type: "video";
  /** 로컬 경로(`/timeline/.../demo.mp4`, `.m4a`) 또는 YouTube URL */
  src: string;
  title?: string;
};

export type ContentBlockTeamMember = {
  name: string;
  github: string;
  role: string;
};

export type ContentBlockTeam = {
  type: "team";
  title?: string;
  members: ContentBlockTeamMember[];
};

export type ContentBlock =
  | ContentBlockHeading
  | ContentBlockParagraphs
  | ContentBlockBullets
  | ContentBlockImage
  | ContentBlockSkills
  | ContentBlockButton
  | ContentBlockVideo
  | ContentBlockTeam;
