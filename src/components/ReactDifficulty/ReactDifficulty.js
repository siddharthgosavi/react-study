import React, { useState } from "react";
import DisplayDifficulty from "./DisplayDifficulty";
import MenuList from "./MenuList";

function ReactDifficulty() {
  const [selectedLevel, setSelectedLevel] = useState("");

  const changeLevel = (value) => {
    setSelectedLevel(value);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-3xl font-bold text-center text-white">
        Set the Difficulty Level.
      </h1>
      <div className="md:flex-row flex flex-col gap-4 justify-evenly p-4 items-center">
        <MenuList changeLevel={changeLevel} selectedLevel={selectedLevel} />
        <DisplayDifficulty selectedLevel={selectedLevel} />
      </div>
    </div>
  );
}

export default ReactDifficulty;
