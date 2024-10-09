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
