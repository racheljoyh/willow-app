import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

function Application({ app, handleDeleteApp }) {
  let { currentUser } = useContext(UserContext);
  const { status } = app;
  const { price, image, street, city, state } = app.listing;

  function handleDeleteAppClick() {
    fetch(`/my_applications/${currentUser.id}/${app.id}`, {
      method: "DELETE",
    }).then(() => handleDeleteApp(app));
  }

  return (
    <div>
      <img src={image} alt={street} />
      <p>{street}</p>
      <p>
        {city}, {state}
      </p>
      <p>${price.toLocaleString("en-US")}/month</p>
      <p>Application Status: {status}</p>
      <button onClick={handleDeleteAppClick}>Cancel Application</button>
    </div>
  );
}

export default Application;
