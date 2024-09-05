import { Nav } from "./Nav";
import Button from "../Components/Button";
import React, { useEffect, useState } from "react";
// import "./styles.scss";
import "../styles/Home.module.css";
import RequestDemoPopup from "./requestDemoPopup";
import FreetrailPopup from "./freetrailPopup";
import axios from "axios";
import { Toast } from "../service/toast";
import Link from "next/link";
import ShowMenu from '../Components/ShowMenu'
import Image from "next/image";
import ShowMenuMobile from "./ShowMenuMobile";
import { NewCard } from "./NewCard";
import card1 from '../assets/svg/card1.svg'
import card2 from '../assets/svg/ngis.jpg'
import leftDot from '../assets/svg/leftdot.svg'
import rightDot from '../assets/svg/rightDot.svg'
import { dummyData } from "../utilities/constants";
import useWindowSize from "../utilities/UseWindowSize";

export default function Navigation(props) {
  const [orderModalShow, setOrderModalShow] = useState(false);
  const [orderModalShow2, setOrderModalShow2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedType, setType] = useState("");
  const handleClick = () => {
    setOrderModalShow(true);
  };
  const handleClick2 = () => {
    setOrderModalShow2(true);
  };
  const handleCallback = async (childData) => {
    setLoading(true);
    let response = await axios.post("https://talent-spotify-backend.vercel.app/api/landing/requestDemo", childData.data
    )
    if (response.data.success) {
      setLoading(false);
      setOrderModalShow(false);
      setError("");
      //Toast({ message: "Schedule Demo Sent Successfully!", type: "success", time: 4000 })
      alert("Schedule Demo Sent Successfully!");
    } else {
      setLoading(false);
      setError("Something went wrong in network");
      //Toast({ message: "Something went wrong in network", type: "error", time: 4000 })
    }
  };
  useEffect(() => {
    if (props.showPopup) {
      setOrderModalShow(!orderModalShow)
    }
    if (!orderModalShow) {
      props.setShowPopup(false);
    }
    if (props.showDemo) {
      setOrderModalShow2(!orderModalShow2)
    }
    if (!orderModalShow2) {
      props.setShowDemo(false);
    }
  }, [props, orderModalShow, orderModalShow2])
  const isMobile = useWindowSize();
  return (
    <div>
      <div>
        <Nav dummyData={dummyData} selectedType={selectedType} setType={setType} handleClick={handleClick} handleClick2={handleClick2} isMobile={isMobile} />
        <ShowMenu selectedType={selectedType} handleClick={handleClick} handleClick2={handleClick2} />
        <ShowMenuMobile selectedType={selectedType} handleClick={handleClick} handleClick2={handleClick2} />
      </div>
      {!isMobile && <>
        <div className="bgImgNew" style={{ height: '88vh' }}>
          <div className="d-flex flex-wrap justify-content-center align-items-center bannerHeight pb-5 mb-5">
            <div className="col-lg-5" style={{ padding: '70px' }}>
              <h1 className=" pb-4 font-weight-bold mt-2" style={{
                fontSize: '31px',
                lineHeight: "46.5px",
                color: "#39D1C5"
              }}>
                AI & Behavioral Science-<br />
                Optimizing Your Projects <br />& Managing Your<br />
                Workforce.
              </h1>
              <h2 style={{
                fontWeight: 600,
                fontSize: '18px',
                letter: '0.3px',
                lineHeight: "27px",
                color: 'white',
                opacity: 0.7,
                marginTop: '10%'
              }}>
                Supported by
              </h2>
              <div style={{ display: "flex" }}>
                <NewCard heading="" subHeading="Salesforce Startup Program 2023" image={card1} bgColor={"#0F9BD7"} />
                <div style={{ marginLeft: '15px' }}>
                  <NewCard heading="Fastest Growing Start-Ups" subHeading="Next Generation Incubation Scheme" image={card2} bgColor={"black"} />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="vl"></div>
              <h1 className="pb-5 font-weight-bold" style={{
                fontSize: '31px',
                lineHeight: "46.5px",
                color: "#FFFFFF"
              }}>
                <span>
                  <Image src={rightDot} alt="landingpage" className="w-100" />
                </span>
                <br />
                The system is straightforward<br />
                for HR to manage their <br />responsibilities, while also<br />
                being user-friendly for <br />  managers and <br />employees to utilize.
                <span style={{ marginLeft: '30px' }}>
                  <Image src={leftDot} alt="landingpage" className="w-100" />
                </span>
              </h1>
              <h2 style={{
                fontWeight: 800,
                fontSize: "20px",
                alignItems: 'center',
                color: '#2A8981',
                paddingTop: '10px',
                lineHeight: '30px',
                color: '#89FFF6'
              }}>
                Joanna Prohaska
              </h2>
              <p style={{
                color: '#9CA3AF',
                lineHeight: "21px",
                fontSize: '14px',
                fontWeight: 400,
              }}>
                HR Co-ordinator, OLLAA
              </p>
            </div>

            {/* <div className="col-lg-6">
            <Image src={LandingPage1} alt="landingpage" className="w-100" />
          </div> */}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: "space-between", height: '100px', background: "#2A8981", alignItems: "center" }}>
          <h1 style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '56px',
            color: 'white',
            marginLeft: '200px'
          }}>
            What You Get
          </h1>
          <div style={{
            marginRight: '200px',
            marginBottom: '20px'
          }}>
            <Button
              className="border-1 border-white bg-green text-white mt-4 w-90 pl-3 pr-3"
              style={{ width: '361px', display: "flex", justifyContent: 'center', padding: '30px' }}
              text="Watch TalentSpotify in action"
              handleClick={() => props.executeScroll()}
            />
          </div>
        </div></>}
      <RequestDemoPopup
        show={orderModalShow}
        onHide={() => setOrderModalShow(false)}
        handlecallback={handleCallback}
        loading={loading}
      />
      <FreetrailPopup
        show={orderModalShow2}
        onHide={() => setOrderModalShow2(false)}
        handlecallback={handleCallback}
        loading={loading}
      />
    </div>
  );
}
