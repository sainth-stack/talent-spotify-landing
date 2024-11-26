import React, { useState } from "react";
import axios from "axios";
import { Validator } from "../utilities";
import { Toast } from "react-bootstrap";

export default function Contact() {
  const validator = Validator();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const clearAll = () => {
    setUser({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/contactus",
          user
        );
        setLoading(false);
        if (response.data.success) {
          setError(null);
          alert("Contact Form Submitted Successfully!");
          clearAll();
        } else {
          setError("Something went wrong in the network");
          alert("Something went wrong in the network!");
        }
      } catch (error) {
        setLoading(false);
        setError("An error occurred during submission");
      }
    } else {
      validator.current.showMessages();
    }
  };

  return (
    <div  className="p-4 shadow-md rounded" style={{ backgroundColor: "#fff", paddingTop: "20px" }}>
      <div className="container ">
        <div className="row justify-content-center mx-4">
          <div className="col-12 col-md-9 col-sm-12">
            <div className="">
              <h4 className="text-center mb-4 " style={{ fontWeight: "800" }}>
                Get in touch with us
              </h4>
              <form onSubmit={handleSubmit} >
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control f "
                    placeholder="First name*"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Work Email*"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone number*"
                    value={user.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    placeholder="Company name*"
                    value={user.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject*"
                    value={user.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control no-rounded-corners"
                    placeholder="Description"
                    value={user.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    required
                  />
                 <label className="form-check-label d-inline font-small">
  I confirm that I have read and agree to{" "}
  <strong   style={{color:"#42bdff"}}>Terms of Service</strong> and{" "}
  <strong  style={{color:"#42bdff"}}>Privacy Policy*</strong>
</label>

                </div>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  style={{background:"#083c61",color:"#fff"}}
                  
                  className="btn  w-100"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
