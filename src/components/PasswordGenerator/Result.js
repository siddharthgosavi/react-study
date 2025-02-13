import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
function Result({ result, setResult }) {
  const textAreaRef = useRef(null);
  const [animate, setAnimate] = useState("");
  const first = useRef();
  const createAnimation = () => {
    setAnimate("-translate-y-[2px] inset-shadow-sm  inset-shadow-black");
    setTimeout(() => {
      setAnimate("");
    }, 200);
  };

  const copyToClipboard = () => {
    createAnimation()
    if (result) {
      let copyText = textAreaRef.current.innerText;
      let isCopy = copy(copyText);
      if (isCopy) {
        toast.success("Copied to Clipboard");
        setTimeout(() => {
          setResult("");
        }, 500);
      }
    } else {
      toast.error("First generate password");
    }
  };
  return (
    <div className="flex p-2 group justify-center">
      <button
        ref={first}
        onClick={copyToClipboard}
        className={
          animate +
          " w-full bg-transperent outline rounded-md inset-shadow-sm inset-shadow-gray-600 text-center text-4xl p-4 text-white cursor-copy"
        }
      >
        {result ? <p ref={textAreaRef}>{result}</p> : "Result"}
      </button>
      {result && (
        <span
          className="group-hover:opacity-100 transition-opacity bg-gray-800/10 px-1 text-[12px] text-gray-100 rounded-md absolute left-1/2 
    translate-x-28 translate-10 opacity-0 p-2 mx-auto"
        >
          Copy to clipboard
        </span>
      )}
    </div>
  );
}

export default Result;
