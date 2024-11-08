import React from "react";
import aneel from "../../assets/images/aneel.png";
import prasanth from "../../assets/svg/prasanth.svg";
import linkedinIcon from "../../assets/svg/linkedinIcon.svg";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import Card from "../Card";

export default function FinalAboutus() {
  return (
    <div>
      <div
        className="d-flex justify-content-center relative   mt-6"
        style={{
          border: "5px solid transparent",
          borderImage: "linear-gradient(to right,#9967f5, #576afa) 1",

          borderRadius: "1rem",
        }}
      >
        {/* <p className="h1 text-center font-weight-bold">Founders</p> */}
        <div className="flex justify-center m-4">
          {/* Title inside the border */}
          <h2
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl text-white w-34 font-bold mb-4 px-2"
            style={{
              backgroundImage: "linear-gradient(to right, #9967f5, #576afa)",
              borderImage: "linear-gradient(to right, #9967f5, #576afa) 1",
              zIndex: 10,
            }}
          >
            Founders
          </h2>

          <div className="flex justify-center flex-wrap gap-8 m-3">
            <Card
              styles="shadow-lg"
              icon={aneel}
              heading="Aneel"
              subheading="Founder, CEO"
              link={{
                url: "https://www.linkedin.com/in/aneel-kumar-bonu/",
                icon: linkedinIcon,
              }}
            />
            <Card
              styles="shadow-lg"
              icon={prasanth}
              heading="Prashanth Reddy"
              subheading="Co-Founder, CTO"
              link={{
                url: "https://www.linkedin.com/in/prashanth-s-reddy/",
                icon: linkedinIcon,
              }}
            />
          </div>
        </div>

        {/* boreder */}
      </div>

      <div>
        <h1 className="text-left pb-4 mt-4 font-weight-bold">Our Motivation</h1>
      </div>
      <div className="d-flex justify-start mb-4">
        <p className="fs-15 col-md-10 text-justify">
          <Trans>
            We empathized for the companies who are tired of using traditional
            performance management tools. We build employee motivation,
            transparency in reviews and nudges self management tool. We are
            doing this by combing the behaviour science(Psychology) and data
            science (machine learning and Artificial Intelligence).
          </Trans>
          <br />
          <br />
          Our vision is to provide the best talent management experience for
          companies to retain and motivate their employees.
        </p>
      </div>
    </div>
  );
}
