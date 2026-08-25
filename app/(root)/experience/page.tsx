import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/experience/timeline";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { ValidExperienceType } from "@/config/constants";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.experience.metadata.title} | Professional Experience Timeline`,
  description: `${pagesConfig.experience.metadata.description} Explore my professional journey and career milestones in software development.`,
  keywords: [
    "experience timeline",
    "professional experience",
    "software developer experience",
    "developer portfolio",
    "work experience",
  ],
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
};

const EXPERIENCE_FILTER_TABS: {
  value: string;
  label: string;
  type: ValidExperienceType;
}[] = [
  { value: "internships", label: "Internships", type: "Internships" },
  {
    value: "campus-activities",
    label: "Campus Activities",
    type: "Campus Activities",
  },
  {
    value: "external-activities",
    label: "External Activities",
    type: "External Activities",
  },
];

const renderContent = (tabVal: string) => {
  const filterTab = EXPERIENCE_FILTER_TABS.find((tab) => tab.value === tabVal);
  const experienceArr = experiences.filter(
    (exp) => exp.type === filterTab?.type
  );

  return (
    <div className="mx-auto my-4">
      <Timeline experiences={experienceArr} />
    </div>
  );
};

export default function ExperiencePage() {
  const tabItems = EXPERIENCE_FILTER_TABS.map((tab) => ({
    value: tab.value,
    label: tab.label,
    content: renderContent(tab.value),
  }));

  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <ResponsiveTabs
        items={tabItems}
        defaultValue="internships"
        tabsListClassName="grid-cols-1 sm:grid-cols-3"
      />
    </PageContainer>
  );
}
