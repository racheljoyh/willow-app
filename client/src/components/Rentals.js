import Rental from "./Rental";
import Search from "./Search";
import Map from "./Map";

function Rentals({
  rentals,
  searchQuery,
  setSearchQuery,
  filterByBedrooms,
  setFilterByBedrooms,
  setFilterByBath,
  filterByBath,
  setRentals,
}) {
  const allRentals = rentals.map((rental) => (
    <Rental key={rental.id} rental={rental} />
  ));

  console.log(rentals);

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
      <Map rentals={rentals} />
    </div>
  );
}

export default Rentals;
