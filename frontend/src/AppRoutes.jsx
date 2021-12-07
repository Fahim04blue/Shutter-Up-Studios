import PrivateRoute from 'components/Auth/PrivateRoute';
import PublicRoute from 'components/Auth/PublicRoute';
import DefaultLayout from 'components/common/DefaultLayout';
import Login from 'pages/Auth/Login';
import Signup from 'pages/Auth/Signup';
import Bookings from 'pages/Bookings/Bookings';
import Dashboard from 'pages/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

const AppRoutes = () => (
  <DefaultLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/register" component={Signup} />
      <Route path="/services" component={Services} />
      <PrivateRoute path="/dashboard/:routes" component={Dashboard} />
      <PrivateRoute path="/booking/:id" component={Bookings} />
    </Switch>
  </DefaultLayout>
);

export default AppRoutes;
