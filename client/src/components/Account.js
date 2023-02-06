import { Link, Outlet } from "react-router-dom";

function Account() {
  return (
    <div>
      <h3>My Account</h3>
      <Link to="my_rentals">Manage Rentals</Link>
      <Link to="my_applications">My Applications</Link>
      <Link to="account_info">Account Information</Link>
      <Outlet />
    </div>
  );
}

export default Account;
