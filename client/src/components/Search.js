function Search({ searchQuery, setSearchQuery, filterBy, setFilterBy }) {
  function handleSearchChange(event) {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter an address, city, or ZIP code"
      />
    </div>
  );
}

export default Search;
