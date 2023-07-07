import { PortfolioData } from "@/data";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="p-4 bg-zinc-100">
        <div className="text-center text-4xl font-black mt-2">Projects</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 mt-6">
          {PortfolioData.projects.map((prj, i) => (
            <div
              className="w-full sm:w-80 h-full shadow-sm bg-primary-400 text-white p-4 rounded-md"
              key={prj.title + i}
            >
              <div className="text-2xl font-black">{prj.title}</div>
              <div className="text-xl my-2">{prj.duration}</div>
              <div className="mt-2">{prj.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
