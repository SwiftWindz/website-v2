import React, { useState } from "react";
import TimelineElement from "./TimelineElement";

export default function Experience() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div id="experience" className=" flex flex-row">
      <div className="flex-row w-full">
        <div className="flex">
          <button
            onClick={() => {
              setIsFolded(!isFolded);
            }}
          >
            <h1 className="hover:animate-pulse">{isFolded ? "[+]" : "[-]"}</h1>
          </button>
          <div id="home" className="hover:animate-pulse flex text-xl">
            <p>[E]</p>
            <p className="hover:animate-pulse text-[#A7C080]">xperience</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1"
          }
        >
          <div className="m-2">
            <ol class="border-l border-neutral-300 dark:border-neutral-500">
            <TimelineElement
                date={"Jan 2025 - present"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Part Time Software Engineer at{" "}
                    <a
                      href="https://www.paychex.com/"
                      className="text-[#D699b6] font-bold hover:opacity-50"
                    >
                      Paychex
                    </a>
                  </h4>
                }
                description={
                  <p className="mb-3 text-[#7e7e7e]">
                    I returned to Paychex as a part-time software
                    engineer a few months after completing my second
                    university co-op. Rejoining the same team, I continue
                    to work on previous projects while also taking on new responsibilities.
                  </p>
                }
            ></TimelineElement>
            <TimelineElement
                date={"Oct 2024 - Jan 2025"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Part Time Software Engineer at{" "}
                    <a
                      href="https://bryx.com/"
                      className="text-[#D699b6] font-bold hover:opacity-50"
                    >
                      Bryx
                    </a>
                  </h4>
                }
                description={
                  <p className="mb-3 text-[#7e7e7e]">
                    Worked part-time as a software engineer at Bryx, a company specializing in
                    technology solutions for emergency services. Contributed to maintaining and
                    enhancing their cloud infrastructure.
                  </p>
                }
              ></TimelineElement>
              <TimelineElement
                date={"Jan 2024 - Aug 2024"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    University Co-op with{" "}
                    <a
                      href="https://www.paychex.com/"
                      className="text-[#D699b6] font-bold hover:opacity-50"
                    >
                      Paychex
                    </a>
                  </h4>
                }
                description={
                  <p className="mb-3 text-[#7e7e7e]">
                    For my second university co-op I was employed by Paychex as
                    a software engineer intern. Paychex is a company that
                    specializes in payroll and HR solutions. Over the course of
                    my stay with Paychex, I had the privilege of working with
                    two fantastic agile teams specializing in DevOps and
                    internal software development. My personal focus was feature
                    development and maintenance of testing and quality assurance
                    software that services approximately 160 agile teams.
                  </p>
                }
              ></TimelineElement>
              <TimelineElement
                date={"Jun 2023 - Dec 2024"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Promoted to Head Undergraduate Teaching Assistant at the{" "}
                    <a
                      href="https://www.rit.edu/"
                      className="text-[#D699b6] font-bold hover:opacity-50"
                    >
                    Rochester Institute of Technology
                    </a>
                  </h4>
                }
                description={
                  <p className="mb-3 text-[#7e7e7e]">
                    My responsibilities as a course assistant were elevated to
                    include assisting in creating and proof reading course
                    material, including exams and homeworks, and assisting and
                    guiding ~30 other course assistants. At the time of my hire,
                    I also assisted in creating content for a new course at RIT,
                    GCIS-127.
                  </p>
                }
              ></TimelineElement>
              <TimelineElement
                date={"Jan 2023 - Aug 2023"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    University Co-op with{" "}
                    <a
                      href="https://measuresforjustice.org/"
                      className="text-[#D699b6] font-bold hover:opacity-50"
                    >
                      Measures for Justice
                    </a>
                  </h4>
                }
                description={
                  <p className="mb-3 text-[#7e7e7e]">
                    For my first university co-op I was employed by Measures for
                    Justice as a software engineer intern. Measures for Justice
                    is an organisation whose goal is to make criminal justice
                    data more accessable and understandable. My primary focus
                    was maintaining their data pipeline through targeted code
                    changes with the Kotlin programming language.
                  </p>
                }
              ></TimelineElement>
              <TimelineElement
                date={"Aug 2021 - Dec 2022"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                  Undergraduate Teaching Assistant at the{" "}
                  <a
                    href="https://www.rit.edu/"
                    className="text-[#D699b6] font-bold hover:opacity-50"
                  >
                  Rochester Institute of Technology
                  </a>
                </h4>
                }
                description={
                  <p className="mb-3 text-[#7e7e7e]">
                    Became employed by my university as an undergraduate
                    teaching assistant for the university intro programming
                    courses, GCIS-123 and GCIS-124. I directly assisted in 
                    classroom instruction through one-on-ones with students 
                    and by grading homework assignments and exams.
                  </p>
                }
              ></TimelineElement>
            </ol>
            <a
              className="text-[#D699b6] font-bold hover:opacity-50"
              href="./Resume.pdf"
            >
              View Full Résumé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
