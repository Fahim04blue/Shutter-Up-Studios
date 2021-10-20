import React from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  FaUserCircle,
  FaListUl,
  FaFileMedical,
  FaUserPlus,
  FaCog,
} from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { MdRateReview } from 'react-icons/md';
import Avatar from 'react-avatar';

const Sidebar = () => {
  const { routes } = useParams();
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <Avatar name="Shahriar Saleh" round />
      </div>

      <ul className="list-unstyled components">
        <li>
          <Link
            to="/dashboard/profile"
            className={routes === 'profile' ? 'link-active' : ''}
          >
            <FaUserCircle style={{ fontSize: '1.3rem' }} />
            <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/orderList"
            className={routes === 'orderList' ? 'link-active' : ''}
          >
            <FaListUl />
            {' '}
            <span>Order List</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addService"
            className={routes === 'addService' ? 'link-active' : ''}
          >
            <FaFileMedical />
            {' '}
            <span>Add Service</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/makeAdmin"
            className={routes === 'makeAdmin' ? 'link-active' : ''}
          >
            <FaUserPlus />
            {' '}
            <span>Make Admin</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/manageServices"
            className={routes === 'manageServices' ? 'link-active' : ''}
          >
            <FaCog />
            {' '}
            <span>Manage Services</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/bookingList"
            className={routes === 'bookingList' ? 'link-active' : ''}
          >
            <GoChecklist />
            {' '}
            <span>Booking List</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/review"
            className={routes === 'review' ? 'link-active' : ''}
          >
            <MdRateReview />
            {' '}
            <span>Review</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
