import React, { useState } from "react";
import StatsElement from "./StatsElement";

export default function Stats() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div id="stats" className=" flex flex-row">
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
            <p>[S]</p>
            <p className="hover:animate-pulse text-[#DBBC7F]">tats</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1"
          }
        >
          <div className="flex flex-col justify-end text-xs md:text-base">
            <div className="m-2 overflow-x-scroll flex flex-row flex-wrap justify-center pt-2">
              <StatsElement title="Books Read" number={4}></StatsElement>
              <StatsElement title="Trips Taken" number={3}></StatsElement>
              <StatsElement title="Dogs Pet" number={3}></StatsElement>
              <StatsElement title="Goblins Slain" number={9}></StatsElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
