import { NewMobileCard } from "./mobilecard"
import card1 from '../../assets/svg/card1.svg'
import card2 from '../../assets/svg/ngis.jpg'
import card3 from '../../assets/svg/mediacover1.svg'
// import main from '../../assets/svg/landingpage.svg'
import Image from "next/image"
import Button from "../Button"
export const Home = (props) => {
  return <div className="" ref={props.forwardRef}>
    <div style={{
      background: '#EDF8F7',
      borderRadius: "12px",
      boxShadow: ' 0px 4px 4px 0px #0000000D',
      padding: '15px 10px',
    }}>
      <h3 style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: '18px', lineHeight: '27px', color: "#2A8881" }}>
        AI & Behavioural Science-Powered Solutions for Optimizing Your Projects & Managing Your Workforce
      </h3>
      <h2 style={{
        fontWeight: 600,
        fontSize: '18px',
        letter: '0.3px',
        lineHeight: "27px",
        color: 'black',
        marginTop: '5%'
      }}>
        Supported by
      </h2>
      <div style={{ display: "flex" }}>
        <NewMobileCard heading="Winner Next-Gen Startup Challenge" subHeading="Software Technology Parks of India - CHUNAUTI 2.0" image={card3} bgColor={"#2B294E"} width={"50%"} />
        <div style={{ marginLeft: '15px' }}>
          <NewMobileCard heading="Fastest Growing Start-Ups" subHeading="Next Generation Incubation Scheme" image={card2} bgColor={"black"} width={"90%"} />
        </div>
        <div style={{ marginLeft: '15px' }}>
          <NewMobileCard heading="Top 4 Startups" subHeading="AP Innovation Society and A-Hub" image={card1} bgColor={"#0F9BD7"} width={"90%"} />
        </div>
      </div>
      <div>
        <div className="col-12 mt-2 bgImgNewMobile" style={{ height: "30vh" }}>
          {/* <Image src={main} className="col-12" alt="main icon" /> */}
        </div>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: '14px', lineHeight: '23px', color: 'black' }}>
          &quot;The system is straight forward for HR to manage their responsibilities, while also being user-friendly for managers and employees to utilize.&quot;
        </h2>
        <div className="d-flex justify-content-end flex-end">
          <div>
            <h5 style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: '700px', lineHeight: '20px', color: '#2A8981', p: 0, m: 0 }}>Joanna Prohaska</h5>
            <h5 style={{ fontFamily: "Poppins", fontSize: "12px", lineHeight: "18px", fontWeight: 400, padding: 0, margin: 0 }}>HR Co-ordinator, OLLAA</h5>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop: '10px' }}>
          <div>
            <h2 style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '18px',
              color: '#2A8981',
              display: "flex", justifyContent: "center", alignItems: 'center',
            }}>
              What You Get
            </h2>
            <Button
              className="border-1 border-white bg-green text-white w-90 pl-3 pr-3"
              text="Watch TalentSpotify in action"
              handleClick={() => props.executeScroll()}
            />
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className='d-flex justify-content-center mt-2 mb-1'>
      <Button
        className="border-0 bg-green text-white mt-2 w-90 p-2"
        style2={{ justifyContent: 'center', fontSize: '12px' }}
        text="Free Trial & Consultancy"
        handleClick={() => props.showFreeTrail()}
      />
      <Button
        className="border-1 bg-white text-green mb-2 w-90"
        style2={{ fontSize: '12px' }}
        text="Schedule Demo"
        handleClick={() => props.showPopup()}
      />
    </div>
    <hr />
  </div>
}