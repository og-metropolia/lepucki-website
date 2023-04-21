import { createContext } from 'react';

const AuthContext = createContext({
  isLogged: false,
  setLogged: () => {},
});

export default AuthContext;
