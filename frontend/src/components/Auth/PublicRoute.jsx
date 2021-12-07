import { useAuth } from 'contexts/AuthContext';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        !currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
