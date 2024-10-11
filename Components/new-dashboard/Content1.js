import Button from "../Button";
import React from "react";
import ListPoints from "../ListPoints";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import LandingPageBottom from "../LandingPageBottom";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import useWindowSize from "../../utilities/UseWindowSize";
export function Content({
  data,
  showPopup,
  showFreeTrail,
  forwardRef,
  homerefScroll,
  okrrefScroll,
  awardsScroll
}) {
  return (
    <div className="container-fluid mt-5 p-2">
      <Section1 showPopup={showPopup} homerefScroll={homerefScroll} />
      <div ref={okrrefScroll}>
        {data.map((item) => {
          return (
            <List1 image={item.image} title={item.title} list={item.list} reverse={item.reverse} key={"any"} showPopup={showPopup} path={item.path} height={item.height} width={item.width} />
          )
        })}
      </div>
      <LandingPageBottom showPopup={showPopup} showFreeTrail={showFreeTrail} awardsScroll={awardsScroll} />
      <Section2 />
    </div>
  );
}


function List1({ image, title, list, reverse, path, showPopup, height, width }) {
  const isMobile = useWindowSize();
  return (
    <div
      className={`d-flex flex-wrap align-items-start justify-content-center mt-4 mb-4 pb-4 pt-4 ${reverse ? 'flex-row-reverse' : ''}`}
      style={{
        gap: '15%',
        marginTop: '5%',
        flexDirection: isMobile ? 'column' : 'row', // Stack items vertically on mobile
      }}
    >
      <div
        className="m-0 p-0"
        style={{
          maxWidth: isMobile ? '100%' : '50%', // Full width on mobile
          paddingRight: reverse && !isMobile ? '20px' : '0',
          paddingLeft: !reverse && !isMobile ? '20px' : '0',
          display: 'flex',
          justifyContent: 'center', // Center the image on mobile
        }}
      >
        <Image
          src={image}
          alt={title}
          className="imagePic"
          width={width ? width : 550} // You can adjust this based on your design
          height={height ? height : 350} // You can adjust this based on your design
          style={{
            objectFit: 'cover',
            borderRadius: '10px',
            width: isMobile ? '100%' : 'auto', // Full width on mobile
            height: isMobile ? 'auto' : 'auto', // Maintain aspect ratio on mobile
          }}
        />
      </div>
      <div
        style={{
          maxWidth: isMobile ? '100%' : '50%',
          width: isMobile ? '100%' : '30%', // Full width on mobile
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start', // Center items on mobile
          
        }}
      >
        <div style={{ textAlign: isMobile ? 'center' : 'left', width: '100%' }}>{title}</div> {/* Center title on mobile */}
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

export default List1;

