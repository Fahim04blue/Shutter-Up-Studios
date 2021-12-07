import { useAuth } from 'contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';

const UserRoute = ({ component: Component, ...rest }) => {
  const { isAdmin } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin === 'user' ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default UserRoute;
