import Link from "next/link";
import { CSSProperties, Fragment } from "react";

import { Icons } from "@/components/common/icons";
import {
  AchievementItem,
  AchievementProject,
  achievementProjects,
} from "@/config/achievements";
import { cn } from "@/lib/utils";

const GRID_CLASS =
  "lg:grid lg:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)] lg:gap-x-4";

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

function LinkConnector({
  orientation = "horizontal",
  className,
  style,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
  style?: CSSProperties;
}) {
  if (orientation === "vertical") {
    return (
      <div className={cn("flex justify-center py-2", className)} style={style}>
        <div className="h-8 border-l-2 border-dotted border-muted-foreground/50" />
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center self-center px-1", className)}
      style={style}
      aria-hidden="true"
    >
      <div className="h-px w-10 border-t-2 border-dotted border-muted-foreground/50 sm:w-16" />
    </div>
  );
}

function AchievementCard({
  item,
  className,
}: {
  item: AchievementItem;
  className?: string;
}) {
  const content = (
    <>
      <div className="min-w-0 pr-8">
        <h4 className="text-lg font-bold text-foreground sm:text-base">
          {item.title}
        </h4>
        <p className="mt-1 text-sm font-medium text-muted-foreground">
          {item.organization}
        </p>
      </div>
      {item.url && (
        <Icons.externalLink
          size={28}
          className="absolute bottom-2.5 right-2.5 z-10 h-7 w-7 rounded-full border bg-background p-1.5 text-muted-foreground"
          aria-hidden="true"
        />
      )}
    </>
  );

  const cardClassName = cn(
    "relative w-full rounded-lg border border-border bg-background p-3 sm:p-4",
    item.url &&
      "hover:border-primary/40 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    className
  );

  if (item.url) {
    const external = isExternalUrl(item.url);

    if (external) {
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(cardClassName, "block")}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={item.url} className={cn(cardClassName, "block")}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}

function LinkedOneToMany({
  publication,
  awards,
}: {
  publication: AchievementItem;
  awards: AchievementItem[];
}) {
  const branchInset = `${(0.5 / awards.length) * 100}%`;

  return (
    <div
      className="hidden gap-x-4 gap-y-4 lg:grid lg:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)]"
      style={{ gridTemplateRows: `repeat(${awards.length}, auto)` }}
    >
      <div
        className="self-center"
        style={{ gridColumn: 1, gridRow: `1 / span ${awards.length}` }}
      >
        <AchievementCard item={publication} />
      </div>

      {/* 가로(Publication→중앙) + 끊기지 않는 세로 줄기 */}
      <div
        className="relative"
        style={{ gridColumn: 2, gridRow: `1 / span ${awards.length}` }}
        aria-hidden="true"
      >
        <div className="absolute left-0 right-1/2 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-muted-foreground/50" />
        <div
          className="absolute left-1/2 w-0 -translate-x-1/2 border-l-2 border-dotted border-muted-foreground/50"
          style={{ top: branchInset, bottom: branchInset }}
        />
      </div>

      {awards.map((award, index) => (
        <Fragment key={award.id}>
          <div
            className="relative"
            style={{ gridColumn: 2, gridRow: index + 1 }}
            aria-hidden="true"
          >
            <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-muted-foreground/50" />
          </div>
          <div style={{ gridColumn: 3, gridRow: index + 1 }}>
            <AchievementCard item={award} />
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function LinkedManyToOne({
  publications,
  award,
}: {
  publications: AchievementItem[];
  award: AchievementItem;
}) {
  const branchInset = `${(0.5 / publications.length) * 100}%`;

  return (
    <div
      className="hidden gap-x-4 gap-y-4 lg:grid lg:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)]"
      style={{ gridTemplateRows: `repeat(${publications.length}, auto)` }}
    >
      {publications.map((publication, index) => (
        <Fragment key={publication.id}>
          <div style={{ gridColumn: 1, gridRow: index + 1 }}>
            <AchievementCard item={publication} />
          </div>
          <div
            className="relative"
            style={{ gridColumn: 2, gridRow: index + 1 }}
            aria-hidden="true"
          >
            <div className="absolute left-0 right-1/2 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-muted-foreground/50" />
          </div>
        </Fragment>
      ))}

      {/* 가로(중앙→Award) + 끊기지 않는 세로 줄기 */}
      <div
        className="relative"
        style={{ gridColumn: 2, gridRow: `1 / span ${publications.length}` }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 border-t-2 border-dotted border-muted-foreground/50" />
        <div
          className="absolute left-1/2 w-0 -translate-x-1/2 border-l-2 border-dotted border-muted-foreground/50"
          style={{ top: branchInset, bottom: branchInset }}
        />
      </div>

      <div
        className="self-center"
        style={{ gridColumn: 3, gridRow: `1 / span ${publications.length}` }}
      >
        <AchievementCard item={award} />
      </div>
    </div>
  );
}

function ProjectAchievements({ project }: { project: AchievementProject }) {
  const { publications, awards } = project;
  const rowCount = Math.max(publications.length, awards.length, 1);
  const hasSinglePublication = publications.length === 1;
  const hasSingleAward = awards.length === 1;
  const isLinked = publications.length > 0 && awards.length > 0;
  const isOneToMany = hasSinglePublication && awards.length > 1;
  const isManyToOne = hasSingleAward && publications.length > 1;

  return (
    <section className="space-y-4">
      {/* Mobile */}
      <div className="flex flex-col gap-4 lg:hidden">
        {publications.length > 0 && (
          <div className="space-y-3">
            {publications.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        )}
        {isLinked && <LinkConnector orientation="vertical" />}
        {awards.length > 0 && (
          <div className="space-y-3">
            {awards.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* Desktop: 1 publication ↔ N awards */}
      {isOneToMany && (
        <LinkedOneToMany publication={publications[0]} awards={awards} />
      )}

      {/* Desktop: N publications ↔ 1 award */}
      {isManyToOne && (
        <LinkedManyToOne publications={publications} award={awards[0]} />
      )}

      {/* Desktop: 1:1 or unmatched rows */}
      {!isOneToMany && !isManyToOne && (
        <div
          className={cn("hidden items-start gap-y-4", GRID_CLASS)}
          style={{ gridTemplateRows: `repeat(${rowCount}, auto)` }}
        >
          {hasSinglePublication && (
            <div
              className="flex items-center self-center"
              style={{ gridColumn: 1, gridRow: `1 / span ${rowCount}` }}
            >
              <AchievementCard item={publications[0]} />
            </div>
          )}

          {!hasSinglePublication &&
            publications.map((item, rowIndex) => (
              <div
                key={item.id}
                className="flex items-center"
                style={{ gridColumn: 1, gridRow: rowIndex + 1 }}
              >
                <AchievementCard item={item} />
              </div>
            ))}

          {publications.length === 0 && (
            <div
              className="hidden lg:block"
              style={{ gridColumn: 1, gridRow: `1 / span ${rowCount}` }}
              aria-hidden="true"
            />
          )}

          {hasSingleAward && (
            <div
              className="flex items-center self-center"
              style={{ gridColumn: 3, gridRow: `1 / span ${rowCount}` }}
            >
              <AchievementCard item={awards[0]} />
            </div>
          )}

          {Array.from({ length: rowCount }).map((_, rowIndex) => {
            const hasPublicationInRow =
              hasSinglePublication || rowIndex < publications.length;
            const hasAwardInRow = hasSingleAward || rowIndex < awards.length;
            const showConnector =
              isLinked && hasPublicationInRow && hasAwardInRow;

            return (
              <Fragment key={`${project.id}-row-${rowIndex}`}>
                {showConnector && (
                  <LinkConnector
                    style={{ gridColumn: 2, gridRow: rowIndex + 1 }}
                  />
                )}
                {!hasSingleAward && rowIndex < awards.length && (
                  <div
                    className="flex items-center"
                    style={{ gridColumn: 3, gridRow: rowIndex + 1 }}
                  >
                    <AchievementCard item={awards[rowIndex]} />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default function AchievementsPanel() {
  return (
    <div className="space-y-5">
      <div className={cn("mb-0 hidden px-1", GRID_CLASS)}>
        <h3 className="font-heading text-2xl text-muted-foreground">
          📄 Publication
        </h3>
        <div aria-hidden="true" />
        <h3 className="font-heading text-2xl text-muted-foreground">
          🏆 Awards
        </h3>
      </div>

      {achievementProjects.map((project) => (
        <ProjectAchievements key={project.id} project={project} />
      ))}
    </div>
  );
}
