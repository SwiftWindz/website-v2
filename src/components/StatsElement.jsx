import React from "react";

export default function StatsElement(props) {
  const getRowElements = () => {
    const elements = [];
    for (var i = 0, size = props.number; i < size; i++) {
      elements.push(<li className="w-full bg-gray-100 p-1 rounded-md"></li>);
    }
    return elements;
  };

  return (
    <div className="flex flex-col p-2 justify-end">
      <ul className="space-y-1">{getRowElements()}</ul>
      <h2>{props.title}</h2>
    </div>
  );
}
