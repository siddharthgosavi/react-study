import React from "react";
import { IoIosLock } from "react-icons/io";
function Header() {
  return (
    <div className="flex flex-row w-full p-6 h-18 justify-around items-center">
      <div className="rounded-lg w-1/2 text-white font-semibold text-xl">
        Password Generator
      </div>
      <div className="w-1/2  place-items-end">
        <IoIosLock className="text-4xl text-white" />
      </div>
      <div className="divide"></div>
    </div>
  );
}

export default Header;
