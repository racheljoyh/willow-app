import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

function Nav() {
  let { currentUser, setCurrentUser } = useContext(UserContext);

  let navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        navigate("/");
      }
    });
  }

  if (!currentUser)
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/homes">Buy</NavLink>
          </li>
          <li>
            <NavLink to="/homes/for_rent">Rent</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </div>
    );

  return (
    <div>
      <p className="greeting">Welcome, {currentUser.first_name} </p>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/homes">Buy</NavLink>
        </li>
        <li>
          <NavLink to="/homes/for_rent">Rent</NavLink>
        </li>
        <li>
          <NavLink to="/mywillow">Account</NavLink>
        </li>
        <li>
          <button onClick={handleLogoutClick}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
