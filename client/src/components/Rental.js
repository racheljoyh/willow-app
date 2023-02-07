import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationPopup from "./ApplicationPopup";

function Rental({ rental }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    image,
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

  return (
    <div>
      <img src={image} alt={address} />
      <p>${price.toLocaleString("en-US")}/month</p>
      <p>{address}</p>
      <p>Square footage: {footage}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Date available: {date_available}</p>

      <p>{description}</p>
      <p>Listing Agent: {property_owner}</p>

      <button onClick={togglePopup}>Apply</button>
      {isOpen === true ? (
        <ApplicationPopup handleClose={handleClose} rental={rental} />
      ) : null}
    </div>
  );
}

export default Rental;
