import React from "react";
import ListPoints from "./ListPointsWebinar";
import Image from "next/image";
import playvideo from "../../assets/svg/blogDetails.svg";
export function BlogDetailsContent({
  list1,
  list2,
}) {
  return (
    <div className="container-fluid mt-5 pt-5">
      <List1 image1={playvideo} list1={list1} list2={list2} />
      <div className="text-left pt-5 pb-5 font-weight-normal container">
        <p>
          A common misconception is to think “OKRs versus KPIs”, but the best option is to use both simultaneously. Each fills an important role in the business.
        </p>
        <p>
          KPIs measure actual vs expected metrics – i.e. performance. However, KPIs – whilst necessary – don’t tell us what to do to achieve the expected results. This is where Objectives and Key Results come into play.
        </p>
        <p>
          During this webinar, we’ll explain the difference between KPIs and OKRs, and why both are essential for your business. We’ll also look at some KPI & OKR examples which will showcase how easy it is to combine KPIs with OKRs for impactful business results.
        </p>
        <p>
          Used together, KPIs and OKRs give you the target goals and the roadmap to achieve success.
        </p>
      </div>
    </div>
  );
}

function List1({ image1, list1, list2 }) {
  return (
    <div className="d-flex flex-wrap align-items-start justify-content-center" data-toggle="modal" data-target="#exampleModal">
      <div className="imagePic col-md-5">
        <Image src={image1} alt="image1" className="imagePic" />
      </div>
      <ListPoints
        heading=""
        subheading=""
        list1={list1}
        list2={list2}
      />
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zVJ9weT7SyU" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}