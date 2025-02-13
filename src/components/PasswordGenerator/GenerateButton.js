import React, { useRef, useState } from "react";

const GenerateButton = ({ generateValue, setResult }) => {
  const charsUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const charsLower = ["abcdefghijklmnopqrstuvwxyz"];
  const nums = ["1234567890"];
  const specialChars = ["~!#$%^&*()_+=/\\[]{}<>?"];

  const [animate, setAnimate] = useState("");
  const first = useRef();
  const createAnimation = () => {
    setAnimate("-translate-y-[2px] inset-shadow-sm  inset-shadow-indigo-500");
    setTimeout(() => {
      setAnimate("");
    }, 200);
  };

  const generatePassword = () => {
    createAnimation()
    let result = " ";
    var input = "";
    input += charsLower;
    if (generateValue.uppercase) {
      input += charsUpper;
    }

    if (generateValue.numbers) {
      input += nums;
    }

    if (generateValue.specials) {
      input += specialChars;
    }
    const charsLength = input.length;
    for (let i = 0; i < generateValue.size; i++) {
      result += input.charAt(Math.floor(Math.random() * charsLength));
    }
    setResult(result);
  };
  return (
    <div className="flex p-6 text-3xl font-bold text-white justify-center">
      <button
        ref={first}
        onClick={generatePassword}
        type="button"
        className={animate + " cursor-pointer bg-gradient-to-r from-[#0f172a]  to-[#334155] p-4 rounded-lg shadow-md shadow-gray-400"}
      >
        Generate
      </button>
    </div>
  );
};

export default GenerateButton;
