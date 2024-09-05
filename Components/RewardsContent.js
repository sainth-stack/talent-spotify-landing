import React from "react";
import Image from 'next/image'
import ListPoints from "./ListPoints";
import image2 from '../assets/svg/RewardsFinal.svg'
import monetaryIcon from "../assets/images/monetary.png";
import nonmonetaryIcon from "../assets/images/nonmonetary.png";
import yellowdot from "../assets/svg/yellowdot.svg";
import { list62, list63 } from '../utilities'
import Button from "../Components/Button";
import image3 from '../assets/svg/fourCards.svg'
const RewardsFinal = () => {
  return (
    <div className="pt-5">
      <div className="d-flex flex-wrap align-items-start justify-content-center mt-lg-5 mb-lg-0 pb-lg-0 pt-lg-5">
        <h6 className="text-black pb-3 font-weight-bold ml-3 text-uppercase">
          TalentSpotify helps companies by offering an enhanced employee reward schemes
        </h6>
      </div>
      <div className=" d-flex flex-wrap align-items-start justify-content-center mt-sm-5  mt-lg-2 mb-lg-3 pb-lg-3 pt-lg-2 col-sm-12">
        <div className="row d-flex flex-wrap align-items-start justify-content-center mt-lg-5 mb-lg-5 pb-lg-5 pt-lg-5">
          <div className="leftinnerdiv mr-lg-5 col-md-4">
            <h3 className="heading1 font-weight-bold">
              Why It Matters
            </h3>
            {list63.length > 0 &&
              list63.map((item, index) => (
                <p className="list-item " key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </div>
          <div className="d-none d-lg-block imagePic col-md-4 p-0 mt75 ml-5 col-sm-12" >
            <Image src={image3} alt="image1" className="imagePic" />
          </div>
          <div className="imagePic d-lg-none col-md-5">
            <Image src={image3} alt="image3" className="imagePic" />
          </div>
        </div>
      </div>
      <div className="container pt-3">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1>How it works?</h1>
          <h4 className="rewardPoints p-5 col-md-7 m-0">Employee earns reward points by his/her objective/KR achievements</h4>
          <p className="text-center m-0" style={{ width: "3px", height: "40px", backgroundColor: "#2A8881" }}></p>
          <h4 className="rewardPoints p-2 col-md-7 m-0">Redeem Points</h4>
          <p className="text-center m-0" style={{ width: "3px", height: "40px", backgroundColor: "#2A8881" }}></p>
          <p className="text-center m-0" style={{ width: "200px", height: "2px", backgroundColor: "#2A8881" }}></p>
          <div className="d-flex">
            <p className="mb-0" style={{ width: "3px", height: "40px", backgroundColor: "#2A8881" }}></p>
            <p className="mb-0" style={{ width: "3px", height: "40px", backgroundColor: "#2A8881", marginLeft: "194px" }}></p>
          </div>
          {/* <p className="text-center mb-4" style={{width:"100px",height:"2px",backgroundColor:"#2A8881"}}></p> */}
          <div className="d-flex justify-content-center flex-wrap mb-4">
            <div className="col-md-4">
              <Image src={monetaryIcon} alt="monetary" className="monetary" />
            </div>
            <div className="col-md-4">
              <Image src={nonmonetaryIcon} alt="monetary" className="monetary" />
            </div>
          </div>
        </div>

      </div>
      <div className=" d-flex flex-wrap align-items-center justify-content-between  mt-lg-3 pt-lg-3">
        <div className=" d-flex flex-wrap justify-content-center mt-lg-5 pt-lg-5">
          <div className="col-md-4 mt-2 ml-lg-5 mr-lg-5">
            <div className="leftinnerdiv">
              <h3 className="heading1 font-weight-bold">
                <div className="yellowDot">
                  <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
                </div>
                Rewards
              </h3>
              <h5 className="subheading1">Create moments of delight with an extensive reward catalog</h5>
              {list62.length > 0 &&
                list62.map((item, index) => (
                  <p className="list-item" key={index} style={{}}>
                    {item}
                  </p>
                ))}
              {/* <Button text="Learn more" className="border-green bg-white text-green font-weight-bold" /> */}
            </div>
          </div>
          <div className="d-none d-lg-block col-md-5 ml-lg-5 mb-5 pb-5 col-sm-10 p-0 mt20 mr-lg-5" >
            <Image src={image2} alt="image1" className="imagePic" />
          </div>
          <div className="d-block d-lg-none imagePic col-md-5 col-sm-10 mb-5 pb-5 p-0 mt75">
            <Image src={image2} alt="image1" className="imagePic" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default RewardsFinal