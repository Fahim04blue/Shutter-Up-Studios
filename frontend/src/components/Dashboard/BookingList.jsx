import { useAuth } from 'contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookingService from 'services/BookingService';
import ServiceTableSkeleton from 'skeletons/ServiceTableSkeleton';
import BookingListData from './BookingListData';
import Pagination from './Pagination';

const BookingList = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    getBookingDataByEmail();
  }, [page]);

  const getBookingDataByEmail = async () => {
    setIsLoading(true);
    try {
      const res = await BookingService.getBookings(currentUser.email, page);
      setBookingData(res);
      setPages(res?.totalPages);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

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
                {bookingData?.data.map((booking) => (
                  <BookingListData key={booking._id} booking={booking} />
                ))}
              </>
            )}
          </tbody>
        </Table>
        <Pagination page={page} pages={pages} changePage={setPage} />
      </Card.Body>
    </Card>
  );
};

export default BookingList;
