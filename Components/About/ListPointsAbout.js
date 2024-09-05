import React from "react";
import dot from "../../assets/svg/dot.svg";
import yellowdot from "../../assets/svg/yellowdot.svg";
import Image from "next/image";

export default function ListPointsAbout({
  heading,
  subheading,
  list1 = [],
  list2 = [],
}) {
  return (
    <div className="paragraph col-md-5">
      <h3 className="heading1 font-weight-bold">
        <div className="yellowDot">
          <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
        </div>
        {heading}
      </h3>
      <h5 className="subheading1">{subheading}</h5>
      <div style={{ width: 50, height: 3, marginTop: -5, background: "black", border: "1px solid black" }} className="mb-4" />
      {list1.length > 0 &&
        list1.map((item, index) => (
          <p className="list-item" key={index}>
            {item}
          </p>
        ))}
      {list2.length > 0 &&
        list2.map((item, index) => (
          <p className="list-item" key={index}>
            <Image src={dot} alt="dot" className="dotSize" />
            <span className="ml-2">{item}</span>
          </p>
        ))}
    </div>
  );
}
