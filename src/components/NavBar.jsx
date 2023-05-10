import React from 'react'

export default function NavBar() {
  return (
    <div className="w-full mt-2">
        <ul className="flex justify-center w-full space-x-4">
          <button className="hover:animate-pulse flex">
            <p>[H]</p>
            <li className="hover:animate-pulse text-[#E69875]">ome</li>
          </button>
          <button className="hover:animate-pulse flex">
            <p>[A]</p>
            <li className="hover:animate-pulse text-[#DBBC7F]">bout</li>
          </button>
          <button className="hover:animate-pulse flex">
            <p>[B]</p>
            <li className="hover:animate-pulse text-[#A7C080]">log</li>
          </button>
          <button className="hover:animate-pulse flex">
            <p>[T]</p>
            <li className="text-[#7FBBB3]">imeline</li>
          </button>
        </ul>
      </div>
  )
}
