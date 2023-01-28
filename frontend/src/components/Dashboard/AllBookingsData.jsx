import useAsync from 'Hooks/useAsync';
import React, { useCallback } from 'react';
import BookingService from 'services/BookingService';
import { prettyPrintNumbers } from 'utils/utils';

const AllBookingsData = ({ booking }) => {
  const {
    name,
    email,
    phone,
    address,
    eventDate,
    eventLocation,
    eventStatus,
    stripeSessionId,
  } = booking;

  const getPaymentStatus = useCallback(
    () => BookingService.getSessionPaymentStatus(stripeSessionId),
    []
  );

  const { data: paymentStatus } = useAsync(getPaymentStatus);

  const handleStatusChange = (id, status) => {
    const eventStatus = {
      eventStatus: status,
    };
    BookingService.updateBookingStatus(id, eventStatus);
    // console.log(id, status);
  };

  return (
    <tr key={booking._id}>
      <td>{booking.packageInfo.name}</td>
      <td>{booking.packageInfo.category}</td>
      <td>Tk. {prettyPrintNumbers(booking.packageInfo.price)}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{paymentStatus?.payment_status}</td>
      <td>
        {eventDate.replace(/:/gm, '.').replace('T', '-').replace('Z', '')}
      </td>
      <td>{eventLocation}</td>
      <td>
        <select
          // className={
          //   order.status === 'Pending'
          //     ? 'btn btn-danger'
          //     : order.status === 'Done'
          //     ? 'btn btn-success'
          //     : 'btn btn-info'
          // }
          defaultValue={eventStatus}
          onChange={(e) => handleStatusChange(booking._id, e.target.value)}
        >
          <option className="bg-white text-muted">Coming Soon</option>
          <option className="bg-white text-muted">On going</option>
          <option className="bg-white text-muted">Done</option>
          <option className="bg-white text-muted">Cancelled</option>
        </select>
      </td>
    </tr>
  );
};

export default AllBookingsData;
