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
      <div className="rental-container">
        <div className="map">
          <Map rentals={rentals} />
        </div>
        <div className="rental-listings-container">{allRentals}</div>
      </div>
    </div>
  );
}

export default Rentals;
