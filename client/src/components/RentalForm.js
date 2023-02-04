import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

function RentalForm({ setMyRentals, setIsOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  let { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    creator_id: "",
    image: "",
    price: "",
    footage: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    date_available: "",
    property_owner: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  function handleOnChange(e) {
    setFormData((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newListing = {
      creator_id: currentUser.id,
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

    setErrors([]);
    setIsLoading(true);
    if (currentUser) {
      fetch("/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newListing),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((newRental) => {
            setMyRentals((prevRentals) => [newRental, ...prevRentals]);
            setIsOpen(false);
            navigate("/homes/for_rent");
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="heading-secondary">Add New Listing</h2>
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

        <button className="btn login-btn" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      <div className="errors">
        {errors.map((err) => (
          <p key={err}>{err}!</p>
        ))}
      </div>
    </div>
  );
}

export default RentalForm;
