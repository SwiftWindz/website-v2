import React, { useState } from "react";

export default function Contact() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div className="w-screen flex flex-row mt-4">
      <div className="md:w-[20%]"></div>

      <div className=" md:w-[60%] flex-row">
        <div className="flex">
          <button
            onClick={() => {
              setIsFolded(!isFolded);
            }}
          >
            <h1 className="hover:animate-pulse">{isFolded ? "[+]" : "[-]"}</h1>
          </button>
          <div id="home" className="hover:animate-pulse flex text-xl">
            <p>[C]</p>
            <p className="hover:animate-pulse text-[#83C092]">ontact</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1"
          }
        >
          <div className="m-2">
            <h2>[E]mail</h2>
            <h3>philipganem@gmail.com</h3>
          </div>
        </div>
      </div>

      <div className=" md:w-[20%] "></div>
    </div>
  );
}
