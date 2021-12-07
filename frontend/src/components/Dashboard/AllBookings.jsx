import useAsync from 'Hooks/useAsync';
import { Button, Card, Table } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookingService from 'services/BookingService';
import ServiceTableSkeleton from 'skeletons/ServiceTableSkeleton';
import AllBookingsData from './AllBookingsData';

const AllBookings = () => {
  const { data: bookingData, isLoading } = useAsync(
    BookingService.getAllBookings
  );

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <h5 className="mt-2">My Bookings</h5>
        <Link to="/services">
          <Button variant="outline-primary">
            <FaArrowRight /> Go Back To Services
          </Button>
        </Link>
      </Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Package Category</th>
              <th>Package Price</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Phone</th>
              <th>Customer Address</th>
              <th>Payment Status</th>
              <th>Event Date</th>
              <th>Event Location</th>
              <th>Event Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <ServiceTableSkeleton />}
            {!isLoading && (
              <>
                {bookingData?.map((booking) => (
                  <AllBookingsData booking={booking} />
                ))}
              </>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AllBookings;
