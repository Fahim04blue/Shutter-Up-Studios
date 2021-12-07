import { useAuth } from 'contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { isAdmin } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin === 'admin' ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AdminRoute;
