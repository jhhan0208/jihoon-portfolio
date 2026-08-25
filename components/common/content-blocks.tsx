import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { ContentBlock } from "@/config/content-blocks";
import { CONTENT_HEADING_SCROLL_OFFSET } from "@/lib/content-toc";
import {
  getYouTubeEmbedUrl,
  isAudioSource,
} from "@/lib/content-video";
import { cn } from "@/lib/utils";

interface ContentBlocksProps {
  blocks: ContentBlock[];
  altFallback: string;
  headingIds?: Map<number, string>;
  className?: string;
}

export default function ContentBlocks({
  blocks,
  altFallback,
  headingIds,
  className,
}: ContentBlocksProps) {
  return (
    <div className={className}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const HeadingTag = block.level === "h3" ? "h3" : "h2";
            const headingId = headingIds?.get(index);

            return (
              <HeadingTag
                key={index}
                id={headingId}
                className={cn(
                  "font-heading leading-tight",
                  block.level === "h3"
                    ? "text-xl lg:text-xl mt-3 mb-2"
                    : "inline-block text-3xl lg:text-3xl mb-2"
                )}
                style={{ scrollMarginTop: CONTENT_HEADING_SCROLL_OFFSET }}
              >
                {block.text}
              </HeadingTag>
            );
          }

          case "paragraphs":
            return (
              <div key={index} className="mb-7">
                {block.items.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="mb-4 text-base leading-relaxed last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            );

          case "bullets":
            return (
              <ul key={index} className="mb-7 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-base leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "image": {
            const intrinsicWidth = 720;
            const intrinsicHeight = 405;
            const width = "width" in block ? block.width : undefined;
            const height = "height" in block ? block.height : undefined;
            const hasCustomSize = width != null || height != null;

            return (
              <div
                key={index}
                className={cn(
                  "my-8",
                  hasCustomSize && "flex justify-center"
                )}
              >
                <Image
                  src={block.src}
                  alt={block.alt ?? altFallback}
                  width={intrinsicWidth}
                  height={intrinsicHeight}
                  className={cn(
                    "rounded-md border bg-muted transition-colors max-w-full",
                    !hasCustomSize && "w-full h-auto",
                    width != null && "h-auto w-auto",
                    height != null && "w-auto h-auto"
                  )}
                  style={{
                    width: width != null ? `${width}px` : undefined,
                    height: height != null ? `${height}px` : undefined,
                  }}
                  priority={index === 0}
                />
              </div>
            );
          }

          case "skills":
            return (
              <div key={index} className="mb-7">
                {block.title && (
                  <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
                    {block.title}
                  </h2>
                )}
                <ChipContainer textArr={block.items} />
              </div>
            );

          case "button":
            return (
              <div key={index} className="mb-7 flex justify-start">
                <Link
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-muted pl-3 pr-6 text-sm font-medium text-foreground transition-colors hover:bg-muted/80"
                >
                  <Icons.externalLink className="h-5 w-5 shrink-0 rounded-full border bg-background p-1 text-muted-foreground" />
                  {block.label}
                </Link>
              </div>
            );

          case "video": {
            const youtubeEmbedUrl = getYouTubeEmbedUrl(block.src);
            const title = block.title ?? altFallback;

            if (youtubeEmbedUrl) {
              return (
                <div key={index} className="my-8">
                  <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-muted">
                    <iframe
                      src={youtubeEmbedUrl}
                      title={title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>
              );
            }

            if (isAudioSource(block.src)) {
              return (
                <div key={index} className="my-8">
                  <audio
                    controls
                    preload="metadata"
                    className="w-full"
                    title={title}
                  >
                    <source src={block.src} />
                    브라우저가 오디오 재생을 지원하지 않습니다.
                  </audio>
                </div>
              );
            }

            return (
              <div key={index} className="my-8">
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-md border bg-muted"
                  title={title}
                >
                  <source src={block.src} />
                  브라우저가 영상 재생을 지원하지 않습니다.
                </video>
              </div>
            );
          }

          case "team":
            return (
              <div key={index} className="mb-7">
                {block.title && (
                  <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
                    {block.title}
                  </h2>
                )}
                <div className="overflow-x-auto rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50 text-left">
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">GitHub</th>
                        <th className="px-4 py-3 font-medium">Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {block.members.map((member, memberIndex) => (
                        <tr key={memberIndex}>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {member.name}
                          </td>
                          <td className="px-4 py-3">
                            <Link
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground break-all"
                            >
                              <Icons.gitHub className="h-4 w-4 flex-shrink-0" />
                              <span className="underline-offset-4 hover:underline">
                                {member.github
                                  .replace(/^https?:\/\/(www\.)?github\.com\//, "")
                                  .replace(/\/$/, "") || member.github}
                              </span>
                            </Link>
                          </td>
                          <td className="px-4 py-3">{member.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
