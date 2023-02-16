import { useContext, useState, useRef } from "react";
import { UserContext } from "../Context/UserProvider";

function RentalForm({ setMyRentals, handleClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const imagesRef = useRef([]);

  let { currentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    creator_id: "",
    price: "",
    footage: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    date_available: "",
    property_owner: "",
    address: "",
  });

  function handleOnChange(e) {
    setFormData((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleUpload(e) {
    e.preventDefault();

    const submitData = new FormData();

    submitData.append("creator_id", currentUser.id);
    submitData.append("price", formData.price);
    submitData.append("footage", formData.footage);
    submitData.append("bedrooms", formData.bedrooms);
    submitData.append("bathrooms", formData.bathrooms);
    submitData.append("description", formData.description);
    submitData.append("date_available", formData.date_available);
    submitData.append("property_owner", formData.property_owner);
    submitData.append("address", formData.address);

    for (let i = 0; i < imagesRef.current.files.length; i++) {
      submitData.append("images[]", imagesRef.current.files[i]);
    }

    handleSubmit(submitData);
  }

  function handleSubmit(submitData) {
    setErrors([]);
    setIsLoading(true);

    fetch("/listings", {
      method: "POST",
      body: submitData,
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          setMyRentals((prevRentals) => [data, ...prevRentals]);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <h3 className="heading-tertiary">Add listing</h3>
        <div className="popup-details">
          <div className="form-container-add">
            <form className="form-add">
              <div className="form-column-add">
                <label>Images: </label>
                <input
                  type="file"
                  accept="images/*"
                  multiple
                  ref={imagesRef}
                  name="image"
                />
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
                />
              </div>
              <button
                onClick={handleUpload}
                className="btn btn-add"
                type="submit"
              >
                {isLoading ? "Loading..." : "Submit"}
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

export default RentalForm;
