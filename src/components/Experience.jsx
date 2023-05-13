import React, { useState } from "react";

export default function Experience() {
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus deserunt dolores fugiat et necessitatibus, illo
              nostrum reprehenderit aliquam magnam praesentium sequi explicabo
              dignissimos placeat iure, numquam consectetur a. Omnis, rerum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis eveniet, repellendus sit numquam sapiente dolorum atque,
              incidunt velit totam tenetur est asperiores explicabo libero. Eius
              veniam itaque, eos magnam, cum facilis aperiam rerum dolore
              recusandae veritatis ab error iste quae cupiditate harum? Aut
              tempora beatae culpa fuga, doloribus accusantium sint non a
              possimus suscipit laudantium facilis repudiandae asperiores eaque
              amet est velit nobis autem quo consequatur sequi necessitatibus?
              Praesentium, quis obcaecati sed, tempora doloremque incidunt
              aliquam quae debitis et corrupti veritatis omnis saepe excepturi
              quasi quidem perspiciatis vel, sapiente corporis dolorum. Deserunt
              ducimus recusandae, sed eius commodi vero reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
