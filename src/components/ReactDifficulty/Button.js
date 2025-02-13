import React, { useRef, useState } from "react";

function Button({ name }) {
  const [animate, setAnimate] = useState("");
  const first = useRef();
  const createAnimation = () => {
    setAnimate("-translate-y-[2px] inset-shadow-sm  inset-shadow-indigo-500");
    setTimeout(() => {
      setAnimate("");
    }, 200);
  };
  return (
    <button
      ref={first}
      onClick={createAnimation}
      className={
        animate +
        " ring-1 ring-gray-400 shadow-lg border-black cursor-pointer mx-1 h-[28px] w-26 px-1 rounded-md bg-slate-200 hover:bg-gray-200 group "
      }
    >
      <p>{name}</p>
    </button>
  );
}

export default Button;
