import ApplicationForm from "./ApplicationForm";

function Rental({ rental }) {
  const { image, price } = rental;
  const { description, street, city, state, zip } = rental.listing_info;

  // function handleApplyButtonClick {

  // }

  return (
    <div>
      <img src={image} alt={street} />
      <p>{street}</p>
      <p>
        {city}, {state}
      </p>
      <p></p>
      <p>{zip}</p>
      <p>{description}</p>
      <p>${price.toLocaleString("en-US")}/month</p>
      <button>Apply</button>
    </div>
  );
}

export default Rental;
