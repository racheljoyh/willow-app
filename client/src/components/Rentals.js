import React, { useState, useEffect } from "react";

function Rentals() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/rentals").then((r) => {
      if (r.ok) {
        r.json().then((rentals) => console.log(rentals));
      }
    });
  }, []);

  return <h2>Homes for Rent</h2>;
}

export default Rentals;
