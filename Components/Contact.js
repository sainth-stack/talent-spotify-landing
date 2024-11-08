// import React from "react";
// import contactusCard from "../assets/svg/contactusCard.svg";
// import Image from "next/image";
// import Button from "./Button";
// import BrowseFilesNormal from "./BrowseFilesNormal";
// import { useState } from "react";
// import axios from "axios";
// import { Validator } from "../utilities";
// import { Toast } from "react-bootstrap";

// export default function Contact() {
//   const validator = Validator();
//   const [loading, setLoading] = useState(false);
//   const [, setError] = useState(false);
//   const [, forceUpdate] = useState(false);
//   const [user, setUser] = useState({
//     name: "",
//     subject: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const handleChange = ({ target: { name, value } }) => {
//     setUser((prevUser) => {
//       return { ...prevUser, [name]: value };
//     });
//   };
//   const clearAll = () => {
//     setUser({
//       name: "",
//       subject: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validator.current.allValid()) {
//       setLoading(true);
//       let response = await axios.post(
//         "https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/contactus",
//         user
//       );
//       if (response.data.success) {
//         setLoading(false);
//         setError("");
//         //Toast({ message: "Contact Form Submitted Successfully!", type: "success", time: 4000 })
//         alert("Contact Form Submitted Successfully!");
//         //clearAll();
//         window.location.reload();
//       } else {
//         setLoading(false);
//         setError("Something went wrong in network");
//         //Toast({ message: "Something went wrong in network", type: "error", time: 4000 })
//       }
//     } else {
//       validator.current.showMessages();
//       forceUpdate(true);
//     }
//   };
//   return (
//     // <div className="pt-lg-5">
//     //   <p className="careerh d-flex justify-content-center">Contact Us</p>
//     //   <div className="d-block d-lg-none col-sm-12 col-md-6 ml-lg-4 mt-5">
//     //     <Image src={contactusCard} alt="image1" />
//     //   </div>
//     //   <div className="d-flex flex-wrap mt-5 pt-5">

//     //     <div className="col bgcontent1">
//     //       <div className="  align-self-center  ">
//     //         <p className="">Please fill below form:</p>
//     //         <form className="" onSubmit={handleSubmit}>
//     //           <p className="cdesc">Fill up the form and our team will get back to you within 24 hours.</p>

//     //           <div className="row">
//     //             <div className="col">
//     //               <div className="d-flex flex-column">
//     //                 <label className="textcareer ">Name*</label>
//     //                 <input type="text" className="inputcareer" id="usr" name="name" value={user.name} onChange={handleChange} />
//     //               </div>
//     //               {validator.current.message("Name ", user.name, "required")}
//     //               <div className="d-flex flex-column mt-4">
//     //                 <label className="textcareer ">Subject*</label>
//     //                 <input type="text" className="inputcareer " id="pwd" name="subject" value={user.subject} onChange={handleChange} />
//     //               </div>
//     //               {validator.current.message("Subject ", user.subject, "required")}
//     //             </div>
//     //             <div className="col">
//     //               <div className="d-flex flex-column ">
//     //                 <label className="textcareer emailmb">Email Address*</label>
//     //                 <input type="email" className="inputcareer" id="usr" name="email" value={user.email} onChange={handleChange} />
//     //               </div>
//     //               {validator.current.message("Email ", user.email, "required|email")}
//     //               <div className="d-flex flex-column mt-4 ">
//     //                 <label className="textcareer ">Phone</label>
//     //                 <input type="text" className="inputcareer " id="pwd" name="phone" value={user.phone} onChange={handleChange} />
//     //               </div>
//     //               {validator.current.message("Phone ", user.phone, "required|phone")}
//     //             </div>
//     //           </div>

//     //           <div className='mt-5'>
//     //             <label className='textcareer'>Message</label>
//     //             <textarea className='form-control textarea' placeholder='Type your message here...' cols="62" rows="8" name="message" value={user.message} onChange={handleChange}></textarea>
//     //           </div>
//     //           {validator.current.message("Message ", user.message, "required")}
//     //           <div className="cbuttons d-flex justify-content-end mb-5  mt-3 ">
//     //             <Button
//     //               text="Clear"
//     //               className="bg-light border border-dark text-dark"
//     //               handleClick={clearAll}
//     //             />
//     //             <Button
//     //               //   handleClick={handleSave}
//     //               type="submit"
//     //               text="Save"
//     //               className="bg-green border text-white"
//     //             />
//     //           </div>
//     //         </form>

//     //       </div>
//     //     </div>
//     //     <div className="d-none d-lg-block col-sm-12 col-md-6 ml-lg-4 mt-5">
//     //       <Image src={contactusCard} alt="image1" />
//     //     </div>

//     //   </div>

//     // </div>
//     <div className="main-contactus">

//       <div class="card" className="main-contact">
//       <h4 style={{marginLeft:"320px"}}>Get in touch with us </h4>
//         <div>
//           <input
//             type="text"
//             className="inner-contact"
//             placeholder="First name*"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="inner-contact"
//             placeholder="Work Email*"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="inner-contact"
//             placeholder="Phone number*"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="inner-contact"
//             placeholder="Company name*"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="inner-contact"
//             placeholder="Subject*"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="inner-contact2"
//             placeholder="Description"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="checkbox7"><div className="checkbox-wrapper">
//       <label>
//         <input type="checkbox" />
//         <span style={{marginLeft:'10px'}}>I confirm that I have read and agree to <strong>Terms of Service </strong> and <strong>Privacy Policy*</strong></span>
//       </label>
//     </div></div>
//     <button className="contact-button">Submit</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import contactusCard from "../assets/svg/contactusCard.svg";
import Image from "next/image";
import Button from "./Button";
import axios from "axios";
import { Validator } from "../utilities";
import { Toast } from "react-bootstrap";

export default function Contact() {
  const validator = Validator();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
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
          setError("");
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
    <div className="main-contactus">
      <div className="card main-contact">
        <h4 style={{ marginLeft: "320px",marginTop:'40px',fontWeight:'800px' }}>Get in touch with us </h4>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              className="inner-contact"
              placeholder="First name*"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="inner-contact"
              placeholder="Work Email*"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              className="inner-contact"
              placeholder="Phone number*"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="company"
              className="inner-contact"
              placeholder="Company name*"
              value={user.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              className="inner-contact"
              placeholder="Subject*"
              value={user.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              className="inner-contact2"
              placeholder="Description"
              value={user.message}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox7">
            <div className="checkbox-wrapper">
              <label>
                <input type="checkbox" required />
                <span style={{ marginLeft: "10px" }}>
                  I confirm that I have read and agree to{" "}
                  <strong>Terms of Service</strong> and{" "}
                  <strong>Privacy Policy*</strong>
                </span>
              </label>
            </div>
          </div>
          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
