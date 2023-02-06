import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";

function AccountInfo() {
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
    employed: employed,
    employer: employer,
  });

  function handleUpdateUser(e) {
    e.preventDefault();

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
        alert("Your profile has been updated!");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleUpdateUser}>
        <h2 className="heading-secondary">Update User Information</h2>
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
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <label>Employed: </label>
        <select
          name="employed"
          value={formData.employed}
          onChange={handleOnChange}
        >
          <option></option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
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

        <button type="submit">{isLoading ? "Loading..." : "Update"}</button>
      </form>
      <div className="errors">
        {errors.map((err) => (
          <p key={err}>{err}!</p>
        ))}
      </div>
    </div>
  );
}

export default AccountInfo;
