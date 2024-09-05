import React, { useState } from "react";
import careerimg from "../assets/svg/careerimg.svg";
import Image from "next/image";
import Button from "./Button";
import BrowseFilesNormal from "./BrowseFilesNormal";
import { Validator } from "../utilities";
import axios from "axios";

export default function Carrers() {
  const validator = Validator();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [, forceUpdate] = useState(false);
  const [user, setUser] = useState({
    name: "",
    linkedinURL: "https://www.linkedin.com/in/name",
    email: "",
    phone: "",
    cvURL: "",
  })
  const handleChange = ({ target: { name, value } }) => {
    setUser((prevUser) => {
      return { ...prevUser, [name]: value }
    })
  }
  const clearAll = () => {
    setUser({
      name: "",
      linkedinURL: "https://www.linkedin.com/in/name",
      email: "",
      phone: "",
      cvURL: ""
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setLoading(true);
      let response = await axios.post("https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/career", user
      )
      if (response.data.success) {
        setLoading(false);
        setError("");
        //Toast({ message: "Career Form Submitted Successfully!", type: "success", time: 4000 })
        alert("Career Form Submitted Successfully!");
        //clearAll();
        window.location.reload();
      } else {
        setLoading(false);
        alert(response.data.message);
        //Toast({ message: "Something went wrong in network", type: "error", time: 4000 })
      }
    } else {
      validator.current.showMessages();
      forceUpdate(true);
    }
  }
  return (
    <div className="pt-lg-5">
      <p className="careerh d-flex justify-content-center">Careers</p>
      <div className="d-flex flex-wrap">
        <div className="col-lg-6 mr-5 bgcontent1 careerimg">
          <Image src={careerimg} alt="image1" />
        </div>
        <div className="col">
          <div className="  align-self-center  ">
            <p className="cform">Please fill below form:</p>
            <form className="mbform" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-column">
                    <label className="textcareer ">Name*</label>
                    <input type="text" className="inputcareer" id="usr" name="name" value={user.name} onChange={handleChange} />
                  </div>
                  {validator.current.message("Name ", user.name, "required")}
                  <div className="d-flex flex-column mt-4">
                    <label className="textcareer ">Linkedin URL*</label>
                    <input type="text" className="inputcareer" name="linkedinURL" value={user.linkedinURL} onChange={handleChange} id="pwd" />
                  </div>
                  {validator.current.message("Linkedin URL ", user.linkedinURL, "required")}
                </div>
                <div className="col">
                  <div className="d-flex flex-column ">
                    <label className="textcareer emailmb">Email Address*</label>
                    <input type="email" className="inputcareer" id="usr" name="email" value={user.email} onChange={handleChange} />
                  </div>
                  {validator.current.message("Email ", user.email, "required|email")}
                  <div className="d-flex flex-column mt-4 ">
                    <label className="textcareer ">Phone</label>
                    <input type="text" className="inputcareer " id="pwd" name="phone" value={user.phone} onChange={handleChange} />
                  </div>
                  {validator.current.message("Phone ", user.phone, "required|phone")}
                </div>
              </div>

              <div className="mt-3 mb-3 p-3">
                <p className="textcareer ">Upload CV</p>
                <BrowseFilesNormal setData={({ url }) => setUser((prevUser) => ({ ...prevUser, cvURL: url }))} />
              </div>
              {validator.current.message("CV ", user.cvURL, "required")}
              <div className="cbuttons d-flex justify-content-end mb-5  mt-3 ">
                <Button
                  text="Clear"
                  className="bg-light border border-dark text-dark"
                  handleClick={clearAll}
                />
                <Button
                  type="submit"
                  //   handleClick={handleSave}
                  text="Save"
                  className="bg-green border text-white "
                />
              </div>
            </form>

          </div>
        </div>

      </div>


    </div>

  );
}
