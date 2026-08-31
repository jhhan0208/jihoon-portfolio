"use client";

import { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import { TocSection, getAllTocIds, scrollToHeadingId, CONTENT_HEADING_SCROLL_OFFSET } from "@/lib/content-toc";
import { cn } from "@/lib/utils";

interface ContentPageTocProps {
  sections: TocSection[];
}

export default function ContentPageToc({ sections }: ContentPageTocProps) {
  const [activeId, setActiveId] = useState<string>(
    () => getAllTocIds(sections)[0] ?? ""
  );

  useEffect(() => {
    const ids = getAllTocIds(sections);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element != null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${CONTENT_HEADING_SCROLL_OFFSET}px 0px -55% 0px`, threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    scrollToHeadingId(id);
    setActiveId(id);
  };

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="rounded-lg border bg-card text-card-foreground overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b bg-muted px-4 py-2.5 text-sm font-semibold">
        <Icons.post className="h-4 w-4" />
        On this page
      </div>
      <ul className="divide-y">
        {sections.map((section, index) => (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => scrollTo(section.id)}
              className={cn(
                "w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted/60",
                activeId === section.id && "bg-accent text-accent-foreground"
              )}
            >
              {index + 1}) {section.text}
            </button>
            {section.children.length > 0 && (
              <ul className="border-t divide-y bg-muted/20">
                {section.children.map((child) => (
                  <li key={child.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(child.id)}
                      className={cn(
                        "w-full py-2 pl-8 pr-4 text-left text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground",
                        activeId === child.id &&
                          "bg-accent text-accent-foreground"
                      )}
                    >
                      {child.text}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
