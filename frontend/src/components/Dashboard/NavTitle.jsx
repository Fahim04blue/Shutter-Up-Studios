import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const NavTitle = () => {
  const { routes } = useParams();
  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Container fluid>
        <Navbar.Brand>
          <h2 className="d-inline-block ml-md-3 mb-0">
            {routes === 'profile'
              ? 'Profile'
              : routes === 'orderList'
                ? 'Order List'
                : routes === 'addService'
                  ? 'Add Service'
                  : routes === 'makeAdmin'
                    ? 'Make Admin'
                    : routes === 'manageServices'
                      ? 'Manage Services'
                      : routes === 'book'
                        ? 'Book'
                        : routes === 'bookingList'
                          ? 'Booking List'
                          : routes === 'review'
                            ? 'Review'
                            : ''}
          </h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavTitle;
