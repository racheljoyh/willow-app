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
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter an address, city, or ZIP code"
      />

      <label>
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
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>

          <strong> Bedrooms: </strong>
          <select
            onChange={(e) => setFilterByBedrooms(e.target.value)}
            value={filterByBedrooms}
            className="filter-bars"
          >
            <option value="Any">Any</option>
            <option value="0">Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </label>
      <label>
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
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
          <strong> Bathrooms: </strong>
          <select
            onChange={(e) => setFilterByBath(e.target.value)}
            value={filterByBath}
            className="filter-bars"
          >
            <option value="Any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </label>
    </div>
  );
}

export default Search;
