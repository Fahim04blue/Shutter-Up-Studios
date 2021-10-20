import { useAuth } from 'contexts/AuthContext';
import React, { useRef, useEffect, useState } from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap';
import { useLocation, NavLink } from 'react-router-dom';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 55;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const path = useLocation()?.pathname;
  const location = path.split('/')[1];

  return (
    <div className={`header ${location}`}>
      <Navbar
        expand="lg"
        fixed="top"
        variant="dark"
        style={{
          transition: '1s ease',
          backgroundColor: navBackground ? '#5f031d' : 'transparent',
        }}
      >
        <Container>
          <Navbar.Brand to="/"> Dream Capture</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 navbar__light  ">
              <NavLink className="nav__text" to="/">
                Home
              </NavLink>
              <NavLink className="nav__text" to="/services">
                Services
              </NavLink>
              <NavLink className="nav__text" to="/gallery">
                Gallery
              </NavLink>
              {currentUser ? (
                <>
                  <a className="nav__text">{currentUser.displayName}</a>
                  <a onClick={logout} className="nav__text">
                    Logout
                  </a>
                </>
              ) : (
                <NavLink className="nav__text" to="/account/login">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
