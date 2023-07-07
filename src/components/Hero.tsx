import { PortfolioData } from "@/data";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between p-4 bg-primary-600 min-h-[calc(100vh-(25vh+4rem))] text-white">
      <div className="flex-[0.4] flex items-center justify-center">
        <div className="relative h-60 md:h-auto md:w-9/12 aspect-square rounded-full overflow-hidden">
          <Image
            src="/profile.png"
            alt="aryaman image"
            fill
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex-[0.6] p-4 self-start mt-4 md:mt-0">
        <div className="text-2xl text-yellow-300">{PortfolioData.tagline}</div>
        <div className="text-5xl font-black">{PortfolioData.name}</div>
        <div className="mt-4 text-lg">{PortfolioData.about}</div>
        {/* <div className="mt-4 text-lg">{PortfolioData.secondaryAbout}</div> */}

        <div className="mt-5">
          <a
            href="/Aryaman_Resume_1.pdf"
            download
            className="px-6 py-3 rounded-md bg-white text-primary shadow-sm hover:shadow-md transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
