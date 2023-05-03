import { createContext, useState, useEffect } from 'react';

/**
 * AuthContext on luotu käyttämällä createContext()-funktiota, joka tarjoaa
 * kontekstin sovelluksen sisällä toteutettavaa käyttäjän autentikointia varten.
 *
 * AuthProvider-komponentti käärii ja tarjoaa kontekstin sovelluksen
 * osille, jotta ne voivat käyttää ja muuttaa käyttäjän autentikoinnin tilaa.
 * Tämä komponentti käyttää paikallista tilaa (useState) ja sivuvaikutuksia
 * (useEffect) autentikointitilan hallintaan ja tallentamiseen paikallisesti
 * (localStorage).
 *
 * @component
 * @returns {JSX.Element} AuthContext-komponentti.
 */

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(false);

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
