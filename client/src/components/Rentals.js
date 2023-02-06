import Rental from "./Rental";
import Search from "./Search";

function Rentals({
  rentals,
  searchQuery,
  setSearchQuery,
  filterBy,
  setFilterBy,
}) {
  const allRentals = rentals.map((rental) => (
    <Rental key={rental.id} rental={rental} />
  ));

  return (
    <div>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <h2>Homes and Apartments for Rent</h2>
      <div>{allRentals}</div>
    </div>
  );
}

export default Rentals;
