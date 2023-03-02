import React from "react";

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Props): JSX.Element => {
  return (
    <div className="overflow-hidden sm:flex sm:overflow-visible">
      <div className="sm:w-1/3 sm:h-screen sm:sticky sm:top-0 bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 border-r-2 border-purple-900 flex flex-col gap-10">
        <span className="text-5xl font-Heading">Cobi Reeves </span>
        <img
          src="/Cobi.png"
          alt="Portrait"
          width="200px"
          height="200px"
          className="mx-auto"
        />
        <span className="text-3xl font-Heading">Full Stack Developer </span>
        <span className="text-2xl font-Heading">Calgary, AB </span>
        <span className="font-Para">Find me on:</span>

        <a href="https://github.com/heythereitisme" className="w-1/2 h-12 self-center">
        <button className="w-full relative transition-all h-12 before:w-0 before:bg-purple-900 before:h-2 before:absolute before:bottom-0 before:right-1/2 hover:before:w-full hover:before:right-0 before:transition-all before:duration-500 text-purple-900 mx-auto font-Para drop-shadow hover:text-indigo-800">
          <span className="text-lg">Github</span>
        </button>
        </a>
        <a href="https://www.linkedin.com/in/cobir12" className="w-1/2 h-12 self-center mb-10">
        <button className="w-full relative transition-all h-12 before:w-0 before:bg-purple-900 before:h-2 before:absolute before:bottom-0 before:right-1/2 hover:before:w-full hover:before:right-0 before:transition-all before:duration-500 text-purple-900 mx-auto font-Para drop-shadow hover:text-indigo-800">
          <span className="text-lg">Linkedin</span>
        </button>
        </a>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default Sidebar;
