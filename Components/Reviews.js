import React from "react";
import review1 from "../assets/svg/review1.svg";
import Image from "next/image";

export default function Reviews() {
  return (
    <div className="d-flex flex-wrap align-items-start justify-content-center">

      <div className="col-lg-6 mt-5 pt-5 mb-5 pb-5">
        <Image src={review1} alt="image1" className="" />
      </div>
      <div className=" col-lg-6 align-self-center reviewbgc">
        <p className="reviewh ml-4">Review</p>
        <p className="reviewp col-lg-7 ml-2">
          Our competency evaluation is purely based on Objective evaluation to
          limit traditional subjective biased evaluation. Set of behaviour
          competency questions will be asked to manager and peers, analysing
          the responses using our Machine Learning algorithms from manager and
          other peers and provides consolidated feedback to employee. We focus
          more of feedforward than feedback.<br /><br /> At any point of time
          Pre-populated appraisal forms based on achievement of goals and
          feedback received throughout the year.
        </p>

      </div>

    </div>
  );
}
