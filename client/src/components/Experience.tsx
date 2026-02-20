import { experience } from "@/data/experienceData"

const Experience = () => {
  return (
    <div className="w-[80%] h-auto flex flex-col justify-start items-center gap-10">
      {experience.map((exp, index)=>
        <div className="w-full h-auto flex md:flex-row flex-col justify-between md:items-start items-center gap-5 md:gap-0" key={index}>
          <div className="md:w-[25%] w-full h-full flex flex-col items-start">
            <span className="md:text-3xl text-xl font-gloock">{exp.org}</span>
            <span className="text-sm">{exp.time}</span>
          </div>
          <div className="flex flex-col justify-start items-start md:w-[75%] w-full h-full gap-4">
            <span className="w-[100%] h-[10%] md:text-3xl text-xl font-gloock">{exp.role}</span>
            {exp.work.map((each, index)=>
                <li key={index}>{each}</li>              
            )}
            <div className="w-full flex justify-start flex-wrap gap-2">
              {exp.tech.map((tech)=>
                <div className="p-1 rounded flex items-center justify-center opposite" key={tech}>
                <span>{tech}</span>
              </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Experience