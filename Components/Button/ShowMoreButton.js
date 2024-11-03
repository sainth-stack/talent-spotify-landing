import React, { useState } from "react";

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
    <>
    <div className="flex items-center justify-center ">
    <button
      className="px-4 py-2 bg-[#083c61] text-white font-semibold rounded-lg transition duration-300"
      onClick={handleClick}
    >
      {isExpanded ? toggledText : initialText}
    </button>
    </div>
    </>
  );
};

export default ShowMoreButton;
