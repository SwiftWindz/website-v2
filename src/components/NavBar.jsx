import React from "react";

export default function NavBar() {
  return (
    <div className="hidden md:flex w-full mt-2">
      <ul className="flex justify-center w-full space-x-4 text-sm md:text-base">
        <button className="hover:animate-pulse flex">
          <a href="#home" className="flex">
            <p>[H]</p>
            <li className="hover:animate-pulse text-[#E69875]">ome</li>
          </a>
        </button>
        <button className="hover:animate-pulse">
          <a href="#about" className="flex">
            <p>[A]</p>
            <li className="hover:animate-pulse text-[#DBBC7F]">bout</li>
          </a>
        </button>
        <button className="hover:animate-pulse flex">
          <a href="#stats" className="flex">
            <p>[S]</p>
            <li className="hover:animate-pulse text-[#7FBBB3]">tats</li>
          </a>
        </button>
        <button className="hover:animate-pulse flex">
          <a href="#timeline" className="flex">
            <p>[T]</p>
            <li className="text-[#A7C080]">imeline</li>
          </a>
        </button>
        <button className="hover:animate-pulse flex">
          <a href="#contact" className="flex">
            <p>[C]</p>
            <li className="text-[#83C092]">ontact</li>
          </a>
        </button>
      </ul>
    </div>
  );
}
