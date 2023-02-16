import React, { useContext } from "react";
import { UserContext } from "../Context/UserProvider";

function Application({ app, handleDeleteApp }) {
  let { currentUser } = useContext(UserContext);
  const { status } = app;
  const { price, street, address } = app.listing;

  function handleDeleteAppClick() {
    fetch(`/my_applications/${currentUser.id}/${app.id}`, {
      method: "DELETE",
    }).then(() => handleDeleteApp(app));
  }

  return (
    <div className="all-applications-card">
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Price: </strong>${price.toLocaleString("en-US")}/month
      </p>
      <p>
        <strong>Application Status:</strong> {status}
      </p>
      <button className="btn --my-rental-btn" onClick={handleDeleteAppClick}>
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
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Cancel application
        </div>
      </button>
    </div>
  );
}

export default Application;
