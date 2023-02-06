function Search({
  searchQuery,
  setSearchQuery,
  filterByBedrooms,
  setFilterByBedrooms,
  filterByBath,
  setFilterByBath,
}) {
  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter an address, city, or ZIP code"
      />
      <label>
        <strong> Bedrooms: </strong>
        <select
          onChange={(e) => setFilterByBedrooms(e.target.value)}
          value={filterByBedrooms}
        >
          <option value="Any">Any</option>
          <option value="0">Studio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <label>
        <strong> Bathrooms: </strong>
        <select
          onChange={(e) => setFilterByBath(e.target.value)}
          value={filterByBath}
        >
          <option value="Any">Any</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
    </div>
  );
}

export default Search;
