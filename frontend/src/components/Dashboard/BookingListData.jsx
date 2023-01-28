import useAsync from 'Hooks/useAsync';
import { useCallback } from 'react';
import BookingService from 'services/BookingService';
import { prettyPrintNumbers } from 'utils/utils';

const BookingListData = ({ booking }) => {
  const { eventDate, eventLocation, eventStatus, stripeSessionId } = booking;

  const getPaymentStatus = useCallback(
    () => BookingService.getSessionPaymentStatus(stripeSessionId),
    [stripeSessionId]
  );

  const { data: paymentStatus } = useAsync(getPaymentStatus);

  return (
    <tr key={booking._id}>
      <td>{booking.packageInfo.name}</td>
      <td>{booking.packageInfo.category}</td>
      <td>Tk. {prettyPrintNumbers(booking.packageInfo.price)}</td>
      <td>{paymentStatus?.payment_status}</td>
      <td>
        {eventDate.replace(/:/gm, '.').replace('T', '-').replace('Z', '')}
      </td>
      <td>{eventLocation}</td>
      <td>{eventStatus}</td>
    </tr>
  );
};

export default BookingListData;
