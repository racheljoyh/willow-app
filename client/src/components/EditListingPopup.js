import { useState } from "react";

function EditListingPopup({ handleClose, myRental, setMyRentals }) {
  const {
    image,
    price,
    footage,
    bedrooms,
    bathrooms,
    description,
    date_available,
    property_owner,
    street,
    city,
    state,
    zip,
  } = myRental;

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    image: image,
    price: price,
    footage: footage,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    description: description,
    date_available: date_available,
    property_owner: property_owner,
    street: street,
    city: city,
    state: state,
    zip: zip,
  });

  function handleSubmit(e) {
    const updateListing = {
      image: formData.image,
      price: formData.price,
      footage: formData.footage,
      bedrooms: formData.bedrooms,
      bathrooms: formData.bathrooms,
      description: formData.description,
      date_available: formData.date_available,
      property_owner: formData.property_owner,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
    };

    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/listings/${myRental.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateListing),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((updatedListing) => {
          alert("Your listing has been updated!");
          setMyRentals((prevListings) => {
            return [...prevListings, updatedListing];
          });
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="popup-details">
          <form onSubmit={handleSubmit}>
            <h2 className="heading-secondary">Update Listing</h2>
            <label>Image: </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleOnChange}
            />
            <label>Price: </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleOnChange}
            />
            <label>Footage: </label>
            <input
              type="number"
              name="footage"
              value={formData.footage}
              onChange={handleOnChange}
            />
            <label>Number of bedrooms: </label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleOnChange}
            />
            <label>Number of bathrooms: </label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleOnChange}
            />
            <label>Summary of listing: </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleOnChange}
            />
            <label>Date available: </label>
            <input
              type="date"
              name="date_available"
              value={formData.date_available}
              onChange={handleOnChange}
            />
            <label>Property owner or management entity: </label>
            <input
              type="text"
              name="property_owner"
              value={formData.property_owner}
              onChange={handleOnChange}
            />
            <label>Street: </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleOnChange}
            />
            <label>City: </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleOnChange}
            />
            <label>State: </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleOnChange}
            />
            <label>Zip: </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleOnChange}
            />

            <button type="submit">{isLoading ? "Loading..." : "Update"}</button>
          </form>
          <div className="errors">
            {errors.map((err) => (
              <p key={err}>{err}!</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditListingPopup;
