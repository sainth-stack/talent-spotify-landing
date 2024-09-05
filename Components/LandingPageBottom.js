import React from 'react';
import yellowdot from "../assets/svg/yellowdot.svg";
import Image from "next/image";
import Button from "../Components/Button";
import mediaCoverOne from "../assets/svg/mediacover1.svg"
import mediaCoverTwo from "../assets/svg/mediacover2.svg"
import mediaCoverThree from "../assets/images/andhrapradesh.jpg"
import circlepart from "../assets/images/curve.png";
import firstposter from "../assets/svg/firstposter.svg";
import secondposter from "../assets/images/news.png";
import thirdposter from "../assets/svg/thirdposter.svg";
import { useState } from 'react';

const LandingPageBottom = (props) => {
  const [leftPopup, setLeftPopup] = useState(false);
  const [rightPopup, setRightPopup] = useState(false);
  const mediaCards = [
    {
      image: mediaCoverOne,
      backgroud: "#2B294E",
      heading: "Winner Next-Gen Startup Challenge",
      subHeading: "Software Technology Parks of India - CHUNAUTI 2.0"
    },
    {
      image: mediaCoverTwo,
      backgroud: "#000",
      heading: "Fastest Growing Start-Ups",
      subHeading: "People Matters TechHR 2022"
    },
    {
      image: mediaCoverThree,
      backgroud: "#0F9BD7",
      heading: "Top 4 Startups",
      subHeading: "AP Innovation Society and A-Hub"
    }
  ]

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
    <div className='container-fluid p-0 m-0'>
      <div className='d-flex justify-content-center mt-5'>
        <h3 className="heading1 bottom-heading font-weight-bold text-center">
          <div className="yellowDot">
            <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
          </div>
          <span>Why It Works</span>
        </h3>
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <p className='bottom-para'>
          In an ideal world, all managers would be prefect at hiring, monitoring projects, evaluating performances accurately and giving objective feedback to help employees develop. But we don&apos;t live in an ideal world, and everybody has limited cognitive capacity and are prone to biases and errors. Organizations that rely only on their managers to execute the business and develop employees mostly fall behind. This is where TalentSpotify comes with an innovative and evidence-backed solution for organizations that care about its people and its growth.
        </p>
      </div>
      <div className='puzzle'>
        <div className='first-piece' onMouseEnter={() => setLeftPopup(true)} onMouseLeave={() => setLeftPopup(false)}>
          <div className='circle-part'>
            <Image src={circlepart} alt='circle' width={"120px"} height={"160px"} />
          </div>
          <p className='first-piece-text'>Behavioral Science Insights</p>
        </div>
        <div className='second-piece' onMouseEnter={() => setRightPopup(true)} onMouseLeave={() => setRightPopup(false)}>
          <p className='second-piece-text'>Artificial Intelligence</p>
        </div>
      </div>
      {leftPopup && (
        <div className='left-popup' onMouseEnter={() => setLeftPopup(true)}>
          <p className='text-center popup-heading'>Behavioral Science Insights</p>
          <ul className='text-center left-popup-list'>
            <li>Aligning tasks, rewards, and recognition with intrinsic and extrinsic motivators.</li>
            <li>Optimisation of performance and productivity through evidence-based approaches like goal priming framing feedback and behavior change techniques.</li>
            <li>Improved project execution through understanding of decision-moking, communication patterns and team dynamics</li>
            <li>Intuitive workflow execution designs that removes the extra time-consuming blocks and promotes optimized outcomes</li>
          </ul>
        </div>
      )}
      {rightPopup && (
        <div className='right-popup' onMouseEnter={() => setRightPopup(true)}>
          <p className='text-center popup-heading'>Artificial Intelligence</p>
          <ul className='text-center left-popup-list'>
            <li>Personalized motivation systems by analyzing individual preferences and providing customized incentives and performance reviews.</li>
            <li>Data-driven performance improvement by analyzing large datasets, identifying patterns, and offering targeted interventions through the Talent Spotify platform.</li>
            <li>Improved project execution by automating tasks, optimizing resource allocation, and providing real-time insights.</li>
            <li>Streamlined project management, risk identification, and enhanced business execution through predictive analytics, natural language processing, and automation.</li>
          </ul>
        </div>
      )}
      <div className='d-flex justify-content-center mt-2'>
        <Button
          className="border-0 bg-green text-white mt-4 w-90 pl-3 pr-3"
          style={{ display: "flex", justifyContent: 'center', padding: '30px' }}
          text="Learn More About Our Approach"
        />
        <Button
          className="border-1 bg-white text-green mt-4 w-90 pl-3 pr-3"
          style={{ display: "flex", justifyContent: 'center', padding: '30px' }}
          text="Read Our Case Study"
        />
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <h3 className="heading1 bottom-heading font-weight-bold text-center">
          <div className="yellowDot">
            <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
          </div>
          <span>Awards and Media Coverage</span>
        </h3>
      </div>
      <div className='d-flex justify-content-center mt-3' style={{ gap: "7px" }}>
        {mediaCards && mediaCards.map((mediaCard, index) => (
          <div className="card media-cards" style={{ width: "370px" }} key={index}>
            <div className='media-image text-center' style={{ padding: "20px", background: mediaCard.backgroud, width: "369px", height: "250px" }}>
              <Image className="card-img-top" src={mediaCard.image} alt="Card image" style={{}} />
            </div>
            <div className="card-body" style={{ display: 'flex', justifyContent: "center", flexDirection: "column" }}>
              <div>
                <p className='media-card-heading'>{mediaCard.heading}</p>
              </div>
              <div>
                <p className='media-card-subheading'>{mediaCard.subHeading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-5' style={{ gap: "7px" }}>
        {posters.map((poster, index) => (
          <div className='shadow rounded  text-right' key={index}>
            <Image src={poster.poster} alt="poster" width={500} height={500} style={{ width: 100, height: 100 }} /><br />
            <a href={poster.url} target='_blank' className='m-2' rel="noreferrer noopener">Read More&gt;&gt;</a>
          </div>
        ))}
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <p className='bottom-heading1'>
          Our goal is to become the top choice for any company seeking a hybrid and reliable
          business execution and talent management solution
        </p>
      </div>
      <div className='d-flex justify-content-center'>
        <Button
          className="border-0 bg-green text-white w-90 pl-3 pr-3"
          style={{ display: "flex", justifyContent: 'center', padding: '30px', fontWeight: 600 }}
          text="I am ready to Empower My Organisation"
          handleClick={() => props.showFreeTrail()}
        />
        <Button
          className="border-1 bg-white text-green w-90 pl-3 pr-3"
          style={{ display: "flex", justifyContent: 'center', padding: '30px', fontWeight: 600 }}
          text="Schedule a Demo First"
          handleClick={() => props.showPopup()}
        />
      </div>
      <div className='d-flex justify-content-center align-items-center mt-4 mb-5 pb-2'>
        <input className='largerCheckbox' type='checkbox' id='free-trail' />
        <label htmlFor='free-trail' className='bottom-label mb-0 pl-2'>Free 2 Week trial & Free Consultancy Sessions from Industry Expert</label>
      </div>
    </div>
  )
}

export default LandingPageBottom