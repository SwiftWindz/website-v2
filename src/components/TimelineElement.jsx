import React from "react";

export default function TimelineElement(props) {
  return (
    <li>
      <div className="flex-start flex items-center pt-2">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] bg-[#D699b6]"></div>
        <p className="text-sm">{props.date}</p>
      </div>
      <div className="mb-6 ml-4 mt-2">
        {props.title}
        <p className="mb-3 text-[#414B50] italic">{props.description}</p>
      </div>
    </li>
  );
}
