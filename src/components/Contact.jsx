import React, { useState } from "react";

export default function Contact() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div className="flex flex-row w-full">
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
            <h3 className="text-[#414B50]">philipganem@gmail.com</h3>
            <h2>LinkedIn</h2>
            <h3 className="text-[#414B50]">/in/phil-ganem/</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
