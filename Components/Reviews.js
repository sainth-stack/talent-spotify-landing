import {React,useState,useEffect} from "react";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "./Button";
import RequestDemoPopup from "./requestDemoPopup";
import FreetrailPopup from "./freetrailPopup";
import axios from "axios";
import { baseURL } from "../utilities/cons";

const ReviewsAndCards = ({
  reviewItems,
  
  
  buttonLabel = "Book a Demo",
  imageSrc,
  renderReviewItem,
  title,
  topHeading,
}) => {

  
  const [orderModalShow, setOrderModalShow] = useState(false);
  const [orderModalShow2, setOrderModalShow2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [selectedType, setType] = useState("");
  const handleClick = () => {
    setOrderModalShow(true);
  };

  const handleClick2 = () => {
    setOrderModalShow2(true);
  };
  const handleCallback = async (childData) => {
    setLoading(true);
    let response = await axios.post(
      baseURL,
      childData.data
    );
    if (response.data.success) {
      setLoading(false);
      setOrderModalShow(false);
      setError("");
      Toast({ message: "Schedule Demo Sent Successfully!", type: "success", time: 4000 })
    } else {
      setLoading(false);
      setError("Something went wrong in network");
      Toast({ message: "Something went wrong in network", type: "error", time: 4000 })
    }
  };
 
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
                maxWidth: "400px",

                height: "600px",
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
            border: "4px solid Blue",
            borderLeft: "0 ",
          }}
        >
          <h2 className="fw-bold fs-4 mb-4  mx-5    text-center ">{title}</h2>
          <ol
            className="list-unstyled ps-0 ps-lg-4 mb-4"
            style={{ paddingLeft: "100px" }}
          >
            {reviewItems.map((item, index) =>
              renderReviewItem ? (
                renderReviewItem(item, index)
              ) : (
                <li
                  key={index}
                  className="d-flex   align-items-start mb-3 pl-2 "
                >
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      minWidth: "60px",
                      height: "32px",
                    }}
                  >
                    <IoIosCheckmarkCircleOutline
                      className="fs-4"
                      style={{ color: "#083c61", marginLeft: "20px" }}
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

         
          <RequestDemoPopup
            show={orderModalShow}
            onHide={() => setOrderModalShow(false)}
            handlecallback={handleCallback}
            loading={loading}
          />

          <FreetrailPopup
            show={orderModalShow2}
            onHide={() => setOrderModalShow2(false)}
            handlecallback={handleCallback}
            loading={loading}
          />

          <div className="d-flex mx-5 justify-content-center justify-content-lg-start mt-4">
            <Button
              className={`text-white animate_startFree`}
              text="Book a Demo"
              style2={{ background: "#083C62", border: "none" }}
              onClick={() => handleClick()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAndCards;
