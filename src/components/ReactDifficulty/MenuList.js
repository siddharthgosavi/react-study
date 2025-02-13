import React from "react";
import MenuListitem from "./MenuListitem";

const MenuList = ({ changeLevel, selectedLevel }) => {
  return (
    <div className="container flex flex-col gap-[11.5px] w-[250px] h-[250px] rounded-xl bg-white/10 shadow-lg ring-1 ring-white/10 text-gray-800">
      {["Very Easy", "Easy", "Medium", "Hard", "Very Hard"].map(
        (level, index) => (
          <MenuListitem
            selectedLevel={selectedLevel}
            changeLevel={changeLevel}
            key={index}
            level={level}
          />
        )
      )}
    </div>
  );
};

export default MenuList;
