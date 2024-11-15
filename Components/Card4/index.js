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
      className="  w-auto mx-3 bg-gray-50    p-1 shadow-lg  "
      style={{
        width,
        height,
        border: "1px solid #D1D5DB",
        borderRadius: "1rem",
        
      }}
    >
      <Image
        src={image}
        alt="cardicon"
        className="object-cover bg-gray-100 shadow-lg w-full px-1 h-48 py-3 " 
        width={500}  
        height={250} 
        style={{ objectFit: "cover" }}  
        data-toggle="modal"
        data-target="#exampleModal"
        
      />

      <div className=" p-2">
        <h6 className="font-weight-bold text-xl text-left text-gray-800">
          {heading}
        </h6>

        <p className="text-sm text-left text-gray-600 line-clamp-3">
          {subheading}
        </p>
      </div>
    </div>
  );
}
