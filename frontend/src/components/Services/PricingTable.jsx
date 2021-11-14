import { FaCheck } from 'react-icons/fa';
import { prettyPrintNumbers } from 'utils/utils';

const PricingTable = ({ services }) => {
  const { _id, name, price, description } = services;
  const handleBook = () => {
    console.log(_id);
  };
  return (
    <div className="card-body">
      <h5 className="card-title  text-uppercase text-center">{name}</h5>
      <h6 className="card-price text-center">
        TK.
        {prettyPrintNumbers(price)}
        /=
      </h6>
      <hr />
      <ul className="fa-ul">
        {description.map((desc) => (
          <li>
            <span>
              <FaCheck />
            </span>
            {desc.name}
          </li>
        ))}
      </ul>
      <div className="d-grid gap-2">
        <button
          onClick={handleBook}
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
