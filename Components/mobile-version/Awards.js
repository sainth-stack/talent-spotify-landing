import React from 'react'
import Image from 'next/image';
import { NewMobileCard } from "./mobilecard"
import card1 from '../../assets/images/andhrapradesh.jpg'
import card2 from '../../assets/svg/card2.svg'
import card3 from '../../assets/svg/mediacover1.svg'
import firstposter from "../../assets/svg/firstposter.svg";
import secondposter from "../../assets/images/news.png";
import thirdposter from "../../assets/svg/thirdpostermob.svg";
import Button from "../Button"
import greencheck from "../../assets/svg/greencheckmob.svg";

const Awards = (props) => {
  const posters = [
    {
      poster: firstposter,
      url: 'https://www.peoplematters.in/article/entrepreneurship-start-ups/fast-growing-hr-and-worktech-startups-to-track-at-people-matters-techhr-singapore-2022-34886'
    },
    {
      poster: secondposter,
      url: 'https://startupstorymedia.com/stories-2023-07-talentspotify-startup-story/'
    },
    {
      poster: thirdposter,
      url: 'https://www.viscan.in/getting-ai-into-hr/'
    }
  ]
  return (
    <div ref={props.forwardRef}>
      <div className='mt-3' style={{ borderRadius: "12px", background: "#EDF8F7", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)" }}>
        <div className='p-3'>
          <p className='p-0' style={{ color: "#2A8881", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>Awards</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <NewMobileCard heading="Winner Next-Gen Startup Challenge" subHeading="Software Technology Parks of India - CHUNAUTI 2.0" image={card3} bgColor={"#2B294E"} />
            <div style={{ marginLeft: '15px' }}>
              <NewMobileCard heading="Fastest Growing Start-Ups" subHeading="People Matters TechHR 2022" image={card2} bgColor={"black"} />
            </div>
            <div style={{ marginLeft: '15px' }}>
              <NewMobileCard heading="Top 4 Startups" subHeading="AP Innovation Society and A-Hub" image={card1} bgColor={"#0F9BD7"} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-3' style={{ borderRadius: "12px", background: "#EDF8F7", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)" }} >
        <div className='p-3' style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <p className='p-0' style={{ color: "#2A8881", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>Media Coverage</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {posters.map((poster, index) => (
              <div className='' key={index}>
                <Image src={poster.poster} alt="poster" /><br />
                <a href={poster.url} target='_blank' className='m-2' rel="noreferrer noopener">Read More&gt;&gt;</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-3' style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "320px" }}>
          <p className='pb-0' style={{ color: "#2A8981", textAlign: "center", fontFamily: "Poppins", fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
            Our goal is to become the top choice for any company seeking a hybrid and reliable
            business execution and talent management solution
          </p>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-2 mb-1' style={{ flexDirection: "column" }}>
        <Button
          className="border-0 bg-green text-white mt-2 w-90 p-2"
          style2={{ justifyContent: 'center', fontSize: '12px' }}
          text="I am ready to Empower My Organisation"
          handleClick={() => props.showFreeTrail()}
        />
        <Button
          className="border-1 bg-white text-green mb-2 w-90"
          style2={{ fontSize: '12px' }}
          text="Schedule a Demo First"
          handleClick={() => props.showPopup()}
        />
      </div>
      <div className='mt-3 d-flex' style={{ gap: "3px" }}>
        <Image src={greencheck} style={{ width: "11px", height: "11px" }} alt="green check" />
        <p className='pb-0' style={{ color: "#000", fontFamily: "Poppins", fontSize: "10px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", maxWidth: "330px" }}>
          Free 2 Week trial & Free Consultancy Sessions from Industry Expert
        </p>
      </div>
    </div>
  )
}

export default Awards