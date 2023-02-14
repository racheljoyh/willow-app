import { Link, Outlet } from "react-router-dom";

function Account() {
  return (
    <div>
      <h3>My Account</h3>
      <Link className="main-nav-link" to="my_rentals">
        Manage Rentals
      </Link>
      <Link className="main-nav-link" to="my_applications">
        My Applications
      </Link>
      <Link className="main-nav-link" to="account_info">
        Account Information
      </Link>
      <Outlet />
    </div>
  );
}

export default Account;
