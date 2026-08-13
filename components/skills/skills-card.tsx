import CompactSkillRow, {
  CompactSkillsTooltipProvider,
} from "@/components/skills/compact-skill-row";
import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";
import { cn } from "@/lib/utils";

interface SkillsCardProps {
  skills: skillsInterface[];
  className?: string;
  variant?: "default" | "compact";
}

export default function SkillsCard({
  skills,
  className,
  variant = "default",
}: SkillsCardProps) {
  if (variant === "compact") {
    return (
      <CompactSkillsTooltipProvider>
        <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", className)}>
          {skills.map((skill) => (
            <CompactSkillRow
              key={skill.name}
              name={skill.name}
              description={skill.description}
              rating={skill.rating}
            >
              <skill.icon size={22} />
            </CompactSkillRow>
          ))}
        </div>
      </CompactSkillsTooltipProvider>
    );
  }

  return (
    <div
      className={cn(
        "mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-2"
        >
          <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
            <skill.icon size={50} />
            <div className="space-y-2">
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
