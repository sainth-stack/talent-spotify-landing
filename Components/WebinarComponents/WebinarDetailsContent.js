import React from "react";
import ListPoints from "./ListPointsWebinar";
import Image from "next/image";
import playvideo from "../../assets/images/playvideo.png";
export function WebinarDetailsContent({
  list1,
  list2,
}) {
  return (
    <div className="container-fluid mt-5 pt-5">
      <List1 image1={playvideo} list1={list1} list2={list2} />
      <div className="text-center pt-5 pb-5 font-weight-normal">
        <p>
          Pick your preferred time zone and claim your free spot below:</p>
        <p>
          Morning installment (for Indian timezones):</p>
        <p className="text-green font-weight-bold">
          Monday, July 25 @ 7 PM  IST</p>
        <p>
          Afternoon installment (for American timezones):</p>
        <p className="text-green font-weight-bold">
          Monday, July 25 @ 8:30 AM EST
        </p>
      </div>
    </div>
  );
}

function List1({ image1, list1, list2 }) {
  return (
    <div className="d-flex flex-wrap align-items-start justify-content-center" data-toggle="modal" data-target="#exampleModal">
      <div className="imagePic col-md-5">
        <Image src={image1} alt="image1" className="imagePic" />
      </div>
      <ListPoints
        heading=""
        subheading=""
        list1={list1}
        list2={list2}
      />
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
  );
}