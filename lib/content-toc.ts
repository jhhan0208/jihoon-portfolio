import { ContentBlock } from "@/config/content-blocks";

export const CONTENT_HEADING_SCROLL_OFFSET = 15;

export interface TocChildItem {
  id: string;
  text: string;
}

export interface TocSection {
  id: string;
  text: string;
  children: TocChildItem[];
}

function slugify(text: string): string {
  const slug = text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return slug || "section";
}

export function getHeadingIds(blocks: ContentBlock[]): Map<number, string> {
  const ids = new Map<number, string>();
  const used = new Set<string>();

  blocks.forEach((block, index) => {
    if (block.type !== "heading") return;

    let base = block.id?.trim() || slugify(block.text);
    let id = base;
    let counter = 1;

    while (used.has(id)) {
      id = `${base}-${counter++}`;
    }

    used.add(id);
    ids.set(index, id);
  });

  return ids;
}

export function buildTocSections(
  blocks: ContentBlock[],
  headingIds: Map<number, string>
): TocSection[] {
  const sections: TocSection[] = [];

  blocks.forEach((block, index) => {
    if (block.type !== "heading") return;
    if (block.level === "h3") return;

    const id = headingIds.get(index);
    if (!id) return;

    sections.push({ id, text: block.text, children: [] });
  });

  return sections;
}

export function getAllTocIds(sections: TocSection[]): string[] {
  return sections.flatMap((section) => [
    section.id,
    ...section.children.map((child) => child.id),
  ]);
}
