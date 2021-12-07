import booking from 'asset/images/booking.jpg';
import BookingForm from 'components/Bookings/BookingForm';
import React from 'react';
import { Image } from 'react-bootstrap';

const Bookings = () => (
  <div className="booking">
    <Image className="booking__img" src={booking} alt="Booking" />
    <BookingForm />
  </div>
);

export default Bookings;
