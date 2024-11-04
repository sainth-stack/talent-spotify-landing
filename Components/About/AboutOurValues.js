import React from "react";
import FinalAboutus from "../../Components/About/FinalAboutus";

export function AboutOurValues() {
  const ValueItem = ({ color, title, description, arrowColor }) => {
    return (
      <div className="flex flex-col items-center relative">
        <div className={`${color} text-white px-6 py-2 rounded-md`}>{title}</div>
        <p className="text-gray-600 mt-2 text-center ">{description}</p>
        {/* <div className={`absolute w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-${arrowColor} -translate-y-6`}></div> */}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <FinalAboutus />
        <h1 className="text-center pb-4 mt-5 font-weight-bold">Our Values</h1>

        <div className="relative flex flex-col items-center mt-5">
          
         {/*  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-20 w-1 bg-gray-300"></div> */}

          <div className="flex justify-around w-full mt-5">
            <ValueItem 
              color="bg-blue-400" 
              title="Empathy" 
              description="Empathy connects us with customers." 
              arrowColor="blue-400"
            />
            <ValueItem 
              color="bg-green-400" 
              title="Customer First" 
              description="Constantly enhancing positive customer experiences." 
              arrowColor="green-400"
            />
            <ValueItem 
              color="bg-purple-400" 
              title="Winning Together" 
              description="Driving innovative talent management solutions." 
              arrowColor="purple-400"
            />
            <ValueItem 
              color="bg-pink-400" 
              title="Trustworthy" 
              description="Ensuring trust in Talentpath's integrity." 
              arrowColor="pink-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
