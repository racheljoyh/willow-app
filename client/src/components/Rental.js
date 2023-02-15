import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationPopup from "./ApplicationPopup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Rental({ rental }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const {
    images,
    price,
    description,
    bedrooms,
    bathrooms,
    footage,
    date_available,
    address,
    property_owner,
  } = rental;

  let navigate = useNavigate();

  function handleClose() {
    setIsOpen(false);
    navigate("/homes/for_rent");
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleDetails = () => {
    setIsToggled(!isToggled);
  };

  const listingImages = images.map((image) => {
    return <img key={image.id} src={image.url} />;
  });

  return (
    <div className="listing-container">
      <Carousel width="100%">{listingImages}</Carousel>
      {isToggled === true ? (
        <div className="listing-details">
          <p>${price.toLocaleString("en-US")}/month</p>
          <p>{address}</p>
          <p>
            <strong>{bedrooms}</strong> bd | <strong>{bedrooms}</strong> ba |{" "}
            <strong>{footage}</strong> sqft
          </p>
          <p>
            <strong>Available:</strong> {date_available}
          </p>
          <p className="building-overview">
            <strong>Building overview:</strong>
          </p>
          <p>{description}</p>
          <p>
            <strong>Listing agent:</strong> {property_owner}
          </p>
          <button className="btn --details-btn" onClick={toggleDetails}>
            Less details
          </button>

          <button className="btn" onClick={togglePopup}>
            Apply
          </button>
        </div>
      ) : (
        <div className="listing-details">
          <p>${price.toLocaleString("en-US")}/month</p>
          <p>{address}</p>
          <p>
            <strong>{bedrooms}</strong> bd | <strong>{bathrooms}</strong> ba |{" "}
            <strong>{footage}</strong> sqft
          </p>
          <button className="btn" onClick={toggleDetails}>
            <div className="btn-w-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="btn-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>{" "}
              More
            </div>
          </button>
        </div>
      )}
      {isOpen === true ? (
        <ApplicationPopup handleClose={handleClose} rental={rental} />
      ) : null}
    </div>
  );
}

export default Rental;
