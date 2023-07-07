import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiCertificate } from "react-icons/pi";
import { PortfolioData } from "@/data";

const Education = () => {
  return (
    <div className="p-4 bg-zinc-100">
      <div className="text-center text-4xl font-black mt-2">Education</div>
      <div className="mt-4">
        <VerticalTimeline lineColor="#2F2FD2">
          {PortfolioData.education.map((edu, i) => (
            <VerticalTimelineElement
              key={edu.course + i}
              className="vertical-timeline-element--work"
              contentStyle={
                i === 0 ? { background: "#2F2FD2", color: "#fff" } : {}
              }
              contentArrowStyle={
                i === 0
                  ? { borderRight: "7px solid #2F2FD2", color: "#fff" }
                  : {}
              }
              date={edu.duration}
              iconStyle={{ background: "#2F2FD2", color: "#fff" }}
              icon={<PiCertificate />}
            >
              <h3 className="vertical-timeline-element-title text-xl">
                {edu.school}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {edu.location}
              </h4>
              <p>{edu.course}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
