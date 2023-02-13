import { useState } from "react";
import EditListingPopup from "./EditListingPopup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MyRental({ myRental, setMyRentals, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDeleteRentalClick() {
    fetch(`/listings/${myRental.id}`, { method: "DELETE" }).then(() =>
      handleDelete(myRental)
    );
  }

  const { images } = myRental;
  console.log(images);

  function handleClose() {
    setIsOpen(false);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const listingImages = images.map((image) => (
    <img key={image.id} src={image.url} />
  ));

  return (
    <div key={myRental.id}>
      <Carousel width="30%">{listingImages}</Carousel>
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
