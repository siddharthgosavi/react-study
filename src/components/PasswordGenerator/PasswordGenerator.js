import React, { useState } from "react";
import GenerateButton from "./GenerateButton";
import CheckList from "./CheckList";
import Header from "./Header";
import Result from "./Result";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordGenerator = () => {
  const [generateValue, setGenerateValue] = useState({
    size: 12,
    uppercase: true,
    numbers: true,
    specials: false,
  });

  const [result, setResult] = useState("");

  return (
    <div className="bg-gradient-to-r from-black via-indigo-900 to-gray-700 p-8">
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="lg:w-[50%] mx-auto rounded-lg h-fit bg-white/20 flex flex-col divide-solid divide-y-2 divide-black/20">
        <Header />
        <CheckList
          generateValue={generateValue}
          setGenerateValue={setGenerateValue}
        />
        <GenerateButton generateValue={generateValue} setResult={setResult} />
        <Result result={result} setResult={setResult} />
      </div>
    </div>
  );
};

export default PasswordGenerator;
