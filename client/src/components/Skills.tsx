'use client';

import Image from "next/image";
import { skills } from "../data/skillsData";

// Group skills by category
const groupedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

// Display names for categories
const categoryNames: Record<string, string> = {
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  others: "Others",
};

const Skills = () => {
  return (
    <div className="w-screen h-auto py-8 text-l mt-2">
      <div className="w-[80%] mx-auto flex flex-col gap-10">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div
            key={category}
            className="flex flex-col sm:flex-row sm:items-start gap-6"
          >
            {/* Left: Category Name */}
            <div className="sm:w-[25%] w-full text-center sm:text-left">
              <h2 className="text-2xl font-semibold underline">
                {categoryNames[category]}:
              </h2>
            </div>

            {/* Right: Skills */}
            <div className="sm:w-[75%] w-full flex flex-wrap justify-start gap-y-8">
              {skills.map((skill) => (
                <div
                  key={skill.code}
                  className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center"
                >
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    title={skill.name}
                    width={48}
                    height={48}
                    className={`w-12 h-12 object-contain ${
    skill.code === "github" || skill.code === "github-actions"
      ? "brightness-0 dark:invert"
      : ""
  }`}
                  />
                  <span className="mt-2 text-sm text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
