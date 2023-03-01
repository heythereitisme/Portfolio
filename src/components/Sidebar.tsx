import React from "react";

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex">
      <div className="w-1/3 h-screen sticky top-0 bg-slate-200 border-r-2 border-purple-900 flex flex-col gap-10">
        <span className="text-5xl font-Heading">Cobi Reeves </span>
        <img
          src="/Cobi.png"
          alt="Portrait"
          width="200px"
          height="200px"
          className="mx-auto"
        />
        <span className="text-3xl font-Heading">Full stack Developer </span>
        <span className="text-2xl font-Heading">Calgary, AB </span>

        <button className="w-1/2 bg-purple-800 h-12 rounded-full text-slate-100 mx-auto hover:bg-blue-800">
        <a href="https://github.com/heythereitisme">
          Github
        </a>
        </button>
        <button className="w-1/2 bg-purple-800 h-12 rounded-full text-slate-100 mx-auto hover:bg-blue-800">
        <a href="https://www.linkedin.com/in/cobir12">
          Linkedin
        </a>
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
