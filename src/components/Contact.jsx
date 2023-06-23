import React, { useState } from "react";

export default function Contact() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div id="contact" className="flex flex-row w-full">
      <div className="flex-row w-full">
        <div className="flex w-full">
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
            (isFolded ? "hidden " : "") + "flex flex-col bg-[#272e33] mt-1 w-full"
          }
        >
          <div className="m-2 ">
            <h2>Email</h2>
            <a href="mailto:philipganem@gmail.com"><h3 className="text-[#D699b6] hover:opacity-50 italic">philipganem@gmail.com</h3></a>
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/phil-ganem/"><h3 className="text-[#D699b6] hover:opacity-50 italic">/in/phil-ganem/</h3></a>
          </div>
        </div>
      </div>
    </div>
  );
}
