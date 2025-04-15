import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
// import "./styles.scss";
import wrong from "../assets/svg/wrong.svg";
import { Col, Row } from "react-bootstrap";
import {
  LoadingIndicator,
  Organization,
  Region,
  Validator,
} from "../utilities";
import Select from "react-select";
import Image from "next/image";

export default function RequestDemoPopup(props) {
  const selectRef = useRef(null);
  const [, setError] = useState(false);
  const [, forceUpdate] = useState(false);
  const validator = Validator();
  let defaultData = {
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    sizeOfOrganization: "",
  };
  const [data, setData] = useState(defaultData);

  const handleChangeSearch = ({ target: { name, value, label } }) => {
    let updatedData = { ...data };
    updatedData[name] = value;
    setData(updatedData);
    setError("");
  };

  let options = Region;
  let updatedOptions = options.map((item) => ({ ...item, label: item.key }));
  const onSubmit = () => {
    if (validator.current.allValid()) {
      props.handlecallback({
        data: data,
      });
      if (!props.loading) {
        setTimeout(() => {
          setData(defaultData);
          validator.current.hideMessages();
        }, 1000);
      }
    } else {
      validator.current.showMessages();
      forceUpdate(true);
    }
  };
  let options1 = Organization;
  let updatedOptions1 = options1.map((item) => ({ ...item, label: item.key }));
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ maxWidth: "100%" }}
      dialogClassName="custom-modal-900"
    >
      <Modal.Body>
        <div>
          <div className="d-flex justify-content-between align-items-start m-0 p-0 ">
            <Col sm={10} className="m-0 p-0">
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{
                  paddingTop: "10px",
                  // paddingLeft: "15px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Welcome to Talent Spotify
              </Modal.Title>
            </Col>
            <Image
              style={{
                paddingTop: "5px",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              src={wrong}
              alt="wrong"
              onClick={props.onHide}
            />
          </div>
        </div>
        <div className="bg-light-white rounded-12 mh-100 ">
          <Row className="mt-3 d-block">
            <Col>
              <div className="d-flex flex-column justify-content-between">
                <div className="d-flex col-md-12  col-xs-12 col-sm-12">
                  <input
                    required
                    type="text"
                    className={`form-control  rounded`}
                    placeholder="Full name*"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleChangeSearch}
                  />
                </div>
                <div className="ml-3">
                  {validator.current.message(
                    "Full Name ",
                    data.fullName,
                    "required"
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-3">
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex col-md-12  col-xs-12 col-sm-12">
                <input
                  required
                  type="text"
                  className={`form-control  rounded`}
                  placeholder="Work Email*"
                  name="businessEmail"
                  value={data.businessEmail}
                  onChange={handleChangeSearch}
                />
              </div>
              <div className="ml-3">
                {validator.current.message(
                  "Business Email ",
                  data.businessEmail,
                  "required|email"
                )}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex col-md-12  col-xs-12 col-sm-12">
                <input
                  type="number"
                  className={`form-control  rounded`}
                  placeholder="Phone number"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleChangeSearch}
                />
              </div>
              <div className="ml-3">
                {validator.current.message(
                  "Phone Number ",
                  data.phoneNumber,
                  "required|phoneNumber"
                )}
              </div>
            </div>
          </div>

          <div className="mt-3 mx-auto">
            <Row>
              <Col>
                <label
                  htmlFor="sizeOfOrganization"
                  className="text-gray-500 text-sm mb-2 text-center sm:text-left"
                  onClick={() => selectRef.current.focus()}
                >
                  Size of Organization*
                </label>
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <Select
                    id="sizeOfOrganization"
                    ref={selectRef}
                    required
                    value={
                      updatedOptions1.find(
                        (option) => option.value === data.sizeOfOrganization
                      ) || null
                    }
                    options={updatedOptions1}
                    onChange={(e) =>
                      handleChangeSearch({
                        target: {
                          name: "sizeOfOrganization",
                          value: e.value,
                          label: e.label,
                        },
                      })
                    }
                    className="custom-dropdown col-md-12"
                  />
                  <div className="ml-3">
                    {validator.current.message(
                      "Size Of Organization",
                      data.sizeOfOrganization,
                      "required"
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="text-center mt-3">
          <button
            style={{
              fontSize: "14px",
              backgroundColor: "#083c61",
            }}
            className="border-0 rounded text-white form-control d-flex justify-content-center align-items-center"
            onClick={onSubmit}
            type="button"
            disabled={props.loading}
          >
            {props.loading ? (
              <>
                <span className="me-2">Scheduling</span>
                <LoadingIndicator />
              </>
            ) : (
              "Schedule Demo"
            )}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
