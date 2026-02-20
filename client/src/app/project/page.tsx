import Projects from "@/components/Projects";

export default function projectPage() {
  return (
    <div className="w-screen h-auto flex flex-col justify-start items-center pt-[15vh]">
      <div className="flex flex-col items-center gap-4">
        <span className="lg:text-9xl md:text-7xl text-5xl font-bold font-gloock">Projects</span>
        <span className="lg:text-3xl text-2xl font-extralight mb-10">A few of my favourites</span>
      </div>
      <Projects isFull={true} />
    </div>
  );
}