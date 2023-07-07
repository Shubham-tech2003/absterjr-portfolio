import { PortfolioData } from "@/data";
import React from "react";
import { BsShieldFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div>
      <div className="p-4 bg-zinc-100">
        <div className="text-center text-4xl font-black mt-2">Skills</div>
        <div className="flex flex-wrap gap-6 items-center justify-center mt-6">
          {PortfolioData.skills.map((skill, i) => (
            <div className="text-lg px-3 py-1 bg-green-700 hover:bg-green-700 text-white rounded-md cursor-pointer" key={skill + i}>
             {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
