import React from "react";
import Image from "next/image";
import yellowdot from "../../assets/svg/yellowdot.svg";
import one from "../../assets/svg/1.svg";
import two from "../../assets/svg/2.svg";
export function WebinarContent({
  image1
}) {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-start justify-content-center">
        <div className="imagePic" data-toggle="modal" data-target="#exampleModal">
          <Image src={image1} alt="image1" className="imagePic" />
        </div>
        <div className="paragraph">
          <h3 className="heading1">
            Our Upcoming Webinars
          </h3>
          {/*<h5 className="subheading1">Subtitle will coming here</h5>*/}
          <div className="borderBlack"></div>
          <div className="webcontenty-1">
            <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
          </div>
          <div>
            <div className="d-flex" >
              <Image src={one} alt="one" />
              <p className="webinarTime">Friday, August 25th</p>
            </div>
            <div className="webinarBody">
              <p className="webinar-title">7PM | How To Measure Your OKRs Successfully</p>
              <p className="webinar-description">Next new webinar coming in Autumn 2022. See previously recorded webinars below.</p>
            </div>
            <div className="d-flex">
              <Image src={two} alt="two" />
              <p className="webinarTime">Saturday, August 26th</p>
            </div>
            <div className="webinarBody">
              <p className="webinar-title">8AM | How To Measure Your OKRs Successfully</p>
              <p className="webinar-description">Next new webinar coming in Autumn 2022. See previously recorded webinars below.</p>
            </div>
            <div className="webinarBody">
              <p className="webinar-title">9AM | How To Measure Your OKRs Successfully</p>
              <p className="webinar-description">Next new webinar coming in Autumn 2022. See previously recorded webinars below.</p>
            </div>
          </div>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

