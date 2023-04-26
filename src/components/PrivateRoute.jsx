import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = React.useContext(AuthContext);

  console.log('isLogged: ', isLogged);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
