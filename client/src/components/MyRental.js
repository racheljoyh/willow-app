function MyRental({ myRental, handleDelete }) {
  function handleDeleteRentalClick() {
    fetch(`/listings/${myRental.id}`, { method: "DELETE" }).then(() =>
      handleDelete(myRental)
    );
  }
  return (
    <div key={myRental.id}>
      <img src={myRental.image} alt={myRental.street} />
      <p>${myRental.price.toLocaleString("en-US")}/month</p>
      <p>Date available: {myRental.date_available}</p>
      <p>{myRental.street}</p>
      <p>
        {myRental.city}, {myRental.state}
      </p>
      <p>{myRental.zip}</p>
      <p>{myRental.description}</p>
      <button onClick={handleDeleteRentalClick}>Delete</button>
    </div>
  );
}

export default MyRental;
