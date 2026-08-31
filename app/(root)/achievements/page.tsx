import { Metadata } from "next";

import AchievementsPanel from "@/components/achievements/achievements-panel";
import PageContainer from "@/components/common/page-container";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.achievements.metadata.title,
  description: pagesConfig.achievements.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/achievements`,
  },
};

export default function AchievementsPage() {
  return (
    <PageContainer
      title={pagesConfig.achievements.title}
      description={pagesConfig.achievements.description}
      animate={false}
    >
      <div className="mx-auto my-0">
        <AchievementsPanel />
      </div>
    </PageContainer>
  );
}
