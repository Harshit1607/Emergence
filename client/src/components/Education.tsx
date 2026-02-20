

const Education = () => {
  return (
    <div className="w-[80%] h-auto flex flex-col justify-start items-center gap-5 pt-5">
      <span className="lg:text-xl text-md">I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering 
        at Bharati Vidyapeeth&apos;s College of Engineering. I am a passionate full-stack web developer, with 
        a strong inclination towards building robust applications using the MERN stack, 
        which is my core area of expertise.
      </span>
      
      <div className="w-full flex justify-between items-center lg:text-xl text-md">
        <span className="w-[30%] flex justify-center items-center">Btech</span>
        <span className="w-[30%] flex justify-center items-center">3rd Year</span>
        <span className="w-[30%] flex justify-center items-center">9.62 CGPA</span>
      </div>
      <div className="w-full flex justify-between items-center lg:text-xl text-md">
        <span className="w-[30%] flex justify-center items-center">CBSE</span>
        <span className="w-[30%] flex justify-center items-center">Grade 12th</span>
        <span className="w-[30%] flex justify-center items-center">95%</span>
      </div>

    </div>
  )
}

export default Education