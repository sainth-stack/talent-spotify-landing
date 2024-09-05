import Button from "../../Components/Button";
import React from "react";

export default function ListPointsWebinarPast({
  heading,
  date,
  list1 = [],
}) {
  return (
    <div className="paragraph col-md-5">
      <h3 className="heading1 font-weight-bold">
        <h6 className="pt-2 pb-2">{date}</h6>
        <h4 className="text-green font-weight-bold text-uppercase pt-2 pb-2">{heading}</h4>
      </h3>
      <div className="subheading1">
        {list1.map((list, index) => (
          <p key={index}>{list}</p>
        ))}
      </div>

      <Button text="Learn more" className="border-green bg-white text-green font-weight-bold m-0" />
    </div>
  );
}
