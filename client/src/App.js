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
  const [filterBy, setFilterBy] = useState("All");

  useEffect(() => {
    fetch("/listings").then((r) => {
      if (r.ok) {
        r.json().then((rentals) => setRentals(rentals));
      }
    });
  }, []);

  // const filteredSearch = rentals.filter((rental) => {
  //   if (filterBy === "All") return true;
  //   return rental.city.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  const rentalsToDisplay = rentals.filter((rental) => {
    return (
      rental.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.zip.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.street.toLowerCase().includes(searchQuery.toLowerCase())
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
                rentals={rentalsToDisplay}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
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
