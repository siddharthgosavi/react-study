import React from "react";

const DisplayDifficulty = ({ selectedLevel }) => {
  return (
    <div className="container flex w-[250px] h-[250px] justify-center items-center py-10 text-xl font-bold rounded-xl bg-white/10 shadow-lg ring-1 ring-white/10 text-gray-800 text-white [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.9)]">
      {selectedLevel ? (
        <p className="uppercase ">{selectedLevel}</p>
      ) : (
        "Select difficulty level"
      )}
    </div>
  );
};

export default DisplayDifficulty;
