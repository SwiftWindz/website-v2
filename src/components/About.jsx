import React, { useState } from "react";

export default function About() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div id="about" className=" flex flex-row">
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
            <p>[A]</p>
            <p className="hover:animate-pulse text-[#E69875]">bout</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1"
          }
        >
          <div className="m-2 flex flex-col space-y-4 text-md md:text-lg">
            <p>
              My name is Phil Ganem and I'm a student and part time software engineer,
              activist, and coffee snob based out of Rochester, New York. I am
              currently in my fifth year of the{" "}
              <a
                href="https://www.rit.edu/"
                className="text-[#D699b6] font-bold hover:opacity-50"
              >
                Rochester Institute of Technology
              </a>
              's five year software engineering BS program.
            </p>
            <p>
              When I'm not working or studying, I typically find myself outside,
              reading, playing videogames, making music, hanging out with my
              girlfriend, or taking photos of{" "}
              <a
                href="/tan.jpeg"
                className="text-[#D699b6] font-bold hover:opacity-50"
              >
                Tangerine the Crested Gecko
              </a>
              , my pet lizard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
