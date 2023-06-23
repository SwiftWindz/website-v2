import React, { useState } from "react";

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
            <p className="hover:animate-pulse text-[#7FBBB3]">tats</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1"
          }
        >
          <div className="flex flex-col justify-end">
            <div className="m-2 overflow-x-scroll flex flex-row justify-center md:justify-start">
              <div className="flex flex-col p-2 justify-end">
                <div>
                  {/* Books */}
                  <ul>
                    <li className="w-full bg-gray-100 p-1 rounded-md"></li>
                  </ul>
                </div>
                <h2>Books Read</h2>
              </div>

              <div className="flex flex-col p-2 justify-end">
                <div className="space-y-1">
                  {/* Books */}
                  <ul>
                    <li className="w-full bg-gray-100 p-1 rounded-md"></li>
                  </ul>
                  <ul>
                    <li className="w-full bg-gray-100 p-1 rounded-md"></li>
                  </ul>
                  <ul>
                    <li className="w-full bg-gray-100 p-1 rounded-md"></li>
                  </ul>
                  <ul>
                    <li className="w-full bg-gray-100 p-1 rounded-md"></li>
                  </ul>
                  <ul>
                    <li className="w-full bg-gray-100 p-1 rounded-md"></li>
                  </ul>
                </div>
                <h2>Dogs pet</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
