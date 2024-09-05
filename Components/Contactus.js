import React from "react";
import careerimg from "../assets/svg/careerimg.svg";
import Image from "next/image";
import Button from "./Button";
import BrowseFilesNormal from "./BrowseFilesNormal";

export default function Contactus() {
  return (
    <div>
      <p className="careerh d-flex justify-content-center">Careers</p>
      <div className="row mbcareer">
        <div className="col-6 mr-5 bgcontent1 careerimg">
          <Image src={careerimg} alt="image1"  />
          </div>
        <div className="col">
        <div className="  align-self-center  ">
        <p className="cform">Please fill below form:</p>
        <form className="mbform">
          <div className="row">
            <div className="col">
          <div className="d-flex flex-column">
            <label className="textcareer ">Name*</label>
            <input type="text" className="inputcareer" id="usr" />
          </div>
          <div className="d-flex flex-column mt-4">
            <label className="textcareer ">Linkedin URL*</label>
            <input type="text" className="inputcareer " id="pwd" />
          </div>
          </div>
          <div className="col">
          <div className="d-flex flex-column ">
          <label className="textcareer emailmb">Email Address*</label>
            <input type="email" className="inputcareer" id="usr" />
          </div>
          <div className="d-flex flex-column mt-4 ">
          <label className="textcareer ">Phone</label>
            <input type="text" className="inputcareer " id="pwd" />
          </div>
          </div>
          </div>



        </form>

        <div className="mt-3 mb-3 p-3 browsemb">
          <p className="textcareer ">Upload CV</p>
          <BrowseFilesNormal />
        </div>
        <div className="cbuttons d-flex justify-content-end mb-5  mt-3 ">
          <Button
            text="Clear"
            className="bg-light border border-dark text-dark"
          // handleClick={clearAll}
          />
          <Button
            //   handleClick={handleSave}
            text="Save"
            className="bg-green border text-white"
          />
        </div>
      </div>
        </div>

      </div>
        

    </div>
   
  );
}