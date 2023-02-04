import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

function Popup({ handleClose }) {
  let { currentUser } = useContext(UserContext);

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="popup-details">
          <h3 className="heading-tertiary">
            Thank you for applying, {currentUser.first_name}!
          </h3>
          <p className="popup-detail">
            Please allow up to 5 business days for us to review your
            application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
