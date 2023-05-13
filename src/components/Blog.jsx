import React, { useState } from "react";

export default function Blog() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div className=" flex flex-row">
      <div className="flex-row">
        <div className="flex">
          <button
            onClick={() => {
              setIsFolded(!isFolded);
            }}
          >
            <h1 className="hover:animate-pulse">{isFolded ? "[+]" : "[-]"}</h1>
          </button>
          <div id="home" className="hover:animate-pulse flex text-xl">
            <p>[B]</p>
            <p className="hover:animate-pulse text-[#A7C080]">log</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1"
          }
        >
          <div className="m-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus deserunt dolores fugiat et necessitatibus, illo
              nostrum reprehenderit aliquam magnam praesentium sequi explicabo
              dignissimos placeat iure, numquam consectetur a. Omnis, rerum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
