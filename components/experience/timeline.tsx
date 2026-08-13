import ExperienceListCard from "@/components/experience/experience-list-card";
import { ExperienceInterface } from "@/config/experience";

interface TimelineProps {
  experiences: ExperienceInterface[];
}

export default function Timeline({ experiences }: TimelineProps) {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="space-y-4">
      {sortedExperiences.map((experience) => (
        <ExperienceListCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
