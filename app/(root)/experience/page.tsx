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
  type?: ValidExperienceType;
}[] = [
  { value: "intern", label: "Intern", type: "Intern" },
  { value: "project", label: "Project", type: "Project" },
  { value: "experience", label: "Experience", type: "Experience" },
  { value: "publication", label: "Publication", type: "Publication" },
  { value: "award", label: "Award", type: "Award" },
];

const renderContent = (tabVal: string) => {
  const filterTab = EXPERIENCE_FILTER_TABS.find((tab) => tab.value === tabVal);
  const experienceArr = filterTab
    ? experiences.filter((exp) => exp.type === filterTab.type)
    : experiences;

  return (
    <div className="mx-auto my-4">
      <Timeline experiences={experienceArr} />
    </div>
  );
};

export default function ExperiencePage() {
  const tabItems = [
    {
      value: "all",
      label: "All",
      content: renderContent("all"),
    },
    ...EXPERIENCE_FILTER_TABS.map((tab) => ({
      value: tab.value,
      label: tab.label,
      content: renderContent(tab.value),
    })),
  ];

  return (
    <PageContainer
      title={pagesConfig.experience.title}
      description={pagesConfig.experience.description}
    >
      <ResponsiveTabs
        items={tabItems}
        defaultValue="all"
        tabsListClassName="grid-cols-3 lg:grid-cols-6"
      />
    </PageContainer>
  );
}
