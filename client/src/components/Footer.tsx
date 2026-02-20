import Image from "next/image";


const Footer = ()=>{
  return(
    <div className="w-screen md:h-[30vh] h-[40vh] flex flex-col md:flex-row items-center justify-center md:justify-between gap-2">
      <div className="flex flex-col items-center md:w-1/3 w-full">
        <span className="lg:text-2xl md:text-xl text-md">hbareja.07@gmail.com</span>
      </div>

      <div className="flex flex-col gap-5 items-center w-1/3 md:w-1/3 w-full">

        <div className="flex justify-between items-center gap-4">
        
          <a href="https://github.com/Harshit1607" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/github.svg" alt="github" width={44} height={44} className="foreground-color"/>
          </a>
          <a href="https://www.linkedin.com/in/harshit-bareja-359a36292/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/linkedin.svg" alt="linkedin" width={44} height={44} className="foreground-color"/>
          </a>
      </div>
      </div>
      
      
    </div>
  );
}

export default Footer;