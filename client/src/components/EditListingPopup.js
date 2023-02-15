import { useState } from "react";

function EditListingPopup({ handleClose, myRental, setMyRentals }) {
  const {
    price,
    footage,
    bedrooms,
    bathrooms,
    description,
    date_available,
    property_owner,
    address,
  } = myRental;

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    price: price,
    footage: footage,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    description: description,
    date_available: date_available,
    property_owner: property_owner,
    address: address,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/listings/${myRental.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((updatedListing) => {
          console.log(updatedListing);
          alert("Your listing has been updated!");
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
        <h3 className="heading-tertiary">Update Listing</h3>
        <div className="popup-details">
          <div className="form-container-add">
            <form className="form-add" onSubmit={handleSubmit}>
              <div className="form-column-add">
                <label>Address: </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
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
                <div className="bed-bath-column">
                  <label>Bd: </label>
                  <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleOnChange}
                  />
                  <label>Ba: </label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="form-column-add">
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
                <label>Summary of listing: </label>
                <textarea
                  className="summary"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleOnChange}
                  rows="5"
                  cols="60"
                ></textarea>
              </div>
              <button className="btn btn-update" type="submit">
                {isLoading ? "Loading..." : "Update"}
              </button>
            </form>
            <div className="errors">
              {errors.map((err) => (
                <p key={err}>{err}!</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditListingPopup;
