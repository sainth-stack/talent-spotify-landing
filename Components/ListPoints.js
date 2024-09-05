import Button from "../Components/Button";
import React from "react";
import dot from "../assets/svg/dot.svg";
import yellowdot from "../assets/svg/yellowdot.svg";
import Image from "next/image";
import Link from "next/link";
// import "./styles.scss"

export default function ListPoints({
  heading,
  subheading,
  list1 = [],
  list2 = [],
  link = "/"
}) {
  return (
    <div className="leftbg">
      <div className="leftinnerdiv">
        <h3 className="heading1 font-weight-bold">
          <div className="yellowDot">
            <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
          </div>
         <span style={{width:'450px',display:'flex'}}>{heading}</span>
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
          {
            link && <Link href={link}><Button text="Learn more" className="border-green bg-white text-green font-weight-bold" /></Link>
          }
      </div>
    </div>
  );
}
