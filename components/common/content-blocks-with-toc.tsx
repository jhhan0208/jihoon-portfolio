"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";

import ContentBlocks from "@/components/common/content-blocks";
import ContentPageToc from "@/components/common/content-page-toc";
import { ContentBlock } from "@/config/content-blocks";
import { buildTocSections, getHeadingIds } from "@/lib/content-toc";

interface ContentBlocksWithTocProps {
  blocks: ContentBlock[];
  altFallback: string;
  className?: string;
}

interface TocPosition {
  left: number;
  width: number;
}

export default function ContentBlocksWithToc({
  blocks,
  altFallback,
  className,
}: ContentBlocksWithTocProps) {
  const asideRef = useRef<HTMLElement>(null);
  const [tocPosition, setTocPosition] = useState<TocPosition | null>(null);

  const headingIds = useMemo(() => getHeadingIds(blocks), [blocks]);
  const sections = useMemo(
    () => buildTocSections(blocks, headingIds),
    [blocks, headingIds]
  );

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (!asideRef.current) return;

      const { left, width } = asideRef.current.getBoundingClientRect();
      setTocPosition({ left, width });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, [sections]);

  if (sections.length === 0) {
    return (
      <ContentBlocks
        blocks={blocks}
        altFallback={altFallback}
        headingIds={headingIds}
        className={className}
      />
    );
  }

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start lg:gap-10">
      <ContentBlocks
        blocks={blocks}
        altFallback={altFallback}
        headingIds={headingIds}
        className={className}
      />
      <aside ref={asideRef} className="hidden lg:block">
        {tocPosition && (
          <div
            className="fixed top-72 z-10"
            style={{
              left: tocPosition.left,
              width: tocPosition.width,
            }}
          >
            <ContentPageToc sections={sections} />
          </div>
        )}
      </aside>
    </div>
  );
}
