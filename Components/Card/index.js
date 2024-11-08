import Image from "next/image";
import React from "react";

export default function Card({
  icon,
  heading,
  subheading,
  showSubheading = true,
  link,
  styles,
}) {
  return (
    <div
      className={` bg-white text-center  rounded-lg p-4 m-2 w-72 ${styles}`}
    >
      <Image
        src={icon}
        alt="card icon"
        className="mx-auto w-24 h-24 rounded-full"
      />
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-xl font-semibold mb-0">{heading}</h3>
        {link && (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2"
          >
            <Image src={link.icon} alt="LinkedIn" className="w-6 h-6" />
          </a>
        )}
      </div>
      {showSubheading && subheading && (
        <h6 className="text-gray-600 mb-2 text-left">{subheading}</h6>
      )}
      <div className="flex justify-end mt-2">
        <a href={link.url} className="text-blue-500 hover:underline">
          Know More
        </a>
      </div>
    </div>
  );
}
