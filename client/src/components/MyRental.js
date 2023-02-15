import { useState } from "react";
import EditListingPopup from "./EditListingPopup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MyRental({ myRental, setMyRentals, handleDelete }) {
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
  } = myRental;

  function handleDeleteRentalClick() {
    fetch(`/listings/${myRental.id}`, { method: "DELETE" }).then(() =>
      handleDelete(myRental)
    );
  }

  function handleClose() {
    setIsOpen(false);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleDetails = () => {
    setIsToggled(!isToggled);
  };

  const listingImages = images.map((image) => (
    <img key={image.id} src={image.url} />
  ));

  return (
    <div className="listing-container" key={myRental.id}>
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
        </div>
      ) : (
        <div className="listing-details">
          <p>${price.toLocaleString("en-US")}/month</p>
          <p>{address}</p>
          <p>
            <strong>{bedrooms}</strong> bd | <strong>{bathrooms}</strong> ba |{" "}
            <strong>{footage}</strong> sqft
          </p>
          <button className="btn --more-btn" onClick={toggleDetails}>
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
      <button className="btn --my-rental-btn" onClick={togglePopup}>
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          Edit listing
        </div>
      </button>
      <button className="btn --my-rental-btn" onClick={handleDeleteRentalClick}>
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
          Delete
        </div>
      </button>
      {isOpen === true ? (
        <EditListingPopup
          handleClose={handleClose}
          setMyRentals={setMyRentals}
          myRental={myRental}
        />
      ) : null}
    </div>
  );
}

export default MyRental;
