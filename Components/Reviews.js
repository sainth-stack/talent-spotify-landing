import React from "react";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ReviewsAndCards = ({
  reviewItems,
  buttonLabel = "Book a Demo",
  imageSrc,
  renderReviewItem,
  title,
  topHeading,
}) => {
  return (
    <section className="container   my-4 mt-3 py-3   ">
      <header className="text-center   mb-4 mt-4">
        <h1 className="fw-bold fs-2 text-capitalize mt-4 ">{topHeading}</h1>
      </header>

      <div className=" my-3 row align-items-center  justify-content-center position-relative g-4">
        <div
          className=" review_image_center col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end position-relative mb-4 mb-lg-0"
          style={{ zIndex: 10 }}
        >
          {imageSrc && (
            <div
              className="position-relative w-100 "
              style={{
                maxWidth: "300px",

                height: "400px",
              }}
            >
              <Image
                src={imageSrc}
                alt="Review Image"
                layout="fill"
                objectFit="contain"
                className="rounded shadow"
              />
            </div>
          )}
        </div>

        <div
          className="col-12 col-lg-8 px-5 py-5 rounded container rounded_corners "
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
            border: "5px solid transparent",
            borderImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0), #9967f5, #576afa) 1",
            boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
            minHeight: "400px",
            borderRadius: "15px !important",
            border: "4px solid  blue",
            borderLeft: "0 ",
          }}
        >
          <h2 className="fw-bold fs-4 mb-4  mx-5 text-center text-lg-start">
            {title}
          </h2>

          <ol className="list-unstyled ps-0 ps-lg-4 mb-4">
            {reviewItems.map((item, index) =>
              renderReviewItem ? (
                renderReviewItem(item, index)
              ) : (
                <li key={index} className="d-flex align-items-start mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{ minWidth: "32px", height: "32px" }}
                  >
                    <IoIosCheckmarkCircleOutline
                      className="fs-4"
                      style={{ color: "#083c61" }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-start mb-0">
                    <strong>{item.question || ""}</strong> {item.answer || ""}
                  </p>
                </li>
              )
            )}
          </ol>

          <div className="d-flex mx-5 justify-content-center justify-content-lg-start mt-4">
            <button
              className="btn btn-primary px-4 py-2 rounded-pill"
              style={{ backgroundColor: "#083c61", borderColor: "#083c61" }}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndCards;
