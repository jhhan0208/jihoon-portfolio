import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectSkillsPanel from "@/components/skills/project-skills-panel";
import QualificationsPanel from "@/components/skills/qualifications-panel";
import { pagesConfig } from "@/config/pages";
import { getProjectSkills } from "@/lib/project-skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  const projectSkills = getProjectSkills();

  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <QualificationsPanel />
        <ProjectSkillsPanel skills={projectSkills} />
      </div>
    </PageContainer>
  );
}
