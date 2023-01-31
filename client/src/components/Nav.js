import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

function Nav() {
  let { currentUser, setCurrentUser } = useContext(UserContext);

  if (!currentUser)
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    );

  return (
    <div>
      <p className="greeting">Welcome, {currentUser.first_name} </p>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
