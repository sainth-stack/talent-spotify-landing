import React, { useState } from 'react'
import circlepart from "../../assets/images/curve.png";
import Image from 'next/image';
import Button from "../Button"
import { Modal } from 'react-bootstrap';
import wrong from "../../assets/svg/wrong.svg"

const HowItWorks = (props) => {
  const [behavioralPopup, setBehavioralPopup] = useState(false);
  const [aiPopup, setAiPopup] = useState(false);

  return (
    <div ref={props.forwardRef}>
      <div>How It Works</div>
      <div className='mt-3' style={{ borderRadius: "12px", background: "#EDF8F7", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)" }}>
        <div className='p-3'>
          <p className='p-0' style={{ color: "#2A8881", fontFamily: "Poppins", fontSize: "18px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal" }}>Why it works</p>
          <div className="embed-responsive embed-responsive-16by9 monetary">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowfullscreen></iframe>
          </div>
          <p className='' style={{ color: "#000", fontFamily: "Poppins", fontSize: "12px", fontStyle: "normal", fontWeight: 400, lineHeight: "21px", paddingTop: "21px", opacity: 0.5 }}>
            In an ideal world, all managers would be prefect at hiring, monitoring projects, evaluating performances accurately and giving objective feedback to help employees develop. But we don&apos;t live in an ideal world, and everybody has limited cognitive capacity and are prone to biases and errors. Organizations that rely only on their managers to execute the business and develop employees mostly fall behind. This is where TalentSpotify comes with an innovative and evidence-backed solution for organizations that care about its people and its growth.
          </p>
          <div className='puzzle'>
            <div className='first-piece-mobile' onClick={() => setBehavioralPopup(true)} >
              <div className='circle-part-mobile'>
                <Image src={circlepart} alt='circle' width={"120px"} height={"160px"} />
              </div>
              <p className='first-piece-text-mobile mb-0'>Behavioral Science Insights</p>
            </div>
            <div className='second-piece-mobile' onClick={() => setAiPopup(true)} >
              <p className='second-piece-text-mobile mb-0'>Artificial Intelligence</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "27px" }} />
      <div className='d-flex justify-content-center mt-2 mb-1'>
        <Button
          className="border-0 bg-green text-white mt-2 w-90 p-2"
          style2={{ justifyContent: 'center', fontSize: '12px' }}
          text="Learn More About Our Approach"
        />
        <Button
          className="border-1 bg-white text-green mb-2 w-90"
          style2={{ fontSize: '12px' }}
          text="Read Our Case Study"
        />
      </div>
      <Modal
        show={behavioralPopup}
        onHide={() => setBehavioralPopup(false)}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{
          borderRadius: "3px",
          border: "1px solid #DFE1E6",
          boxShadow: "0px 3px 19px 0px #AFB1B4"
        }}
      >
        <Modal.Body>
          <div className="d-flex justify-content-end m-0 p-0 ">
            <Image
              style={{
                paddingTop: "5px",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              src={wrong}
              alt="wrong"
              onClick={() => setBehavioralPopup(false)}
            />
          </div>
          <p className='text-center pt-1' style={{ color: "#000", fontFamily: "Poppins", fontSize: "12px", fontStyle: "normal", fontWeight: 700, lineHeight: "20px", opacity: 0.5 }}>
            Behavioral Science Insights
          </p>
          <div>
            <ul className='left-popup-list-mobile'>
              <li>Aligning tasks, rewards, and recognition with intrinsic and extrinsic motivators.</li>
              <li>Optimisation of performance and productivity through evidence-based approaches like goal priming framing feedback and behavior change techniques.</li>
              <li>Improved project execution through understanding of decision-moking, communication patterns and team dynamics</li>
              <li>Intuitive workflow execution designs that removes the extra time-consuming blocks and promotes optimized outcomes</li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={aiPopup}
        onHide={() => setAiPopup(false)}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{
          borderRadius: "3px",
          border: "1px solid #DFE1E6",
          boxShadow: "0px 3px 19px 0px #AFB1B4"
        }}
      >
        <Modal.Body>
          <div className="d-flex justify-content-end m-0 p-0 ">
            <Image
              style={{
                paddingTop: "5px",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              src={wrong}
              alt="wrong"
              onClick={() => setAiPopup(false)}
            />
          </div>
          <p className='text-center pt-1' style={{ color: "#000", fontFamily: "Poppins", fontSize: "12px", fontStyle: "normal", fontWeight: 700, lineHeight: "20px", opacity: 0.5 }}>
            Artificial Intelligence
          </p>
          <div>
            <ul className='left-popup-list-mobile'>
              <li>Personalized motivation systems by analyzing individual preferences and providing customized incentives and performance reviews.</li>
              <li>Data-driven performance improvement by analyzing large datasets, identifying patterns, and offering targeted interventions through the Talent Spotify platform.</li>
              <li>Improved project execution by automating tasks, optimizing resource allocation, and providing real-time insights.</li>
              <li>Streamlined project management, risk identification, and enhanced business execution through predictive analytics, natural language processing, and automation.</li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default HowItWorks