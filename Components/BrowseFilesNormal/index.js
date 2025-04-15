import React, { useState } from 'react';
import arrow from "../../assets/svg/arrow-up.svg";
import { FileUploader } from "react-drag-drop-files";
import axios from 'axios';
import { Toast } from 'service/toast';
import { NotificationContainer } from 'react-notifications';
import "react-notifications/lib/notifications.css";
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
              Toast({ message: "Uploaded " + percent + "%", type: "success", time: 500 })
            }
          },
        }
      )
      .then((response) => {
        // alert("Uploaded successfully");
        Toast({ message: "Uploaded Successfully", type: "success", time: 1000 })
        setData({ url: response.data.secure_url })
        setUploading(false)
      }).catch(error => {
        // alert("Upload failed");
        console.log(error);
        Toast({ message: "Uploaded Failed", type: "error", time: 1000 })
        setUploading(false)
      })
  };
  return (
    <div className="browse-border  text-center p-1 m-2 mt-3">
      {/* <div>Uploading </div>  */}
      <FileUploader handleChange={handleUpload} name="file" types={fileTypes}>
        <div className="p-2 mt-2 w-80">
          <Image src={upload} alt="upload icon" />
          <br/>
          <strong className=""  style={{fontWeight:"600"}}>Drag your Resume here Or Click Upload </strong>
          <h6 className="text-secondary">Accept file type: PDF, DOCX (5MB max) </h6>

          
        </div>
      </FileUploader>

      <NotificationContainer />
    </div>
  )
}
