import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Heading from "@/components/Heading";
import Skills from "@/components/Skills";


export default function AboutPage() {
  return(
    <div className="w-screen h-auto flex flex-col justify-start items-center pt-[15vh] ">
        <span className="lg:text-9xl md:text-7xl text-5xl font-bold font-gloock mb-5">About Me</span>
        <Education />
        <Heading name="Professional Experience" />
        <Experience />
        <Heading name="My TechStack" />
        <Skills />
    </div>
  );
}