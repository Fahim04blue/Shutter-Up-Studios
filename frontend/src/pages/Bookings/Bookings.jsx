import booking from 'asset/images/booking.jpg';
import BookingForm from 'components/Bookings/BookingForm';
import MetaData from 'components/common/MetaData';
import { Image } from 'react-bootstrap';

const Bookings = () => (
  <div className="booking">
    <MetaData title="Booking" />
    <Image className="booking__img" src={booking} alt="Booking" />
    <BookingForm />
  </div>
);

export default Bookings;
