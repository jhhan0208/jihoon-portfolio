"use client";

import { ReactNode } from "react";

import Rating from "@/components/skills/rating";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CompactSkillRowProps {
  name: string;
  description: string;
  rating: number;
  children: ReactNode;
}

export function CompactSkillsTooltipProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <TooltipProvider delayDuration={200}>{children}</TooltipProvider>;
}

export default function CompactSkillRow({
  name,
  description,
  rating,
  children,
}: CompactSkillRowProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex cursor-default items-center gap-3 rounded-lg border bg-background px-3 py-2.5 transition-colors hover:bg-muted/40">
          <span className="shrink-0">{children}</span>
          <h3 className="min-w-0 flex-1 truncate text-sm font-semibold">
            {name}
          </h3>
          <Rating stars={rating} />
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs text-pretty leading-relaxed"
      >
        {description}
      </TooltipContent>
    </Tooltip>
  );
}
