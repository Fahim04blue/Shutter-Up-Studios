import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Profile from './Profile';

const NavTitle = () => {
  const { routes } = useParams();
  return (
    <Container>
      <div className="info__card">
        <div className="bread-crumb border-bottom px-md-4 px-3">
          {routes === 'profile' ? (
            <h3>My Profile</h3>
          ) : routes === 'orderList' ? (
            <h3>Order List</h3>
          ) : routes === 'addService' ? (
            <h3>Add Service</h3>
          ) : routes === 'makeAdmin' ? (
            <h3>Make Admin</h3>
          ) : routes === 'manageServices' ? (
            <h3>Manage Services</h3>
          ) : routes === 'book' ? (
            <h3>Book</h3>
          ) : routes === 'bookingList' ? (
            <h3>Booking List</h3>
          ) : routes === 'review' ? (
            <h3>Review</h3>
          ) : (
            ''
          )}
        </div>
        <div className="p-md-4 p-3 pb-2 m-2">
          {routes === 'profile' ? (
            <Profile />
          ) : routes === 'orderList' ? (
            <h3>Order List</h3>
          ) : routes === 'addService' ? (
            <h3>Add Service</h3>
          ) : routes === 'makeAdmin' ? (
            <h3>Make Admin</h3>
          ) : routes === 'manageServices' ? (
            <h3>Manage Services</h3>
          ) : routes === 'bookingList' ? (
            <h3>Booking List</h3>
          ) : routes === 'review' ? (
            <h3>Review</h3>
          ) : (
            ''
          )}
        </div>
      </div>
    </Container>
  );
};

export default NavTitle;
