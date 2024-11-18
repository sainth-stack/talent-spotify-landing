import React, { useState } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
const ShowMoreButton = ({
  initialText = "Show More",
  toggledText = "Show Less",
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (onClick) onClick(!isExpanded); // Trigger any additional action on click
  };

  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn  px-4 py-2 fw-semibold rounded text-light"
        style={{background:"#083c61"}}
        onClick={handleClick}
      >
        {isExpanded ? toggledText : initialText}
      </button>
    </div>
  );
};

export default ShowMoreButton;
