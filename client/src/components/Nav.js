import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

import Logo from "./images/willow-high-resolution-logo-color-on-transparent-background (1).png";

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
      <div className="user-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="user-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <p className="greeting">Hello, {currentUser.first_name}!</p>
      </div>

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
          <div>
            <div className="dropdownNavBar">
              <div className="dropdown">
                <p className="main-nav-link NavBarDropdownBtn">Account</p>
                <nav className="dropdown-content">
                  <NavLink className="main-nav-link" to="/my_rentals">
                    Manage Rentals
                  </NavLink>
                  <NavLink className="main-nav-link" to="/my_applications">
                    My Applications
                  </NavLink>
                  <NavLink className="main-nav-link" to="/account_info">
                    Account Information
                  </NavLink>
                  <NavLink
                    className="main-nav-link"
                    to="/"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
