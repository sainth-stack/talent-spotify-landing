import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";

export default function Card3({ data, top, setShowPopup }) {
  const isPro = data.heading === "Pro";
  const headingColor = isPro ? "#2A8881" : "inherit";
  const buttonColor = isPro ? "btn-primary" : "btn-secondary";
  const buttonBg = isPro ? "#083c61" : "transparent";
  const buttonText = isPro ? "#fff" : "#000";
  
  // States to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card h-100 shadow-sm  " style={{ minWidth:"300px",maxWidth:"300px"  }}>
      <div className="card-body d-flex  my-2 flex-column">
        <div className="position-relative mb-2 ">
          {top && (
            <div
              className="position-absolute start-50 translate-middle badge rounded-pill"
              style={{
                fontSize: "0.7rem",
                padding: "0.5em 0.5em",
                marginTop: "-1.4rem",
                background: "linear-gradient(to right, #9f69f5, #6b6bfa)" // Indigo to Blue gradient
              }}
            >
              MOST POPULAR PLAN
            </div>

          )}
          <h5 className="card-title text-center my-2" style={{ color: headingColor, fontSize: "1.25rem" }}>
            {data.heading}
          </h5>
          <p className="fw-bold w-100  text-center  my-1" style={{ fontSize: ".8rem" }}>
            {data.description}
          </p>
        </div>

   <div className="row justify-content-center align-items-center my-3">
        <button
          className={`btn ${buttonColor} w-50 text-center `}
          onClick={() => setShowPopup(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? "transparent" : buttonBg, // Toggle background color
            color: isHovered ? (isPro ? "#083c61" : "#000") : buttonText, // Toggle text color
            borderColor: isHovered ? (isPro ? "#083c61" : "#000") : "#083c61", // Border color changes on hover
            fontSize: "0.875rem",
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s", // Smooth transition for hover effect
            borderStyle: "solid", // Border is always solid
            borderWidth: "2px", // Border width
          }}

        >
          {data.buttonText}
        </button>
        </div>

       <hr
  className="w-100 mx-auto my-3"
  style={{
    fontSize: "0.875rem",
    height: "2px", // Increase thickness
    backgroundColor: "currentColor", // Ensure visible color
    border: "none", // Remove default border
  }}
/>


        <p className="text-start fw-bold small mb-2" style={{ fontSize: "0.875rem" }}>
          {data.description2}
        </p>

        <ul className="list-unstyled small mb-0">
          {data.keypoints.map((item, index) => (
            <li key={index} className="d-flex align-items-start py-1 justify-center mb-1">
              <span
                className="me-2 fw-bold"
                style={{ fontSize: "1rem", color: "green", display: "flex", alignItems: "center" }}
              >
                <CiCircleCheck />
              </span>
              <span style={{ fontSize: "0.8rem" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
