import React, { useState } from "react";

export default function Project(props) {
  const [isFolded, setIsFolded] = useState(false);

  const getTechElements = (tech) => {
    const elements = [];
    for (var i = 0, size = tech.length; i < size; i++) {
      elements.push(<p className="text-xs md:text-base">/{tech[i]}/</p>);
    }
    return elements;
  };

  return (
    <div id="projects" className="flex flex-row w-full">
      <div className="flex-row w-full">
        <div className="flex w-full space-x-1 mx-6">
          <button
            onClick={() => {
              setIsFolded(!isFolded);
            }}
          >
            <h1 className="hover:animate-pulse">{isFolded ? "[+]" : "[-]"}</h1>
          </button>
          <div id="home" className="hover:animate-pulse flex text-xl">
            <p className="hover:animate-pulse font-bold italic">
              {props.title}
            </p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") +
            "flex flex-col bg-[#272e33] mt-1 w-full"
          }
        >
          <div className="px-14">
            <p>Year: {props.year}</p>
            <p>Made for: {props.madeFor}</p>
            <p className="mb-2 text-[#7e7e7e] text-sm md:text-md">
              {props.description}
            </p>
            <p>Tools:</p>
            <div className="flex flex-row flex-wrap space-x-3">
              {getTechElements(props.tech)}
            </div>
            <a
              className="text-[#D699b6] font-bold hover:opacity-50 text-xs md:text-base"
              href={props.link}
            >
              {props.link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
