import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faImage } from "@fortawesome/free-solid-svg-icons";
import "../../../../../css/Createnewimage.css";

export default (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(props.image);
  });

  console.log(image);
  return (
    <div className="buttons fadein">
      {console.log(props)}
      <div>
        <label htmlFor="single" className="buttonImage">
          {image === "" ? (
            <FontAwesomeIcon icon={faImage} color="#3B5998" size="10x" />
          ) : (
            <img src={image} width="150" alt="uploaded image" />
          )}
        </label>
        <input type="file" id="single" onChange={props.onChange} hidden />
      </div>

      {/* <div className="button">
        <label htmlFor="multi">
          <FontAwesomeIcon icon={faImages} color="#6d84b4" size="10x" />
        </label>
        <input type="file" id="multi" onChange={props.onChange} multiple />
      </div> */}
    </div>
  );
};
