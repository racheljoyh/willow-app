import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  let { setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [credentials, setCredentials] = useState({
    username: username,
    password: password,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credentials,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user))
        navigate('/');
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      navigate("/");
    });
  }

  function handleChange(e) {
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [e.target.name]: e.target.value,
      };
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Please Login</h2>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
      </form>
    </div>
  );
}

export default Login;
