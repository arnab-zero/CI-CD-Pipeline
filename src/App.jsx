import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-semibold text-3xl py-5">
        A Simple React App Ready For Deployment
      </div>
      <div className="card">
        <div className="flex justify-center">
          <button
            className="border-blue-700 bg-blue-200 font-medium max-w-fit px-4 py-2 rounded-lg mb-2"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
        <div>
          <button
            className="text-lg font-light underline hover:text-gray-400"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
        <div className="text-base font-extralight my-10">
          Deployed on{" "}
          <span className="font-light text-slate-400 underline">Vercel</span>{" "}
          Successfully
        </div>
        <div className="text-slate-500 font-extralight">Made Some Changes</div>
      </div>
    </>
  );
}

export default App;
