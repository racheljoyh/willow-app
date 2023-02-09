import Rental from "./Rental";
import Search from "./Search";
import MyMap from "./MyMap";
import Map from "./Map";
import { Wrapper } from "@googlemaps/react-wrapper";

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
      {/* <Map rentals={rentals} /> */}
      <Wrapper
        apiKey={process.env.REACT_APP_API_KEY}
        version="beta"
        libraries={["marker"]}
      >
        <MyMap rentals={rentals} setRentals={setRentals} />
      </Wrapper>
    </div>
  );
}

export default Rentals;
