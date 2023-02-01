import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  let { setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      navigate("/");
    });
  }

  function handleOnChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="heading-secondary">Sign Up</h2>
        <label>First Name: </label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleOnChange}
        />
        <label>Last Name: </label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleOnChange}
        />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <label>Password Confirmation: </label>
        <input
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleOnChange}
        />

        <button className="btn login-btn" type="submit">
          {isLoading ? "Loading..." : "Signup"}
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

export default Signup;
