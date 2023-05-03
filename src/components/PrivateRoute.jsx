import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

/**
PrivateRoute-komponentti luo suojatun reitin, joka vaatii käyttäjän kirjautumisen ennen pääsyä.
@component
@param {Object} props - Komponentin propsit.
@param {React.Component} props.component - Komponentti, joka näytetään suojatussa reitissä.
@param {...any} rest - Lisää mahdollisia props-argumentteja, joita voi välittää Route-komponentille.
@returns {JSX.Element} PrivateRoute-komponentti.
*/

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
