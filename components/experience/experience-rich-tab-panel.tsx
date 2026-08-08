import Image from "next/image";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceRichTab } from "@/config/experience";

interface ExperienceRichTabPanelProps {
  tab: ExperienceRichTab;
  position: string;
}

export default function ExperienceRichTabPanel({
  tab,
  position,
}: ExperienceRichTabPanelProps) {
  return (
    <div>
      {tab.heroImage && (
        <Image
          src={tab.heroImage}
          alt={position}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}

      {tab.skills && tab.skills.length > 0 && (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Tech Stack
          </h2>
          <ChipContainer textArr={tab.skills} />
        </div>
      )}

      {tab.descriptionDetails && (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Description
          </h2>
          <ProjectDescription
            paragraphs={tab.descriptionDetails.paragraphs}
            bullets={tab.descriptionDetails.bullets}
          />
        </div>
      )}

      {tab.listItems && tab.listItems.length > 0 && (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            {tab.listTitle ?? "Achievements"}
          </h2>
          <ul className="space-y-3">
            {tab.listItems.map((item, idx) => (
              <li
                key={idx}
                className="text-base leading-relaxed flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab.pagesInfoArr && tab.pagesInfoArr.length > 0 && (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
            Page Info
          </h2>
          {tab.pagesInfoArr.map((page, ind) => (
            <div key={ind}>
              <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
                <Icons.star className="h-5 w-5 mr-2" /> {page.title}
              </h3>
              <div>
                {page.description && <p>{page.description}</p>}
                {page.imgArr.map((img, imgIndex) => (
                  <Image
                    src={img}
                    key={imgIndex}
                    alt={page.title}
                    width={720}
                    height={405}
                    className="my-4 rounded-md border bg-muted transition-colors"
                    priority
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
