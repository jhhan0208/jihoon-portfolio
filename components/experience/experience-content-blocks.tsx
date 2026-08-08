import ContentBlocksWithToc from "@/components/common/content-blocks-with-toc";
import { ContentBlock } from "@/config/content-blocks";

interface ExperienceContentBlocksProps {
  blocks: ContentBlock[];
  position: string;
  className?: string;
}

export default function ExperienceContentBlocks({
  blocks,
  position,
  className,
}: ExperienceContentBlocksProps) {
  return (
    <ContentBlocksWithToc
      blocks={blocks}
      altFallback={position}
      className={className}
    />
  );
}
