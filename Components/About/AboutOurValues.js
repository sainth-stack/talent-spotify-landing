import React from "react";
import FinalAboutus from "../../Components/About/FinalAboutus";

export function AboutOurValues() {
  const ValueItem = ({ color, descriptionColor, title, description }) => {
    return (
      <div className="flex items-center justify-center mb-4 w-full max-w-3xl mx-auto">
        <div
          className={` text-white font-semibold px-4 py-2 text-center rounded-lg `}
          style={{
            flex: "1 0 30%",
            backgroundColor: color,
          }}
        >
          {title}
        </div>

        <div
          className={` px-4 py-2 text-gray-800  font-semibold rounded-r-lg w-full`}
          style={{
            flexGrow: 1,
            backgroundColor: descriptionColor,
          }}
        >
          {description}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <FinalAboutus />
        <h1 className="text-center pb-4 mt-4 font-bold text-xl">Our Values</h1>

        <div className="flex flex-col items-center w-full mb-4">
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
