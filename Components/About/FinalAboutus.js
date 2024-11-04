import React from "react";
import aneel from "../../assets/images/aneel.png";
import prasanth from "../../assets/svg/prasanth.svg";
import linkedinIcon from "../../assets/svg/linkedinIcon.svg";
import yellowdot from "../../assets/svg/yellowdot.svg";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import Card from "../Card";

export default function FinalAboutus() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="text-center mt-4">
          {/* <p className="h1 text-center font-weight-bold">Founders</p> */}
          <div className="flex justify-center mt-4">
            <div className="flex justify-center mt-4">
              <div className="border border-red-300 rounded-lg w-full max-w-5xl p-4">
                <h2 className="text-center text-2xl font-bold mb-4">
                  Founders
                </h2>
                <div className="flex justify-center mt-4 flex-wrap">
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
            </div>
          </div>
        </div>
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
