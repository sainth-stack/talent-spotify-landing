import { Nav } from "../Nav";
import React, { useEffect, useState } from "react";
import { dummyData } from "../../utilities/constants";
import "../../styles/Home.module.css";
import ShowMenu from '../ShowMenu'
import RequestDemoPopup from "../requestDemoPopup";
import axios from "axios";
import ShowMenuMobile from "../ShowMenuMobile";
import FreetrailPopup from "../freetrailPopup";
export default function WebinarsHeading(props) {
  const [orderModalShow, setOrderModalShow] = useState(false);
  const [orderModalShow2, setOrderModalShow2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
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
        <Nav dummyData={dummyData} selectedType={selectedType} setType={setType} handleClick={handleClick} bgColor="white" textColor="green" handleClick2={handleClick2} />
        <ShowMenu selectedType={selectedType} handleClick={handleClick} />
        <ShowMenuMobile selectedType={selectedType} handleClick={handleClick} />
        <div className="d-flex flex-wrap justify-content-center align-items-center bannerHeight2 pb-5 mb-5">
          <div className="col-lg-12 text-center pt-5 mt-5">
            <h6 className="text-white pb-4 font-weight-bold ml-3 text-uppercase fs-22">
              {props.heading}
            </h6>
            <h1 className="font-weight-bold text-white mb-heading">{props.subheading}</h1>
          </div>
        </div>
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
