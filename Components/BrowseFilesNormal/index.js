import React, { useState } from 'react';
import arrow from "../../assets/svg/arrow-up.svg";
import { FileUploader } from "react-drag-drop-files";
import axios from 'axios';
// import { Toast } from 'service/toast';
import { NotificationContainer } from 'react-notifications';
//import { LoadingIndicator } from 'utilities';
const fileTypes = ["XLSX", "CSV", "PNG", "JPG", "JPEG", "PDF"];
import upload from "../../assets/svg/upload.svg";


import Image from "next/image";


export default function BrowseFilesNormal({ text = "", setData }) {
  const [uploading, setUploading] = useState(false);
  const handleUpload = (file) => {
    setUploading(true)
    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ma7nge92");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dbqm9svvp/raw/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            let percent = Math.round(
              (progressEvent.uploaded / progressEvent.total) * 100
            );
            if (percent === 25 || percent === 50 || percent === 75 || percent === 100) {
              //alert("Uploaded successfully");
              //Toast({ message: "Uploaded " + percent + "%", type: "success", time: 500 })
            }
          },
        }
      )
      .then((response) => {
        alert("Uploaded successfully");
        //Toast({ message: "Uploaded Successfully", type: "success", time: 1000 })
        setData({ url: response.data.secure_url })
        setUploading(false)
      }).catch(error => {
        alert("Upload failed");
        console.log(error);
        //Toast({ message: "Uploaded Failed", type: "error", time: 1000 })
        setUploading(false)
      })
  };
  return (
    <div className="browse-border text-center mt-3">
      {/* <div>Uploading </div>  */}
      <FileUploader handleChange={handleUpload} name="file" types={fileTypes}>
        <div className="p-2 mt-2 w-100">
          <Image src={upload} alt="upload icon" />
          <p className="drag-text">Drag &amp; Drop file to upload or</p>
          <button className="browse-button"><Image src={arrow} alt="arrow up" /> Browse file</button>
        </div>
      </FileUploader>

      <NotificationContainer />
    </div>
  )
}
