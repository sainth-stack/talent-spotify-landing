import Button from "../Components/Button";
import React from "react";
import ListPoints from "./ListPoints";
import Image from "next/image";
import performance from '../assets/svg/performance.svg'
import dot from "../assets/svg/dot.svg";
import yellowdot from "../assets/svg/yellowdot.svg";
import checkbox from '../assets/svg/checkbox.svg'
// import { en,fr } from "../locales";
// import en from "../locales/en";
// import fr from "../locales/fr";
import { useTranslation, Trans } from "next-i18next";
import LandingPageBottom from "./LandingPageBottom";
export function Content({
  image1,
  list1,
  list2,
  list11,
  list21,
  image2,
  list31,
  list32,
  list41,
  list42,
  image4,
  image5,
  list51,
  list52,
  image6,
  image7,
  listH,
  showPopup,
  showFreeTrail,
  forwardRef
}) {
  // const router = useRouter();
  // const {locale} = router;
  // const t = locale === 'en' ? en : fr;
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid mt-5 p-0 m-0">
      <List1 image1={image1} list1={list1} list2={list2} />
      <div className="d-flex flex-wrap align-items-start justify-content-between mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
        <div className="d-block d-lg-none imagePic col-md-5 p-0 mt65">
          <Image src={image4} alt="image1" className="imagePic" />
        </div>
        <ListPoints
          heading="Agile Business Execution"
          subheading=""
          list1={list41}
          list2={list42}
          link=""
        />
        <div className="d-none d-lg-block imagePic col-md-5 p-0 mt75">
          <Image src={image4} alt="image1" className="imagePic" />
        </div>
      </div>
      <div className=" d-flex flex-wrap align-items-start justify-content-between  mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
        <div className="imagePic col-md-5  m-0 p-0">
          <Image src={image2} alt="image1" className="imagePic" />
        </div>
        <ListPoints
          heading="Gamified Rewards and Recognition"
          // subheading="Build Trust. Boost Engagement"
          list1={list31}
          list2={list32}
          link={"rewards"}
        />
        {/* <div className="imagePic col-md-5  m-0 p-0">
          <Image src={image2} alt="image1" className="imagePic" />
        </div> */}
      </div>
      <div className=" d-flex flex-wrap align-items-start justify-content-between  mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
        <div className="d-block d-lg-none imagePic col-md-5 p-0 mt65">
          <Image src={image7} alt="image1" className="imagePic" />
        </div>
        <ListPoints
          heading="Objective and Insightful Employee Review"
          subheading=""
          list1={list11}
          list2={list21}
          link=""
        />
        <div className="d-none d-lg-block imagePic col-md-5 p-0 mt75">
          <Image src={image7} alt="image1" className="imagePic" />
        </div>
      </div>
      <div ref={forwardRef} className=" d-flex flex-wrap align-items-start justify-content-between  mt-lg-5 mb-lg-2 pb-lg-4 pt-lg-5">
        <div className="imagePic col-md-5  m-0 p-0 ml-5">
          <div className="embed-responsive embed-responsive-16by9 monetary">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowfullscreen></iframe>
          </div>
        </div>
        <div className="leftbg">
          <div className="leftinnerdiv">
            <h3 className="heading1 font-weight-bold">
              <div className="yellowDot">
                <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
              </div>
              <span style={{ width: '450px', display: 'flex' }}>How it works?</span>
            </h3>
            <div style={{ width: 50, height: 3, marginTop: -5, background: "black", border: "1px solid black" }} className="mb-4" />
            {/* {list1.length > 0 &&
              list1.map((item, index) => (
                <p className="list-item" key={index}>
                  {item}
                </p>
              ))} */}
            {listH.length > 0 &&
              listH.map((item, index) => (
                <p className="list-item" key={index}>
                  <Image src={checkbox} alt="dot" className="dotSize" />
                  <span className="ml-2">{item}</span>
                </p>
              ))}
            {
              <div style={{
                display: "flex", justifyContent: 'center',
                padding: '10px'
              }}>
                <Button
                  className="border-0 bg-green text-white mt-4 w-90 pl-3 pr-3"
                  style={{ width: '361px', display: "flex", justifyContent: 'center', padding: '30px' }}
                  text="Start FREE Trial & Consultancy"
                  handleClick={() => showFreeTrail()}
                />
              </div>
            }
          </div>
        </div>
        {/* <div className="imagePic col-md-5  m-0 p-0">
          <div className="embed-responsive embed-responsive-16by9 monetary">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowfullscreen></iframe>
          </div>        </div> */}
      </div>
      {/* enable in phase 2 */}
      {/*<List2 list11={list11} list21={list21} image4={performance} />
      <div className=" d-flex flex-wrap align-items-start justify-content-between  mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
        <div className="imagePic col-md-5  m-0 p-0">
          <Image src={image5} alt="image1" className="imagePic" />
        </div>
        <ListPoints
          heading="SWOT"
          subheading="Analysis"
          list1={list51}
          list2={list52}
        />
      </div>*/}
      {/* <div className="container text-center mt-5 mb-5 pt-5">
        <h4 className="text-green font-weight-bold">
          <Trans>
            Want to see how we can take your company on the growth journey?
          </Trans>
          //{t.growthJourney}
        </h4>
        <Button
          className="border-0 bg-green text-white mt-4"
          text="Schedule Demo"
          handleClick={() => showPopup()}
        />
      </div> */}
      <LandingPageBottom showPopup={showPopup} showFreeTrail={showFreeTrail} />
    </div>
  );
}

function List1({ image1, list1, list2 }) {
  return (
    <div className="d-flex flex-wrap align-items-start justify-content-between mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
      <div className="imagePic col-md-5  m-0 p-0">
        <Image src={image1} alt="image1" className="imagePic" />
      </div>
      <ListPoints
        heading="AI-powered OKR Management"
        // subheading="Simple. Focus. Measure. Achieve."
        list1={list1}
        list2={list2}
        link="/okr"
      />
    </div>
  );
}
