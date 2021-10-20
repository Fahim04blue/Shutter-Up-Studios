import Header from 'components/common/Header';
import Login from 'pages/Auth/Login';
import Signup from 'pages/Auth/Signup';
import Dashboard from 'pages/Dashboard/Dashboard';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/'
      || location.pathname === '/services'
      || location.pathname === '/dashboard/profile'
      || location.pathname === '/dashboard/orderList'
      || location.pathname === '/dashboard/addService'
      || location.pathname === '/dashboard/makeAdmin'
      || location.pathname === '/dashboard/manageServices'
      || location.pathname === '/dashboard/bookingList'
      || location.pathname === '/dashboard/review' ? (
        <Header />
        ) : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/dashboard/:routes" component={Dashboard} />
        <Route path="/account/login" component={Login} />
        <Route path="/account/register" component={Signup} />
      </Switch>
    </>
  );
};

export default AppRoutes;
