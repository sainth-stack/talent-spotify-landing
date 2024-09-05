import React from "react";
import aneel from "../../assets/images/aneel.png"
import prasanth from "../../assets/svg/prasanth.svg"
import linkedinIcon from "../../assets/svg/linkedinIcon.svg"
import yellowdot from "../../assets/svg/yellowdot.svg";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";

export default function FinalAboutus() {
  return (
    <div>

      <div className="d-flex justify-content-center">
        <div className="text-center mt-4">
          <div>
            <h1 className="text-center pb-4 mt-4 font-weight-bold">Our Motivation</h1>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <p className="fs-15 col-md-10 text-justify">
              <Trans>
                We empathized for the companies who are tired of using traditional
                performance management tools. We build employee motivation,
                transparency in reviews and nudges self management tool. We are doing
                this by combing the behaviour science(Psychology) and data science
                (machine learning and Artificial Intelligence).
              </Trans>
              <br /><br />Our vision is to
              provide the best talent management experience for companies to retain
              and motivate their employees.
            </p>
          </div>
          <p className="h1 text-center font-weight-bold">Founders</p>
          <div className="d-flex justify-content-center mt-4 flex-wrap">
            <div className="col-md-3 ml-2 mr-2 pl-2 pr-2 mt-4">
              <div className="d-flex justify-content-center cardhover card pl-3 pr-3">
                <div>
                  <div className="text-center mt-2">
                    <Image src={aneel} alt="circle1" className="p-3" />
                  </div>
                  <p className="chead text-center">Aneel</p>
                  <p className="founder text-center">Founder, CEO</p>
                  <p><a href="https://www.linkedin.com/in/aneel-kumar-bonu/" target="_blank" rel="noreferrer noopener"><Image src={linkedinIcon} alt="linkedin" /></a></p>
                  <p className="cdesc text-center">Aneel is an HRTech professional who spent 20 years at various companies like Emaar Properties, Emirates Airlines, AT&amp;T, Infosys etc. Across his career he has built deep global experience in strategy, operations and organisation and applied these as a senior leader in the startup ecosystem, using a product-first approach to solving business problems.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 ml-2 mr-2 pl-2 pr-2 mt-4">
              <div className="d-flex justify-content-center cardhover card pl-3 pr-3">
                <div>
                  <div className="text-center mt-2">
                    <Image src={prasanth} alt="circle1" className="p-3" />
                  </div>
                  <p className="chead text-center">Prashanth Reddy</p>
                  <p className="founder text-center">Co-Founder, CTO</p>
                  <p><a href="https://www.linkedin.com/in/prashanth-s-reddy/" target="_blank" rel="noreferrer noopener"><Image src={linkedinIcon} alt="linkedin" /></a></p>
                  <p className="cdesc text-center">Prashanth is a seasoned technology professional who spent 10 years at various companies like Emaar Properties, Emirates Airlines, and DXC technologies. Across his career he has built deep global experience in consulting, and technology and applied these as a senior leader in the startup ecosystem, using a product-first approach to solving business problems.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
