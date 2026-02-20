export type Experience = {
  org: string,
  time: string,
  role: string,
  work: string[],
  tech: string[],
};

export const experience: Experience[] = [
  {
    org: "Correm Advisory India Pvt. Ltd.",
    time: "Jun 2025 – Oct 2025",
    role: "Full Stack Intern",
    work: [
      "Built and maintained an internal Loan Management System to automate financial workflows, reducing manual effort by 35%.",
      "Developed a Kanban System with role-based access, document linking, and REST API integration to improve task efficiency by 40%.",
      "Managed deployment and hosting of both systems using CI/CD pipelines via GitHub Actions on Render for seamless updates.",
      "Collaborated closely with the finance and operations teams to align technical solutions with real business processes."
    ],
    tech: ["Nextjs", "Typescript", "Tailwind CSS", "React", "Node.js", "Express.js", "MongoDB", "Redux", "GitHub Actions"]
  },
  {
    org: "ACM-W BVP Society",
    time: "Jul 2025 – Present",
    role: "Vice Chairperson",
    work: [
      "Managed multiple events and coordinated with various societies for smooth execution of the annual technical fest.",
      "Led a team of 50+ members across development, design, and PR domains to streamline event planning and ensure efficient collaboration.",
      "Organized technical workshops and coding contests with participation from over 250 students, enhancing the society’s engagement and reach."
    ],
    tech: ["Leadership", "Event Management", "Strategic Planning", "Team Coordination"]
  },
  {
    org: "ACM BVP Society",
    time: "Aug 2024 – Jun 2025",
    role: "Webmaster",
    work: [
      "Managed and maintained the official website of the ACM BVP student chapter, ensuring high performance, responsiveness, and content accuracy throughout the academic year.",
      "Collaborated with the core team to update event schedules, announcements, and highlights in real-time, enhancing the visibility of society activities.",
      "Led frontend development efforts focused on improving user experience, visual consistency, and feature enhancements based on user feedback.",
      "Gained hands-on experience in real-world website deployment, maintenance, and cross-functional collaboration."
    ],
    tech: ["React", "Redux", "SCSS"]
  }
];
