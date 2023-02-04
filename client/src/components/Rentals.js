import Rental from "./Rental";

function Rentals({ rentals }) {
  const allRentals = rentals.map((rental) => (
    <Rental key={rental.id} rental={rental} />
  ));

  return (
    <>
      <h2>Homes and Apartments for Rent</h2>
      <div>{allRentals}</div>
    </>
  );
}

export default Rentals;
