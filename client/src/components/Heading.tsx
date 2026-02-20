interface HeadingProps {
  name: string;
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
  return (
    <div className="flex items-center w-[80%] h-[20vh] font-gloock">
      <div className="flex-grow border-t border-gray-500"></div>
      <span className="md:px-4 px-1 lg:text-4xl md:text-3xl text-xl font-semibold  whitespace-nowrap ">
        {name}
      </span>
      <div className="flex-grow border-t border-gray-500"></div>
    </div>
  );
};

export default Heading;