import React from "react";

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Props): JSX.Element => {
  return (
    <div className="sm:flex">
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

        <a href="https://github.com/heythereitisme" className="w-1/2 h-12 rounded-full self-center">
        <button className="w-full bg-purple-800 h-12 rounded-full text-slate-100 mx-auto hover:bg-blue-800 font-Para">
          Github
        </button>
        </a>
        <a href="https://www.linkedin.com/in/cobir12" className="w-1/2 h-12 rounded-full self-center mb-10">
        <button className="w-full bg-purple-800 h-12 rounded-full text-slate-100 mx-auto hover:bg-blue-800 font-Para">
          Linkedin
        </button>
        </a>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default Sidebar;
