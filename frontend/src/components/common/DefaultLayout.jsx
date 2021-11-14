/* eslint-disable indent */
/* eslint-disable operator-linebreak */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ||
      location.pathname === '/services' ||
      location.pathname.includes('/dashboard') ? (
        <Header />
      ) : null}
      {children}
      {location.pathname === '/' ||
      location.pathname === '/services' ||
      location.pathname.includes('/dashboard') ? (
        <Footer />
      ) : null}
    </>
  );
};

export default DefaultLayout;
