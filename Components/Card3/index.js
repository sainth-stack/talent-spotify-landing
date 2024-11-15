import React from "react";
import { CiCircleCheck } from "react-icons/ci";
export default function BootstrapCard({ data, top, setShowPopup }) {
  const isPro = data.heading === "Pro Plan";
  const headingColor = isPro ? "#2A8881" : "inherit";
  const buttonColor = isPro ? "btn-primary" : "btn-secondary";
  const buttonBg = isPro ? "#fff" : "#2A8881";
  const buttonText = isPro ? "#2A8881" : "#fff";

  return (
    <div className="card h-100 shadow-sm" style={{ maxWidth: "250px" }}>
      <div className="card-body d-flex flex-column">
        <div className="position-relative mb-2 ">
          {top && (
            <div
              className=" position-absolute start-50  translate-middle badge rounded-pill bg-primary"
              style={{ fontSize: "0.7rem", padding: "0.5em 0.5em",marginTop:"-1rem" }}
            >
              MOST POPULAR PLAN
            </div>
          )}
          <h5 className="card-title text-center mb-2" style={{ color: headingColor, fontSize: "1.25rem" }}>
            {data.heading}
          </h5>
          <p className=" fw-bold text-center small mb-0" style={{ fontSize: "0.5rem" }}>
            {data.description}
          </p>
        </div>

        <button
          className={`btn ${buttonColor} w-100 mb-3`}
          onClick={() => setShowPopup(true)}
          style={{ backgroundColor: buttonBg, color: buttonText, fontSize: "0.875rem" }}
        >
          {data.buttonText}
        </button>

        <hr className="w-75 mx-auto my-3" />

        <p className="text-start fw-bold small mb-2" style={{ fontSize: "0.875rem" }}>
          {data.description2}
        </p>

       <ul className="list-unstyled small mb-0">
  {data.keypoints.map((item, index) => (
    <li key={index} className="d-flex align-items-start justify-center mb-1">
      <span
        className="me-2 fw-bold "
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