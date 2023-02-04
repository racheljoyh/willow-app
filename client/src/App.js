import Nav from "./components/Nav";
import Home from "./components/Home";
import Rentals from "./components/Rentals";
import Account from "./components/Account";
import ManageRentals from "./components/ManageRentals";
import Applications from "./components/Applications";
import { UserProvider } from "./Context/UserProvider";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetch("/listings").then((r) => {
      if (r.ok) {
        r.json().then((rentals) => setRentals(rentals));
      }
    });
  }, []);

  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/homes/for_rent"
            element={<Rentals rentals={rentals} />}
          />
          <Route path="/mywillow" element={<Account />}>
            <Route
              path="my_rentals"
              element={<ManageRentals rentals={rentals} setRentals={setRentals} />}
            />
            <Route path="my_applications" element={<Applications />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
