"use client";

import { FormEvent, useState } from "react";

export const HomePage = () => {
  const initialValue = "Your name";
  const [inputVal, setInputVal] = useState("");
  const [textToHex, setTextToHex] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let hex = "";
    for (let i = 0; i < inputVal.length; i++) {
      const charCode = inputVal.charCodeAt(i).toString(16).toUpperCase();
      hex += charCode.length === 1 ? "0" + charCode : charCode;
    }
    setTextToHex(hex.split("20"));
  };
  return (
    <>
      <div className="bg-slate-900 border-slate-500 border-b-2 p-4">
        <span className="text-2xl text-slate-300">Snowchild </span>
        <span className="text-lg text-slate-300">: Hex Code Generator</span>
      </div>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col gap-y-1 w-fit border-2 border-slate-500 bg-slate-900 p-4 rounded-md">
          <div className="text-lg">Enter your name:</div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
            <input
              type="text"
              placeholder="Type your name...."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                }
              }}
              className="rounded p-2 text-slate-950 text-lg"
            />
            <button
              type="submit"
              className="border-2 text-lg border-orange-500 bg-orange-500 text-white rounded"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="border-2 border-slate-500 w-fit bg-slate-900 p-4 rounded-md">
          <div className="flex flex-row gap-x-3 text-xl">
            {textToHex.length > 0
              ? textToHex.map((item, key) => <div key={key}>{item}</div>)
              : "Your converted text"}
          </div>
          <div className="text-slate-500">
            {inputVal ? inputVal : initialValue}
          </div>
        </div>
      </div>
    </>
  );
};
