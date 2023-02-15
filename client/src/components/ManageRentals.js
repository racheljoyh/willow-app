import RentalForm from "./RentalForm";
import { useState, useEffect, useContext } from "react";

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

  function handleClose() {
    setIsOpen(false);
  }

  if (allMyRentals.length === 0)
    return (
      <div>
        <button className="btn" onClick={togglePopup}>
          {isOpen ? "Close" : "Add Listing"}
        </button>
        <p>You currently have no listings...</p>
        {isOpen === true ? (
          <RentalForm
            setIsOpen={setIsOpen}
            setMyRentals={setMyRentals}
            handleClose={handleClose}
          />
        ) : null}
      </div>
    );

  return (
    <div>
      <button className="btn --add-btn" onClick={togglePopup}>
        {isOpen ? (
          "Close"
        ) : (
          <div className="btn-w-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="btn-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>{" "}
            Add Listing
          </div>
        )}
      </button>
      {isOpen === true ? (
        <RentalForm
          setIsOpen={setIsOpen}
          setMyRentals={setMyRentals}
          handleClose={handleClose}
        />
      ) : null}
      <div className="my-rentals">{allMyRentals}</div>
    </div>
  );
}

export default ManageRentals;
