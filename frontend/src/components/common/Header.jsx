import { useAuth } from 'contexts/AuthContext';
import { useEffect, useRef, useState } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const Header = () => {
  const { currentUser, logout } = useAuth();
  // console.log(currentUser);
  const [navBackground, setNavBackground] = useState(false);
  const history = useHistory();
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
  const handleLogout = () => {
    logout();

    history.push('/');
  };

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
          <Navbar.Brand to="/">ShutterUp Studios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 navbar__light  ">
              <NavLink className="nav__text" to="/">
                Home
              </NavLink>
              <NavLink className="nav__text" to="/services">
                Services
              </NavLink>
              {currentUser ? (
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={currentUser.displayName}
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    onClick={() => history.replace('/dashboard/profile')}
                  >
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink className="nav__text" to="/login">
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
