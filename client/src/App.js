import Nav from "./components/Nav";
import Home from "./components/Home";
import Rentals from "./components/Rentals";
import Account from "./components/Account";
import { UserProvider } from "./Context/UserProvider";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/homes/for_rent" element={<Rentals />} />
          <Route path="/mywillow" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
