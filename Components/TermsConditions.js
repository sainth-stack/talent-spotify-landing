import React from "react";
import { terms } from "../utilities/termsData";

export default function TermsConditions() {
  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "100vh", // Full height of the screen
        backgroundColor: "#EAE3D6", // Hex background color
        fontFamily: "'Arial', sans-serif", // Clean font for better readability
      }}
    >
      {/* Main Content */}
      <div className="d-flex flex-grow-1 justify-content-center align-items-start py-5">
        <div className="container py-5">
          <h1 className="text-center display-4 mb-4" style={{ fontSize: "2rem" }}>Terms & Conditions</h1>
          
          {terms.map((section, index) => (
            <div key={index} className="mb-4">
              <h2
                className="font-weight-bold mb-3"
                style={{
                  fontSize: "1.5rem",  // Reduced font size for subheadings
                  color: "#333", // Darker color for better readability
                }}
              >
                {section.title}
              </h2>
              <ul className="list-unstyled pl-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2 h6 my-1">
                    <strong style={{ fontSize: "1rem" }}>{item.term}</strong>
                    <span style={{ fontSize: "0.8rem", color: "#000" }}>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
