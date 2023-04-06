import React from "react";
import upload from '../../assets/Icons/upload.svg'
import './UploadButton.scss'


function UploadButton() {
  return (
    <div className="upload">
      <button className="upload__button" placeholder="UPLOAD">
        <img src={upload}></img>
        <span className="upload__button-text">UPLOAD</span>
      </button>
    </div>
  );
}

export default UploadButton;
