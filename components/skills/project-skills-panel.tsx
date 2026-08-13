import SkillsCard from "@/components/skills/skills-card";
import { skillsInterface } from "@/config/skills";

interface ProjectSkillsPanelProps {
  skills: skillsInterface[];
}

export default function ProjectSkillsPanel({
  skills,
}: ProjectSkillsPanelProps) {
  return (
    <section>
      <div className="mb-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h2 className="font-heading text-2xl">Tech Stack</h2>
        <span className="text-sm text-muted-foreground" aria-hidden="true">
          |
        </span>
        <p className="text-sm text-muted-foreground">
          Skill stacks used in my projects.
        </p>
      </div>
      <SkillsCard skills={skills} variant="compact" />
    </section>
  );
}
