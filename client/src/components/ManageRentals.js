import RentalForm from "./RentalForm";
import { useState, useEffect, useContext } from "react";

import { UserContext } from "../Context/UserProvider";
import MyRental from "./MyRental";

function ManageRentals() {
  const [myRentals, setMyRentals] = useState([]);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  let { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser)
      fetch("/my_listings/all").then((r) => {
        if (r.ok) {
          r.json().then((rentals) => {
            setMyRentals(rentals);
          });
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
      setMyRentals={setMyRentals}
      handleDelete={handleDelete}
    />
  ));
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (allMyRentals.length === 0)
    return (
      <div>
        <button onClick={togglePopup}>
          {isOpen ? "Close" : "Add Listing"}
        </button>
        <p>You currently have no listings...</p>
        {isOpen === true ? (
          <RentalForm setIsOpen={setIsOpen} setMyRentals={setMyRentals} />
        ) : null}
      </div>
    );

  return (
    <div>
      <button onClick={togglePopup}>{isOpen ? "Close" : "Add Listing"}</button>
      {isOpen === true ? (
        <RentalForm setIsOpen={setIsOpen} setMyRentals={setMyRentals} />
      ) : null}
      <div>{allMyRentals}</div>
    </div>
  );
}

export default ManageRentals;
