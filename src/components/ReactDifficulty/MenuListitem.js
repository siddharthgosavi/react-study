import React from "react";
import Button from "./Button";

const MenuListitem = ({ level, changeLevel, selectedLevel }) => {
  const classes = selectedLevel === level ? "bg-purple-400" : "bg-white/20";

  const change = () => {
    changeLevel(level);
  };

  return (
    <div
      className={`p-[6.5px] flex w-full gap-4 first:rounded-t-xl last:rounded-b-xl shadow-lg hover:bg-purple-300 trasnition-all duration-300 ${classes}`}
    >
      <strong className="cursor-default">Set to :{" "}</strong>
      <span className=""  onClick={change}>
        <Button name={level} />
      </span>
    </div>
  );
};

export default MenuListitem;
