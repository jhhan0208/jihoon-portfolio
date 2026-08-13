import { ValidSkills } from "@/config/constants";
import { Projects } from "@/config/projects";
import { projectSkillCatalog } from "@/config/project-skills-catalog";
import { skillsInterface } from "@/config/skills";

export function getUniqueProjectTechStacks(): ValidSkills[] {
  const stacks = new Set<ValidSkills>();

  Projects.forEach((project) => {
    project.techStack.forEach((skill) => stacks.add(skill));
  });

  return Array.from(stacks).sort((a, b) => a.localeCompare(b));
}

export function getProjectSkills(): skillsInterface[] {
  const skills: skillsInterface[] = [];

  for (const name of getUniqueProjectTechStacks()) {
    const definition = projectSkillCatalog[name];
    if (!definition) continue;

    skills.push({
      name,
      ...definition,
    });
  }

  return skills.sort((a, b) => b.rating - a.rating);
}
