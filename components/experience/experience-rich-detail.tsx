"use client";

import Image from "next/image";
import Link from "next/link";

import ExperienceContentBlocks from "@/components/experience/experience-content-blocks";
import ExperienceRichTabPanel from "@/components/experience/experience-rich-tab-panel";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import {
  ExperienceInterface,
  ExperienceRichTab,
} from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, getExperienceDurationText } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ExperienceRichDetailProps {
  experience: ExperienceInterface;
}

function buildFlatTab(experience: ExperienceInterface): ExperienceRichTab {
  return {
    value: "content",
    label: "Content",
    heroImage: experience.heroImage ?? experience.logo,
    skills: experience.skills,
    descriptionDetails: experience.descriptionDetails ?? {
      paragraphs: experience.description,
      bullets: [],
    },
    pagesInfoArr: experience.pagesInfoArr,
  };
}

function getTabsListClassName(tabCount: number) {
  if (tabCount <= 2) return "grid-cols-2";
  if (tabCount === 3) return "grid-cols-3";
  return "grid-cols-2 lg:grid-cols-4";
}

function ExperienceRichHeader({
  experience,
}: {
  experience: ExperienceInterface;
}) {
  return (
    <div>
      <time
        dateTime={experience.startDate.toISOString()}
        className="block text-sm text-muted-foreground"
      >
        {getExperienceDurationText(experience.startDate, experience.endDate)}
      </time>
      <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
        {experience.position}
        <div className="flex items-center">
          {experience.githubLink && (
            <CustomTooltip text="Link to the source code.">
              <Link href={experience.githubLink} target="_blank">
                <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
              </Link>
            </CustomTooltip>
          )}
          {experience.companyUrl && (
            <CustomTooltip text="Visit the organization website.">
              <Link href={experience.companyUrl} target="_blank">
                <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
              </Link>
            </CustomTooltip>
          )}
        </div>
      </h1>
      {experience.category && experience.category.length > 0 && (
        <ChipContainer textArr={experience.category} />
      )}
      <div className="mt-4 flex space-x-4">
        <Link
          href={siteConfig.links.github}
          className="flex items-center space-x-2 text-sm"
        >
          <Image
            src={profileImg}
            alt={siteConfig.authorName}
            width={42}
            height={42}
            className="rounded-full bg-background"
          />
          <div className="flex-1 text-left leading-tight">
            <p className="font-medium">{siteConfig.authorName}</p>
            <p className="text-[12px] text-muted-foreground">
              @{siteConfig.username}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function ExperienceRichDetail({
  experience,
}: ExperienceRichDetailProps) {
  const hasDetailTabBlocks =
    experience.detailTabBlocks && experience.detailTabBlocks.length > 0;
  const hasDetailBlocks =
    experience.detailBlocks && experience.detailBlocks.length > 0;
  const hasDetailTabs =
    experience.detailTabs && experience.detailTabs.length > 0;

  const tabItems = hasDetailTabBlocks
    ? experience.detailTabBlocks!.map((tab) => ({
        value: tab.value,
        label: tab.label,
        content: (
          <ExperienceContentBlocks
            blocks={tab.blocks}
            position={experience.position}
          />
        ),
      }))
    : hasDetailTabs
      ? experience.detailTabs!.map((tab) => ({
          value: tab.value,
          label: tab.label,
          content: (
            <ExperienceRichTabPanel tab={tab} position={experience.position} />
          ),
        }))
      : [];

  const tabCount = hasDetailTabBlocks
    ? experience.detailTabBlocks!.length
    : experience.detailTabs?.length ?? 0;

  return (
    <article
      className={cn(
        "container relative py-6 lg:py-10",
        hasDetailBlocks || hasDetailTabBlocks ? "max-w-5xl" : "max-w-3xl"
      )}
    >
      <Link
        href="/experience"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Experience
      </Link>
      <ExperienceRichHeader experience={experience} />

      {hasDetailTabBlocks || hasDetailTabs ? (
        <div className="mt-8">
          <ResponsiveTabs
            items={tabItems}
            defaultValue={
              hasDetailTabBlocks
                ? experience.detailTabBlocks![0]?.value
                : experience.detailTabs![0]?.value
            }
            tabsListClassName={getTabsListClassName(tabCount)}
          />
        </div>
      ) : hasDetailBlocks ? (
        <ExperienceContentBlocks
          blocks={experience.detailBlocks!}
          position={experience.position}
        />
      ) : (
        <ExperienceRichTabPanel
          tab={buildFlatTab(experience)}
          position={experience.position}
        />
      )}

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/experience"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Experience
        </Link>
      </div>
    </article>
  );
}
