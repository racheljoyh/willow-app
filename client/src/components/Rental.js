import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationPopup from "./ApplicationPopup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Rental({ rental }) {
  const [isOpen, setIsOpen] = useState(false);
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

  const listingImages = images.map((image) => {
    return <img key={image.id} src={image.url} />;
  });

  return (
    <div className="listing-container">
      <Carousel width="70%">{listingImages}</Carousel>
      <div>
        <p>${price.toLocaleString("en-US")}/month</p>
        <p>{address}</p>
        <p>{footage} sq ft.</p>
        <p>
          {bedrooms} bd, {bathrooms} ba
        </p>
        <p>Date available: {date_available}</p>

        <p>{description}</p>
        <p>Listing Agent: {property_owner}</p>

        <button onClick={togglePopup}>Apply</button>
        {isOpen === true ? (
          <ApplicationPopup handleClose={handleClose} rental={rental} />
        ) : null}
      </div>
    </div>
  );
}

export default Rental;
