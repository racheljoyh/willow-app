import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import axios from "axios";

function Rental({ rental }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    image,
    price,
    description,
    date_available,
    street,
    city,
    state,
    zip,
  } = rental;

  let { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleClose() {
    setIsOpen(false);
    navigate("/");
  }

  function handleApply(e) {
    e.preventDefault();
    axios
      .post(`/apply/${currentUser.id}/${rental.id}`)
      .then((response) => console.log(response));
    setIsOpen(true);
  }

  return (
    <div>
      <img src={image} alt={street} />
      <p>${price.toLocaleString("en-US")}/month</p>
      <p>Date available: {date_available}</p>
      <p>{street}</p>
      <p>
        {city}, {state}
      </p>
      <p>{zip}</p>
      <p>{description}</p>

      <button onClick={handleApply}>Apply</button>
      {isOpen === true ? <Popup handleClose={handleClose} /> : null}
    </div>
  );
}

export default Rental;
