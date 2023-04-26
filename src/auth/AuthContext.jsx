import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(false);

  // console.log(`isLogged : ${isLogged}`);
  // console.log('@ AuthContext.jsx');

  useEffect(() => {
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged) {
      setLogged(JSON.parse(storedIsLogged));
    }
  }, []);

  const setLoggedState = (newState) => {
    console.log('setLoggedState:', newState);
    setLogged(newState);
    localStorage.setItem('isLogged', JSON.stringify(newState));
  };

  return (
    <AuthContext.Provider value={{ isLogged, setLogged: setLoggedState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
