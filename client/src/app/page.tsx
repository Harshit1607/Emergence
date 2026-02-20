import Experience from '@/components/Experience';
import Heading from '@/components/Heading';
import Projects from '@/components/Projects';
import ScrollSection from '@/components/ScrollSection';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className='flex flex-col w-screen items-center'>
      <ScrollSection />
      <Heading name="Professional Experience" />
      <Experience />
      <Heading name="What I Use" />    
      <Skills />
      <Heading name="Things I've Built" />
      <Projects isFull={false} />
    </div>
  );
}
