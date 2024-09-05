import React from "react";
import yellowdot from "../../assets/svg/yellowdot.svg";
import Image from "next/image";
// import "./styles.scss"

export default function ListPointsWebinar({
  heading,
  subheading,
  list1 = [],
  list2 = [],
}) {
  return (
    <div className="paragraph col-md-5">
      <h3 className="heading1 font-weight-bold">
        <div className="yellowDot">
          <Image src={yellowdot} alt="yellowdot" className="yellowDot" />
        </div>
        {heading}
      </h3>
      <div className="subheading1">
        A common misconception is to think “OKRs versus KPIs”, but the best option is to use both simultaneously. Each fills an important role in the business.
        <br /><br />

        KPIs measure actual vs expected metrics – i.e. performance. However, KPIs – whilst necessary – don’t tell us what to do to achieve the expected results. This is where Objectives and Key Results come into play.
        <br /><br />
        During this webinar, we’ll explain the difference between KPIs and OKRs, and why both are essential for your business. We’ll also look at some KPI & OKR examples which will showcase how easy it is to combine KPIs with OKRs for impactful business results.
        <br /><br />
        Used together, KPIs and OKRs give you the target goals and the roadmap to achieve success.
      </div>
    </div>
  );
}
