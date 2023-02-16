import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import axios from "axios";

function ApplicationPopup({ handleClose, rental }) {
  let { currentUser, setCurrentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const { first_name, last_name, email, income, dob, employed, employer } =
    currentUser;

  const [formData, setFormData] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
    income: income,
    dob: dob,
    employer: employer,
  });

  function handleApply(e) {
    e.preventDefault();
    axios
      .post(`/apply/${currentUser.id}/${rental.id}`)
      .then((response) => console.log(response));

    setErrors([]);
    setIsLoading(true);

    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
        alert("Your application has been sent!");
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
          <h3 className="heading-tertiary">Application</h3>
          <form className="form-update grid--2-cols" onSubmit={handleApply}>
            <div className="form-column">
              <label>First Name: </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleOnChange}
              />
              <label>Last Name </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleOnChange}
              />
              <label>DOB: </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-column">
              <label>Email: </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
              />

              <label>Employer: </label>
              <input
                type="text"
                name="employer"
                value={formData.employer}
                onChange={handleOnChange}
              />
              <label>Income: </label>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleOnChange}
              />
            </div>
            <button className="btn --submit-btn" type="submit">
              {isLoading ? "Loading..." : "Submit Application"}
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
  );
}

export default ApplicationPopup;
