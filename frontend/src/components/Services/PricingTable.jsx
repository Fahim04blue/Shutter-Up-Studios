import { FaCheck } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { prettyPrintNumbers } from 'utils/utils';

const PricingTable = ({ services }) => {
  const { _id, name, price, description } = services;
  const history = useHistory();
  const handleBooking = (id) => {
    history.push(`/booking/${id}`);
  };
  return (
    <div className="product-card-details">
      <h5 className="product-card-title  text-uppercase text-center">{name}</h5>
      <h6 className="product-card-price text-center">
        TK.
        {prettyPrintNumbers(price)}
        /=
      </h6>

      <div className="short-description">
        <ul>
          {description.map((desc) => (
            <li>
              <span>
                <FaCheck />
              </span>
              {desc.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="d-grid gap-2 pt-3">
        <button
          onClick={() => handleBooking(_id)}
          type="submit"
          className="btn btn-primary text-uppercase"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PricingTable;
