import React from "react";
import { terms } from "../utilities/termsData";

export default function TermsConditions() {
  return (
    <div className="container mb-4 p-8 rounded-md w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>
      {terms.map((section, index) => (
        <div key={index}>
          <h2 className="text-xs font-semibold mb-2">{section.title}</h2>
          <ul className="list-decimal list-unstyled list-inside text-gray-800">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-2">
                {item.term}
                {item.description}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
