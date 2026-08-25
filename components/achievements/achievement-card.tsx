import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { FeaturedAchievement } from "@/config/achievements";

interface AchievementCardProps {
  achievement: FeaturedAchievement;
}

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  const external = achievement.url ? isExternalUrl(achievement.url) : false;

  const inner = (
    <div className="relative h-full overflow-hidden rounded-lg border bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground sm:p-6">
      {achievement.url && (
        <Icons.externalLink
          size={28}
          className="absolute bottom-3 right-3 z-10 h-7 w-7 rounded-full border bg-background p-1.5 text-muted-foreground"
          aria-hidden="true"
        />
      )}
      <div className="flex min-h-[140px] flex-col justify-between gap-4 pr-6">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {achievement.kind === "Publication" ? "📄 Publication" : "🏆 Award"}
          </p>
          <h3 className="line-clamp-3 text-base font-bold sm:text-lg">
            {achievement.title}
          </h3>
        </div>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="font-medium">{achievement.organization}</p>
          <p>{achievement.projectName}</p>
        </div>
      </div>
    </div>
  );

  if (achievement.url) {
    return (
      <Link
        href={achievement.url}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="block h-full"
      >
        {inner}
      </Link>
    );
  }

  return <div className="h-full">{inner}</div>;
}
