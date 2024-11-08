import Image from "next/image";
import React from "react";

export default function Card3({ data, top, setShowPopup }) {
  const head = data.heading === "Pro Plan" ? "#2A8881" : "";
  const back = data.heading === "Pro Plan" ? "white" : "#2A8881";
  const desc = data.description === "Pro + Integration" ? "20" : "13";
  const fw = data.description === "Pro + Integration" ? "700" : "400";
  const lh = data.description === "Pro + Integration" ? "30" : "19.5";
  return (
    <div className=" bg-white shadow-lg w-[300px] mb-5 mt-2 flex flex-col items-center justify-start rounded-lg border border-gray-300 p-4">
      {top && (
        <p className="text-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 text-white rounded-full mt-[-3rem] font-bold p-2 text-sm w-full">
          MOST POPULAR PLAN
        </p>
      )}

      <div className="text-center mt-1 w-full">
        <h2 className=" text-xl font-bold font-poppins ">{data.heading}</h2>
        <p className="font-bold text-sm font-poppins">{data.description}</p>
        {/* <h5 className=" text-lg font-semibold font-poppins leading-tight mt-2">
          {data.name}
        </h5> */}
      </div>

      <div className="m-2 p-2  mt-0 text-center w-full">
        <button
          className={` try_for_free ${
            top ? "top" : ""
          } rounded-lg font-bold border p-2 transition duration-300 ease-in-out w-full
  `}
          onClick={() => setShowPopup(true)}
        >
          {data.buttonText}
        </button>
      </div>

      <hr className="w-full border-gray-300 my-2" />

      <div className="default flex flex-col items-start w-full">
        <p className="font-bold text-sm font-poppins text-left">
          {data.description2}
        </p>

        <ul className=" mx-3 text-sm font-poppins w-full  ">
          {data.keypoints.map((item, index) => (
            <li className="mt-2 mb-2 pt-2 pb-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
