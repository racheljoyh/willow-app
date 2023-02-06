import Rental from "./Rental";
import Search from "./Search";

function Rentals({
  rentals,
  searchQuery,
  setSearchQuery,
  filterByBedrooms,
  setFilterByBedrooms,
  setFilterByBath,
  filterByBath,
}) {
  const allRentals = rentals.map((rental) => (
    <Rental key={rental.id} rental={rental} />
  ));

  return (
    <div>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterByBedrooms={filterByBedrooms}
        setFilterByBedrooms={setFilterByBedrooms}
        setFilterByBath={setFilterByBath}
        filterByBath={filterByBath}
      />
      <h2>Homes and Apartments for Rent</h2>
      <div>{allRentals}</div>
    </div>
  );
}

export default Rentals;
