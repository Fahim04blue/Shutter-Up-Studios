import { useAuth } from 'contexts/AuthContext';
import React, { useEffect } from 'react';
import Avatar from 'react-avatar';
import { Image } from 'react-bootstrap';
import {
  FaCog,
  FaFileMedical,
  FaListUl,
  FaUserCircle,
  FaUserPlus,
} from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { MdRateReview } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import UserService from 'services/UserService';

const Sidebar = () => {
  const { currentUser, isAdmin, setIsAdmin } = useAuth();
  const { routes } = useParams();

  useEffect(() => {
    UserService.signIn(currentUser?.email).then((data) => {
      setIsAdmin(data[0].role);
    });
  }, [currentUser?.email]);

  // setIsAdmin(userData[0]?.role);

  // console.log('User Data', userData[0]?.role);

  return (
    <div className="navigation-wrapper p-3">
      <div className="profile-image text-center p-3">
        {currentUser && (
          <>
            {currentUser.photoURL ? (
              <Image
                src={currentUser.photoURL}
                roundedCircle
                alt={currentUser.displayName}
              />
            ) : (
              <Avatar name={currentUser.displayName} round />
            )}
          </>
        )}
      </div>

      <nav className="nav nav-pills  flex-column">
        <Link
          to="/dashboard/profile"
          className={routes === 'profile' ? 'nav-link active' : ''}
        >
          <FaUserCircle className="icon" />
          <span>Profile</span>
        </Link>

        {isAdmin === 'admin' ? (
          <>
            <Link
              to="/dashboard/allBookings"
              className={routes === 'allBookings' ? 'nav-link active' : ''}
            >
              <FaListUl className="icon" />
              <span>All Bookings</span>
            </Link>

            <Link
              to="/dashboard/addService"
              className={routes === 'addService' ? 'nav-link active' : ''}
            >
              <FaFileMedical className="icon" />
              <span>Add Service</span>
            </Link>
            <Link
              to="/dashboard/manageServices"
              className={routes === 'manageServices' ? 'nav-link active' : ''}
            >
              <FaCog className="icon" />
              <span>Manage Services</span>
            </Link>

            <Link
              to="/dashboard/makeAdmin"
              className={routes === 'makeAdmin' ? 'nav-link active' : ''}
            >
              <FaUserPlus className="icon" />
              <span>Make Admin</span>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard/bookingList"
              className={routes === 'bookingList' ? 'nav-link active' : ''}
            >
              <GoChecklist className="icon" />
              <span>Booking List</span>
            </Link>

            <Link
              to="/dashboard/review"
              className={routes === 'review' ? 'nav-link active' : ''}
            >
              <MdRateReview className="icon" />
              <span>Review</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
