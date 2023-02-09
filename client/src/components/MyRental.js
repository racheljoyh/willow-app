import { useState } from "react";
import EditListingPopup from "./EditListingPopup";

function MyRental({ myRental, setMyRentals, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const { images } = myRental;

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

  return (
    <div key={myRental.id}>
      {/* <div>
        {images.map((image) => (
          <img src={image} />
        ))}
      </div> */}
      <p>{myRental.address}</p>
      <p>${myRental.price.toLocaleString("en-US")}/month</p>
      <p>Square footage: {myRental.footage}</p>
      <p>Bedrooms: {myRental.bedrooms}</p>
      <p>Bathrooms: {myRental.bathrooms}</p>
      <p>Date available: {myRental.date_available}</p>
      <p>Listing Agent: {myRental.property_owner}</p>
      <button onClick={togglePopup}>Edit Listing</button>
      <button onClick={handleDeleteRentalClick}>Delete</button>
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
