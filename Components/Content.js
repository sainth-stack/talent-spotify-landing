import Button from "../Components/Button";
import React from "react";
import ListPoints from "./ListPoints";
import Image from "next/image";
import performance from '../assets/svg/performance.svg'
import { useRouter } from "next/router";
// import { en,fr } from "../locales";
// import en from "../locales/en";
// import fr from "../locales/fr";
import { useTranslation, Trans } from "next-i18next";
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
  showPopup,
}) {
  // const router = useRouter();
  // const {locale} = router;
  // const t = locale === 'en' ? en : fr;
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid mt-5 p-0 m-0">
      <List1 image1={image1} list1={list1} list2={list2} />
      <div className=" d-flex flex-wrap align-items-start justify-content-between  mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
        <div className="d-block d-lg-none imagePic col-md-5 p-0 mt65">
          <Image src={image2} alt="image1" className="imagePic" />
        </div>
        <ListPoints
          heading="Rewards and Recognition"
          subheading="Build Trust. Boost Engagement"
          list1={list31}
          list2={list32}
          link={"rewards"}
        />
        <div className="d-none d-lg-block imagePic col-md-5 p-0 mt75">
          <Image src={image2} alt="image1" className="imagePic" />
        </div>
      </div>
      <div className=" d-flex flex-wrap align-items-start justify-content-between  mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
        <div className="imagePic col-md-5  m-0 p-0">
          <Image src={image4} alt="image1" className="imagePic" />
        </div>
        <ListPoints
          heading="Task Management"
          subheading="Track Better. Do More."
          list1={list41}
          list2={list42}
          link=""
        />
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
      <div className="container text-center mt-5 mb-5 pt-5">
        <h4 className="text-green font-weight-bold">
          <Trans>
            Want to see how we can take your company on the growth journey?
          </Trans>
          {/* {t.growthJourney} */}
        </h4>
        <Button
          className="border-0 bg-green text-white mt-4"
          text="Schedule Demo"
          handleClick={() => showPopup()}
        />
      </div>
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
        heading="OKR Management"
        subheading="Simple. Focus. Measure. Achieve."
        list1={list1}
        list2={list2}
        link="/okr"
      />
    </div>
  );
}

function List2({ list11, list21, image4 }) {
  return (
    <div className="d-flex flex-wrap  align-items-start justify-content-between mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
      <div className="d-block d-lg-none imagePic col-md-5 p-0 mt75">
        <Image src={image4} alt="image1" className="imagePic" />
      </div>
      <ListPoints
        heading="Performance Reviews"
        subheading="Leverage OKRs. Ignite Performance"
        list1={list11}
        list2={list21}
      />
      <div className="d-none d-lg-block imagePic col-md-5 p-0 mt75">
        <Image src={image4} alt="image1" className="imagePic" />
      </div>
    </div>
  );
}
