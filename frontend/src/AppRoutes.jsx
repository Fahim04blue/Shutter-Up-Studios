import DefaultLayout from 'components/common/DefaultLayout';
import Login from 'pages/Auth/Login';
import Signup from 'pages/Auth/Signup';
import Dashboard from 'pages/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

const AppRoutes = () => (
  <DefaultLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/dashboard/:routes" component={Dashboard} />
      <Route path="/account/login" component={Login} />
      <Route path="/account/register" component={Signup} />
    </Switch>
  </DefaultLayout>
);

export default AppRoutes;
