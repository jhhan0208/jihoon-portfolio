import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";
import { getExperienceDurationText } from "@/lib/utils";

interface ExperienceListCardProps {
  experience: ExperienceInterface;
  showDetailsButton?: boolean;
}

export default function ExperienceListCard({
  experience,
  showDetailsButton = true,
}: ExperienceListCardProps) {
  return (
    <div className="h-full w-full rounded-lg border border-border bg-background p-4 sm:p-6">
      <div className="flex h-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          {experience.logo && (
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 border-border bg-white sm:h-20 sm:w-20">
              <Image
                src={experience.logo}
                alt={experience.company ?? experience.position}
                width={80}
                height={80}
                className="h-full w-full object-contain p-2"
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                {experience.position}
              </h3>
              <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
                {getExperienceDurationText(
                  experience.startDate,
                  experience.endDate
                )}
              </span>
            </div>
            <div className="mb-2 flex min-h-5 flex-col justify-center">
              {(experience.company || experience.companyUrl) && (
                <div className="mb-1 flex items-center gap-2">
                  {experience.company && (
                    <span className="text-sm font-medium text-muted-foreground">
                      {experience.company}
                    </span>
                  )}
                  {experience.companyUrl && (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icons.externalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
              {experience.location && (
                <p className="text-sm text-muted-foreground">
                  {experience.location}
                </p>
              )}
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {experience.description[0]}
            </p>
          </div>
        </div>
        {showDetailsButton && (
          <Button
            variant="outline"
            size="sm"
            className="w-full rounded-lg sm:w-auto"
            asChild
          >
            <Link href={`/experience/${experience.id}`}>
              View Details
              <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
