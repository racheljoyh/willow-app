import RentalForm from "./RentalForm";
import { useState, useEffect, useContext } from "react";
import { all } from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
import MyRental from "./MyRental";

function ManageRentals() {
  const [myRentals, setMyRentals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  let { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser)
      fetch("/my_listings/all").then((r) => {
        if (r.ok) {
          r.json().then((rentals) => setMyRentals(rentals));
        }
      });
  }, [currentUser]);

  function handleDelete(deletedRental) {
    const updatedRentals = myRentals.filter(
      (rental) => rental.id !== deletedRental.id
    );
    setMyRentals(updatedRentals);
  }

  const allMyRentals = myRentals.map((myRental) => (
    <MyRental
      key={myRental.id}
      myRental={myRental}
      handleDelete={handleDelete}
    />
  ));

  if (allMyRentals.length === 0)
    return (
      <>
        <RentalForm setMyRentals={setMyRentals} />
      </>
    );

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={togglePopup}>Add Listing</button>
      {isOpen === true ? (
        <RentalForm setIsOpen={setIsOpen} setMyRentals={setMyRentals} />
      ) : null}
      <div>{allMyRentals}</div>
    </>
  );
}

export default ManageRentals;
