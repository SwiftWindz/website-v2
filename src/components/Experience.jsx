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
                date={"Feb 2023"}
                title={"Got my First Pet, Tangerine the Gecko"}
                description={"Test"}
              ></TimelineElement>
              <TimelineElement
                date={"Jan 2023"}
                title={"Started my First University Co-op with Measures for Justice"}
                description={"Test"}
              ></TimelineElement>
              <TimelineElement
                date={"Aug 2022"}
                title={"Got my first Apartment in NY"}
                description={"Test"}
              ></TimelineElement>
              <TimelineElement
                date={"Aug 2021"}
                title={"Became an RIT Course Assistant"}
                description={""}
              ></TimelineElement>
              <TimelineElement
                date={"Aug 2020"}
                title={"Started University"}
                description={
                  "The beginning of my five year journey at the Rochester Institute of Technology"
                }
              ></TimelineElement>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
