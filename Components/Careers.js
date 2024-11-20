import React, { useState } from "react";
import BrowseFilesNormal from "./BrowseFilesNormal";
import { Validator } from "../utilities";
import axios from "axios";

export default function Careers() {
  const validator = Validator();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [, forceUpdate] = useState(false);
  const [user, setUser] = useState({
    name: "",
    linkedinURL: "",
    email: "",
    phone: "",
    cvURL: "",
    company: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const clearAll = () => {
    setUser({
      name: "",
      linkedinURL: "https://www.linkedin.com/in/name",
      email: "",
      phone: "",
      cvURL: "",
      company: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/career",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.success) {
          setLoading(false);
          setError("");
          alert("Career Form Submitted Successfully!");
          clearAll();
          window.location.reload();
        } else {
          setLoading(false);
          alert(response.data.message || "Something went wrong.");
        }
      } catch (error) {
        setLoading(false);
        setError(
          "An error occurred while submitting the form. Please try again."
        );
        console.error("Error:", error);
      }
    } else {
      validator.current.showMessages();
      forceUpdate(true);
    }
  };

  return (
    <div
      className="container bg-light py-4"
      style={{ backgroundColor: "#ebe3d5" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-9 col-sm-12 bg-white p-4 rounded ">
          <h4 className="text-center mb-4" style={{ fontWeight: "bold" }}>
            JOB APPLY
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="First name*"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="form-control form-control-sm"
                placeholder=" Email*"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                className="form-control form-control-sm"
                placeholder="Phone number*"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="company"
                className="form-control form-control-sm"
                placeholder="Role*"
                value={user.company}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="linkedinURL"
                className="form-control form-control-sm"
                placeholder="LinkedIn URL*"
                value={user.linkedinURL}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 row justify-content-center">
              <BrowseFilesNormal
                setData={({ url }) =>
                  setUser((prevUser) => ({ ...prevUser, cvURL: url }))
                }
              />
              {validator.current.message("CV", user.cvURL, "required")}
            </div>
            <div className="d-grid">
              <button
                type="submit"
                style={{ background: "#083c61",color:"#fff" }}
                className="btn"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
