import AdminRoute from 'components/Auth/AdminRoute';
import UserRoute from 'components/Auth/UserRoute';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, useParams } from 'react-router-dom';
import AddService from './AddService';
import AllBookings from './AllBookings';
import BookingList from './BookingList';
import MakeAdmin from './MakeAdmin';
import ManageService from './ManageService';
import Profile from './Profile';
import Review from './Review';

const NavTitle = () => {
  const { routes } = useParams();
  return (
    <Container>
      <div className="info__card">
        <div className="bread-crumb border-bottom px-md-4 px-3">
          {routes === 'profile' ? (
            <h3>My Profile</h3>
          ) : routes === 'allBookings' ? (
            <h3>All Bookings</h3>
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
          <Switch>
            {routes === 'profile' ? (
              <Profile />
            ) : routes === 'allBookings' ? (
              <AdminRoute
                exact
                path="/dashboard/allBookings"
                component={AllBookings}
              />
            ) : routes === 'addService' ? (
              <AdminRoute
                exact
                path="/dashboard/addService"
                component={AddService}
              />
            ) : routes === 'makeAdmin' ? (
              <AdminRoute
                exact
                path="/dashboard/makeAdmin"
                component={MakeAdmin}
              />
            ) : routes === 'manageServices' ? (
              <AdminRoute
                exact
                path="/dashboard/manageServices"
                component={ManageService}
              />
            ) : routes === 'bookingList' ? (
              <UserRoute
                exact
                path="/dashboard/bookingList"
                component={BookingList}
              />
            ) : routes === 'review' ? (
              <UserRoute exact path="/dashboard/review" component={Review} />
            ) : (
              ''
            )}
          </Switch>
        </div>
      </div>
    </Container>
  );
};

export default NavTitle;
