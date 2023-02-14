import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
import Logo from "./images/willow-high-resolution-logo-color-on-transparent-background.png";

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
      <div className="header">
        <p className="greeting"></p>
        <img className="logo" src={Logo} alt="logo" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <NavLink className="main-nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/homes/for_rent">
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/login">
                Sign in
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );

  return (
    <div className="header">
      <p className="greeting">Hi, {currentUser.first_name}!</p>
      <img className="logo" src={Logo} alt="logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <NavLink className="main-nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="main-nav-link" to="/homes/for_rent">
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink className="main-nav-link" to="/mywillow">
              Account
            </NavLink>
          </li>
          <button className="btn --nav-btn" onClick={handleLogoutClick}>
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
