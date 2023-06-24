import React, { useState } from "react";
import Project from "./Project";

export default function Projects() {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div id="projects" className="flex flex-row w-full">
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
            <p>[P]</p>
            <p className="hover:animate-pulse text-[#7FBBB3]">rojects</p>
          </div>
        </div>
        <div
          className={
            (isFolded ? "hidden " : "") +
            "flex flex-col bg-[#272e33] mt-1 w-full"
          }
        >
          <div className="m-2 space-y-2">
            <Project
              title="Personal Website Version 2"
              description=""
              madeFor=""
              year="2023"
              tech={["React", "TailwindCSS"]}
              link=""
            ></Project>
            <Project
              title="Cocktail Cabinet"
              description="Cocktail Cabinet is a web application where users can find their favorite cocktail recipes from CocktailDB and be directed to a place where they can obtain the ingredients. Users can also have the application select a random cocktail recipe for them to try."
              madeFor=""
              year="2022"
              tech={["React", "TailwindCSS", "Axios"]}
              link="https://swiftwindz.github.io/Cocktail-Cabinet/"
            ></Project>
            <Project
              title="Personal Website Version 1"
              description=""
              madeFor=""
              year="2022"
              tech={["React", "TailwindCSS"]}
              link="https://github.com/SwiftWindz/personal-page"
            ></Project>
            <Project
              title="Multi-User Dungeon"
              description="Multi-User Dungeon, or MUD, is a 2D rogue-like game. Users could create and use accounts to save their progress. The game itself had two modes, endless and premade mode. In endless, players would navigate an endless procedural generated dungeon in search of loot to increase their profile score. They could quit and return at any time to the same map. In premade mode, players could choose from a list of premade dungeons with the ultimate goal of finding the goal room. Both modes had players fulfilling the aforementioned while encountering different enemies and obstacles."
              madeFor="RIT"
              year="2022"
              tech={["Java", "JavaFX", "JUnit", "PostgreSQL"]}
              link=""
            ></Project>
            <Project
              title="Nutrikit"
              description="Nutrikit is a full-stack web application that allows users to track their caloric intake and create meal plans. Users have the ability to create caloric and nutritional goals that they wished to meet or pick from preset ones provided to them. From here, users could select food to add to their meal plan and view the nutritional values of said food items provided from a database. The application would alert them if the selected foods did not meet their plan. Users could also submit their own foods to the database for future use in their meal plans."
              madeFor="RIT"
              year="2021"
              tech={["Python", "Flask", "React", "PostgreSQL"]}
              link=""
            ></Project>
            <Project
              title="Webcheckers"
              description="Webcheckers is an online multiplayer game of checkers. Players may make an account and select from other online players to play against. The game is operated with the same rules as American Checkers. The game also supports hint functionality, which allows the player to see the best move against their opponent and view the rules at any time."
              madeFor="RIT"
              year="2021"
              tech={["Java", "Java Spark", "JUnit"]}
              link=""
            ></Project>
          </div>
        </div>
      </div>
    </div>
  );
}
