import React from "react";

const Projects = () => {
  return (
    <div className="mt-20 mx-5 flex flex-col">
      <span className="text-3xl sm:text-6xl font-Heading border-b-2 border-purple-900 w-2/3 mx-auto">Projects </span>
      {/* Random Dungeon */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 mt-20">
        <img
          src="/RandomDungeon.png"
          alt="Random Dungeon"
          className="p-10 md:col-start-2"
        />
        <div className="flex flex-col gap-10 p-20 md:col-start-1 md:row-start-1 my-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-3xl">
          <span className="text-4xl font-Heading"> Random Dungeon</span>
          <span className="sm:text-lg font-Para leading-relaxed text-md ">
            A text-based game in which a player goes through a random assortment
            of challenges, has many varied enemies and items for a unique
            experience every time! Has a Mongodb based leaderboard.
          </span>
          <span className="sm:text-lg font-Para leading-relaxed text-md text-slate-600">
            Technologies used: Javascript, NodeJS, ExpressJS, Readline-sync,
            Mongodb, Git
          </span>
          <a href="https://github.com/heythereitisme/Random-Dungeon" className="w-1/2 h-12 text-lg font-Para self-center rounded-full"> 
          <button className="w-full relative transition-all h-12 before:w-0 before:bg-purple-900 before:h-2 before:absolute before:bottom-0 before:right-1/2 hover:before:w-full hover:before:right-0 before:transition-all before:duration-500 text-purple-900 mx-auto font-Para drop-shadow hover:text-indigo-800">
          <span className="text-lg">Github</span>
        </button>
            </a>
        </div>
      </div>
      {/* Park N Bark */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 mt-20">
        <img
          src="/ParknBark.webp"
          alt="Park n' Bark"
          className="p-10 mx-auto"
        />
        <div className="flex flex-col gap-10 p-20 my-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-3xl">
          <span className="text-4xl font-Heading"> Park n' Bark</span>
          <span className="sm:text-lg font-Para leading-relaxed text-md">
            Created collaboratively with a group of 4, a website
            that shows the location and information about off leash dog parks in Calgary.
            Has maps, searching, and I trained an AI for a dog breed recognition system
          </span>
          <span className="sm:text-lg font-Para leading-relaxed text-md text-slate-600">
            Technologies used: Javascript, ExpressJS, Mongodb, Mongoose Git, ML5.js,
            Figma, React Big Calendar, Teachable Machine
          </span>
            <a href="https://github.com/abbyrobinson13/park-n-bark" className="w-1/2 h-12 text-lg font-Para self-center rounded-full"> 
            <button className="w-full relative transition-all h-12 before:w-0 before:bg-purple-900 before:h-2 before:absolute before:bottom-0 before:right-1/2 hover:before:w-full hover:before:right-0 before:transition-all before:duration-500 text-purple-900 mx-auto font-Para drop-shadow hover:text-indigo-800">
          <span className="text-lg">Github</span>
        </button>
            </a>
        </div>
      </div>
      {/* Masahe */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 mt-20">
        <img
          src="/Masahe.png"
          alt="Masahe"
          className="p-10 md:col-start-2"
        />
        <div className="flex flex-col gap-10 p-20 md:col-start-1 md:row-start-1 my-auto bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-3xl">
          <img src="/MasaheLogo.png" alt="Masahe Logo" width={200} height={200} className='mx-auto'/>
          <span className="text-4xl font-Heading"> Masahe</span>
          <span className="sm:text-lg font-Para leading-relaxed text-md">
            Created collaboratively with a group of 3, An Application
            that acts as a helper for massage therapists health and safety. Shows clients and
            practitioners with ratings, ability to leave notes, allows booking and shows
            location and directions. Also features live chat.
          </span>
          <span className="sm:text-lg font-Para leading-relaxed text-md text-slate-600">
            Technologies used: Javascript, Vite, ExpressJS, Mongodb, Mongoose, Git,
            Firebase, Socket.io, Figma, React Big Calendar, Trello
          </span>
          <a href="https://github.com/heythereitisme/Masahe" className="w-1/2 h-12 text-lg font-Para self-center rounded-full"> 
          <button className="w-full relative transition-all h-12 before:w-0 before:bg-purple-900 before:h-2 before:absolute before:bottom-0 before:right-1/2 hover:before:w-full hover:before:right-0 before:transition-all before:duration-500 text-purple-900 mx-auto font-Para drop-shadow hover:text-indigo-800">
          <span className="text-lg">Github</span>
        </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
