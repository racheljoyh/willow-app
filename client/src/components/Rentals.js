import React, { useState, useEffect } from "react";
import Rental from "./Rental";

function Rentals() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/listings").then((r) => {
      if (r.ok) {
        r.json().then((rentals) => setRentals(rentals));
      }
    });
  }, []);

  console.log(rentals);

  const allRentals = rentals.map((rental) => (
    <Rental key={rental.id} rental={rental} />
  ));

  return (
    <>
      <h2>Homes and Apartments for Rent</h2>
      <div>{allRentals}</div>
    </>
  );
}

export default Rentals;
