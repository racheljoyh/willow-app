import Nav from "./components/Nav";
import Home from "./components/Home";
import Rentals from "./components/Rentals";
import MyLikes from "./components/MyLikes";
import Account from "./components/Account";
import ManageRentals from "./components/ManageRentals";
import Applications from "./components/Applications";
import { UserProvider } from "./Context/UserProvider";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountInfo from "./components/AccountInfo";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [rentals, setRentals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [bedrooms, setBedrooms] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");

  useEffect(() => {
    fetch("/listings").then((r) => {
      if (r.ok) {
        r.json().then((rentals) => setRentals(rentals));
      }
    });
  }, []);

  const rentalsToDisplay = rentals.filter((rental) => {
    return rental.address.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const rentalFilter = rentalsToDisplay.filter((rental) => {
    if (bedrooms === "Any" || bathrooms === "Any") return true;
    return (
      rental.bedrooms.toString() === bedrooms &&
      rental.bathrooms.toString() === bathrooms
    );
  });

  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/homes/for_rent"
            element={
              <Rentals
                rentals={rentalFilter}
                setRentals={setRentals}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterByBedrooms={bedrooms}
                setFilterByBedrooms={setBedrooms}
                filterByBath={bathrooms}
                setFilterByBath={setBathrooms}
              />
            }
          />
          <Route path="/mywillow" element={<Account />}>
            <Route
              path="my_rentals"
              element={
                <ManageRentals rentals={rentals} setRentals={setRentals} />
              }
            />
            <Route path="my_applications" element={<Applications />} />
            <Route path="account_info" element={<AccountInfo />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            }
          />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
