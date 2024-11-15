import React from "react";
import FinalAboutus from "../../Components/About/FinalAboutus";

export function AboutOurValues() {
  const ValueItem = ({ color, descriptionColor, title, description }) => {
    return (
      <div className="d-flex align-items-center justify-content-center mb-4 w-100 mx-auto" style={{ maxWidth: '768px' }}>
        <div
          className="text-white font-weight-bold px-2  py-2 text-center rounded"
          style={{
            flex: " 30%",
            backgroundColor: color,
          }}
        >
          {title}
        </div>

        <div
          className="px-2 py-2 font-weight-bold rounded-right w-100"
          style={{
            flexGrow: 1,
            borderRadius:".rem",
           
            backgroundColor: descriptionColor,
            color: "#4a5568", // Equivalent to Tailwind's `text-gray-800`
          }}
        >
          {description}
        </div>
      </div>
    );
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="text-center">
        <FinalAboutus />
        <h1 className="text-center pb-4 mt-4  font-weight-bold h4">Our Values</h1>

        <div className="d-flex flex-column align-items-center w-100 " >
          <ValueItem
            color="#6f9ce3"
            descriptionColor="#c7dcff"
            title="Empathy"
            description="Empathy connects us with customers."
          />
          <ValueItem
            color="#fca59a"
            descriptionColor="#ffdbd4"
            title="Trustworthy"
            description="Ensuring trust in TalentSpotify's integrity."
          />
          <ValueItem
            color="#89ccae"
            descriptionColor="#d4ffd6"
            title="Customer First"
            description="Consistently enhancing positive customer experiences."
          />
          <ValueItem
            color="#c39ded"
            descriptionColor="#f1e3ff"
            title="Winning Together"
            description="Driving innovative talent management solutions."
          />
        </div>
      </div>
    </div>
  );
}
