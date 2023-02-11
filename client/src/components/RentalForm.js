import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

function RentalForm({ setMyRentals, setIsOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const imagesRef = useRef([]);

  let { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

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

  // function handleFileEvent(e) {
  //   setUploadedFiles({
  //     images: e.target.files[(0, 2)],
  //   });
  // }

  function handleSubmit(submitData) {
    // const newListing = {
    //   creator_id: currentUser.id,
    //   images: formData.images,
    //   price: formData.price,
    //   footage: formData.footage,
    //   bedrooms: formData.bedrooms,
    //   bathrooms: formData.bathrooms,
    //   description: formData.description,
    //   date_available: formData.date_available,
    //   property_owner: formData.property_owner,
    //   address: formData.address,
    // };

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

  // function handleFileEvent(e) {
  //   const chosenFiles = Array.prototype.slice.call(e.target.files);
  //   handleUploadFiles(chosenFiles);
  //   console.log(e.target.files);
  // }

  // function handleUploadFiles(files) {
  //   const uploaded = [...uploadedFiles];
  //   files.some((file) => {
  //     return uploaded.push(file);
  //   });

  //   setUploadedFiles(uploaded);
  // }

  console.log(imagesRef);

  return (
    <div>
      <form>
        <h2 className="heading-secondary">Add New Listing</h2>
        <label>Images: </label>
        <input
          type="file"
          accept="images/*"
          multiple
          ref={imagesRef}
          name="image"
          // onChange={handleFileEvent}
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
        <label>Address: </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleOnChange}
        />

        <button onClick={handleUpload} className="btn login-btn" type="submit">
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
