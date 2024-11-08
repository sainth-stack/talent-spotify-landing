import React from "react";

function Avatar({ name, image, rating, size = "md", className = "" }) {
  return (
    <div className={`flex items-center mb-4 ${className}`}>
      <img
        src={image}
        alt={name}
        className={`w-${size} h-${size} rounded-full mr-4`}
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-gray-600">{rating}</p>
      </div>
    </div>
  );
}

export default Avatar;
