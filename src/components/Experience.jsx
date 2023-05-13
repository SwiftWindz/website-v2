import React, { useState } from "react";
import TimelineElement from "./TimelineElement";

export default function Experience() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div className=" flex flex-row">
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
            <p>[T]</p>
            <p className="hover:animate-pulse text-[#7FBBB3]">imeline</p>
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
                date={"Mar 2023"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Started Attending a Music School for Night Lessons
                  </h4>
                }
                description={<p className="mb-3 text-[#414B50]">test</p>}
              ></TimelineElement>
              <TimelineElement
                date={"Feb 2023"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Got my First Pet, <a href="/tan.jpeg" className="text-[#D699b6] font-bold hover:opacity-50">Tangerine the Gecko</a>
                  </h4>
                }
                description={<p className="mb-3 text-[#414B50]">test</p>}
              ></TimelineElement>
              <TimelineElement
                date={"Jan 2023"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Started my First University Co-op with{" "}
                    <a
                      href="https://measuresforjustice.org/"
                      className="text-[#D699b6] font-bold hover:opacity-50"
                    >
                      Measures for Justice
                    </a>
                  </h4>
                }
                description={<p className="mb-3 text-[#414B50]">test</p>}
              ></TimelineElement>
              <TimelineElement
                date={"Aug 2022"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Got my first Apartment in NY
                  </h4>
                }
                description={<p className="mb-3 text-[#414B50]">test</p>}
              ></TimelineElement>
              <TimelineElement
                date={"Aug 2021"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Became an RIT Course Assistant
                  </h4>
                }
                description={<p className="mb-3 text-[#414B50]">test</p>}
              ></TimelineElement>

              <TimelineElement
                date={"Aug 2020"}
                title={
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Started University
                  </h4>
                }
                description={
                  <p className="mb-3 text-[#414B50]">
                    The beginning of my five year journey at the Rochester
                    Institute of Technology
                  </p>
                }
              ></TimelineElement>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
