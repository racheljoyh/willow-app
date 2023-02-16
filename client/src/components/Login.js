import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  let { setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        username,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleToSignupPage() {
    navigate("/signup");
  }

  return (
    <div className="form-container">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h3 className="heading-tertiary">Please Login</h3>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn --login-btn" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <div className="cta-signup">
        <label> New to Willow?</label>
        <button className="btn" onClick={handleToSignupPage}>
          Sign Up
        </button>
      </div>
      <div className="errors">
        {errors.map((err) => (
          <p key={err}>{err}!</p>
        ))}
      </div>
    </div>
  );
}

export default Login;
