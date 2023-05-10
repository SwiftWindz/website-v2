import React, { useState } from "react";

export default function Home() {
  const [isFolded, setIsFolded] = useState(true);

  return (
    <div>
        <div className="w-screen flex flex-row mt-4">
            <div className="md:w-[20%] border">
                <h1 className="">1</h1>
            </div>
            
            <div className=" md:w-[60%] h-full">
                <button
                onClick={() => {
                    setIsFolded(!isFolded);
                }}
                >
                    <h1 className="hover:animate-pulse ">{isFolded ? "[+]" : "[-]"}</h1>
                </button>
                <div className={(isFolded ? "hidden " : "") + "flex flex-col"}>
                    <div className="hover:animate-pulse flex text-xl">
                        <p>[H]</p>
                        <p className="hover:animate-pulse text-[#E69875]">ome</p>
                    </div>
                    <div className="m-10">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt dolores fugiat et necessitatibus, illo nostrum reprehenderit aliquam magnam praesentium sequi explicabo dignissimos placeat iure, numquam consectetur a. Omnis, rerum?</p>
                    </div>
                </div>
            </div>

            <div className=" md:w-[20%] border">
                <h1>3</h1>
            </div>
        </div>
    </div>
  );
}
