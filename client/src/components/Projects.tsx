'use client'

import Link from "next/link";
import { projects } from "../data/projectsData";

interface ProjectsProps {
  isFull: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isFull }) => {
  const p = isFull ? projects : projects.slice(0, 3);

  return (
    <div className="w-screen h-auto pb-8 text-md flex justify-center items-center flex-col gap-5">
      <div
        className={`
          mx-auto h-full 
          ${isFull
            ? 'flex flex-wrap justify-between gap-y-20 gap-x-8 w-[90%]'
            : 'w-[80%] flex flex-col gap-20 mt-5'}
        `}
      >
        {p.map((project, index) => {
          if (!isFull) {
            // Alternating layout for isFull === false
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row 
                  ${isEven ? '' : 'md:flex-row-reverse'} 
                  items-center md:items-start gap-8`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 rounded overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/link.svg"
                        alt="External link"
                        className="w-5 h-5 hover:scale-110 transition-transform foreground-color"
                      />
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm mt-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="p-1 rounded opposite">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          } else {
            // Grid layout for isFull === true
            return (
              <div
                key={index}
                className="w-full sm:w-full md:w-[48%] flex flex-col items-start gap-4"
              >
                {/* Image with rectangular aspect ratio */}
                <div className="w-full aspect-[16/9] overflow-hidden rounded">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                {/* Details */}
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-xl font-bold">{project.name}</h2>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/link.svg"
                      alt="External link"
                      className="w-5 h-5 hover:scale-110 transition-transform"
                    />
                  </a>
                </div>

                <p>{project.description}</p>

                <div className="flex flex-wrap gap-2 text-sm mt-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="p-1 rounded opposite">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* View All Projects Button */}
      {!isFull && (
        <Link
          href="/project"
          className="w-[75%] lg:h-[10vh] h-[8vh] opposite rounded flex items-center justify-center lg:text-2xl text-md mt-20"
        >
          View All Projects
        </Link>
      )}
    </div>
  );
};

export default Projects;
