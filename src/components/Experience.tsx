import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PortfolioData } from "@/data";

const Experience = () => {
  return (
    <div className="p-4 bg-zinc-100">
      <div className="text-center text-4xl font-black mt-2">Experience</div>
      <div className="mt-4">
        <VerticalTimeline lineColor="#2F2FD2">
          {PortfolioData.experience.map((exp, i) => (
            <VerticalTimelineElement
              key={exp.duration + i}
              className="vertical-timeline-element--work"
              contentStyle={
                i === 0 ? { background: "#2F2FD2", color: "#fff" } : {}
              }
              contentArrowStyle={
                i === 0
                  ? { borderRight: "7px solid #2F2FD2", color: "#fff" }
                  : {}
              }
              date={exp.duration}
              iconStyle={{ background: "#2F2FD2", color: "#fff" }}
              icon={<HiOutlineBuildingOffice2 />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                {exp.role}
              </h3>
              <div className="vertical-timeline-element-subtitle flex justify-between">
                <div>{exp.company}</div>
                <div>{exp.location}</div>
              </div>
              <ul className="m-5 list-disc">
                {exp.notes.map((note, i) => (
                  <li key={note + i}>{note}</li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {exp.skills.map((skill, index) => (
                  <div
                    key={skill + index}
                    className={`${
                      i === 0
                        ? "bg-white text-primary"
                        : "bg-primary-600 text-white"
                    } text-sm px-2 py-1 m-1 rounded-md`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
