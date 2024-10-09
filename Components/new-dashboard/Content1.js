import Button from "../Button";
import React from "react";
import ListPoints from "../ListPoints";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import LandingPageBottom from "../LandingPageBottom";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
export function Content({
  data,
  showPopup,
  showFreeTrail,
  forwardRef
}) {
  return (
    <div className="container-fluid mt-5 p-2">
      <Section1 showPopup={showPopup}/>
      {data.map((item) => {
        return (
          <List1 image={item.image} title={item.title} list={item.list} reverse={item.reverse} key={"any"} showPopup={showPopup} path={item.path} />
        )
      })}
      <LandingPageBottom showPopup={showPopup} showFreeTrail={showFreeTrail} />
      <Section2 />
    </div>
  );
}

function List1({ image, title, list, reverse, path, showPopup }) {
  return (
    <div className={`d-flex flex-wrap align-items-start justify-content-center mt-4 mb-4 pb-4 pt-4 ${reverse ? 'flex-row-reverse' : ''}`} style={{ gap: '15%', marginTop: '5% !important' }}>
      <div className="m-0 p-0" style={{ maxWidth: '50%', paddingRight: reverse ? '20px' : '0', paddingLeft: reverse ? '0' : '20px' }}>
        <Image
          src={image}
          alt={title}
          className="imagePic"
          width={550} // You can adjust this based on your design
          height={350} // You can adjust this based on your design
          style={{ objectFit: 'cover', borderRadius: '10px' }} // Added styles for better fit
        />
      </div>
      <div style={{ maxWidth: '50%', width: '30%' }}>
        <ListPoints
          heading={title}
          list1={list} // Assuming ListPoints accepts a prop for a single list
          link={path} // Adjust the link as necessary
          showPopup={showPopup}
        />
      </div>
    </div>
  );
}
