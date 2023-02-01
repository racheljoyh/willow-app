import React, { useState, useEffect } from "react";

function HomesForSale() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/homes").then((r) => {
      if (r.ok) {
        r.json().then((homes) => console.log(homes));
      }
    });
  }, []);

  return <h2>Homes for Sale</h2>;
}

export default HomesForSale;
