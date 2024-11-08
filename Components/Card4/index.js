import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  image,
  heading,
  subheading,
  width = "100%",
  height = "auto",
}) {
  return (
    <div
      className=" bg-white card  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-5 shadow-lg shadow-lg "
      style={{
        width,
        height,
        border: "1px solid #D1D5DB",
        borderRadius: ".7rem",
        
      }}
    >
      <Image
        src={image}
        alt="cardicon"
        className="object-cover w-full h-48 rounded-lg" 
        width={400}  
        height={250} 
        style={{ objectFit: "cover" }}  
        data-toggle="modal"
        data-target="#exampleModal"
      />

      <div className="card-body p-4">
        <h6 className="font-weight-bold text-xl text-left text-gray-800">
          {heading}
        </h6>

        <p className="text-sm text-left text-gray-600">
          {subheading}
        </p>
      </div>
    </div>
  );
}
