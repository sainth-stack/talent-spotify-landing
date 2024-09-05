import { Nav } from "./Nav";
import Button from "../Components/Button";
import React, { useEffect, useState } from "react";
import { dummyData } from "../utilities/constants";
import Image from 'next/image'
import LandingPage1 from "../assets/images/landing1.png";
import Icon1 from "../assets/svg/Icon1.svg";
import Icon2 from "../assets/svg/Icon2.svg";
import Icon3 from "../assets/svg/Icon3.svg";
import Icon4 from "../assets/svg/Icon4.svg";
import Icon5 from "../assets/svg/Icon5.svg";
import Icon6 from "../assets/svg/Icon6.svg";
import client1 from "../assets/svg/client1.svg";
import client2 from "../assets/svg/client2.svg";
import client3 from "../assets/svg/client3.svg";
import playIcon from "../assets/svg/playIcon.svg";
import playIconLeft from "../assets/svg/playIconLeft.svg";
import okrIcon from "../assets/svg/okrIcon.svg";
import emptyBox from "../assets/svg/emptyBox.svg";
import rewardsIcon from "../assets/svg/rewardsIcon.svg";
import mobileLogo from "../assets/svg/mobileLogo.svg";
import monetaryIcon from "../assets/images/monetary.png";
import nonmonetaryIcon from "../assets/images/nonmonetary.png";
import Card, { CardClient } from "../Components/Card";
import "../styles/Home.module.css";
import RequestDemoPopup from "./requestDemoPopup";
import FreetrailPopup from "./freetrailPopup";
import axios from "axios";
import { Toast } from "../service/toast";
import Link from "next/link";
import ShowMenu from '../Components/ShowMenu'
import ShowMenuMobile from "./ShowMenuMobile";
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
  }, [props, orderModalShow])
  return (
    <div>
      <div className="container">
        <Nav dummyData={dummyData} selectedType={selectedType} setType={setType} handleClick={handleClick} handleClick2={handleClick2} />
        <ShowMenu selectedType={selectedType} handleClick={handleClick} />
        <ShowMenuMobile selectedType={selectedType} handleClick={handleClick} />
        <div className="d-flex flex-wrap justify-content-center align-items-center bannerHeight pb-5 mb-5">
          <div className="col-lg-6">
            <h1 className="text-green pb-4 font-weight-bold ml-3">
              AI Powered<br />
              Employee Review, <br />Reward, Recognition<br />
              Platform.
            </h1>
            <a href="#howitworks"><Button
              className="border-0 bg-green text-white font-weight-bold"
              text="How it works?"
            />
            </a>
            <Button
              className="border-0 bg-white font-weight-bold"
              handleClick={handleClick}
              text="Schedule Demo"
            />
          </div>

          <div className="col-lg-6">
            <Image src={LandingPage1} alt="landingpage" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 id="howitworks">How it works?</h1>
          <h4 className="rewardPoints p-5 col-md-7 mb-0">Employee earns reward points by his/her objective/KR achievements</h4>
          <div className="border-line"></div>
          <h4 className="rewardPoints p-2 col-md-7 mb-0">Redeem Points</h4>
          <div className="d-flex">
            <div className="border-line2"></div>
            <div className="border-line3"></div>
          </div>
          <div className="d-flex justify-content-center flex-wrap mb-4">
            <div className="col-md-4">
              <Image src={monetaryIcon} alt="monetary" className="monetary" />
            </div>
            <div className="col-md-4">
              <Image src={nonmonetaryIcon} alt="monetary" className="monetary" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/*<h1 className="text-center" id="howitworks">How it works?</h1>*/}
          <div className="col-md-8 text-align-center">
            {/*<Image src={mobileLogo} alt="monetary" className="monetary" />*/}
            <div className="embed-responsive embed-responsive-16by9 monetary">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="text-center pt-5 mt-2 mb-5">
          <p className="h5 font-weight-bold">
            Experience the world&apos;s best iterative business execution platform
          </p>
          <p className="text-defalt h6">
            Grow your business with our suite of the below comprehensive products
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <Card
            icon={Icon1}
            heading="OKR Management"
            subheading="Simple. Focus. Measure. Achieve."
          />
          <Card
            icon={Icon3}
            heading="Employee Rewards"
            subheading="Build Trust. Boost Engagement."
          />
          {/*<Card
            icon={Icon2}
            heading="Performance Reviews"
            subheading="Track Better. Do More."
          />*/}
          <Card
            icon={Icon4}
            heading="Employee Recognition"
            subheading="Leverage OKRs. Ignite Performance."
          />
          <Card
            icon={Icon5}
            heading="Task Management"
            subheading="Build Trust. Boost Engagement."
          />
          {/*<Card
            icon={Icon6}
            heading="Employee SWOT"
            subheading="Build Trust. Boost Engagement."
          />*/}
        </div>
        <div className="mt-4 mb-4">
          {/*<h1 className="text-center">Our Clients</h1>*/}
          {/* <div className="d-flex flex-wrap justify-content-center">
            <Image src={playIconLeft} alt="landingpage" className="w-100" />
            <CardClient
              icon={client1}
            />
            <CardClient
              icon={client2}
            />
            <CardClient
              icon={client3}
            />
            <Image src={playIcon} alt="landingpage" className="w-100" />
          </div> */}
        </div>

        {error.length > 0 && <h2>{error}</h2>}
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
    </div>
  );
}
