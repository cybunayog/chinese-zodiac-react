import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
//import { apiUrl } from 'utils/constants';

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    const loggedInResp = await axios.get(`${apiUrl}/auth/loggedIn`);
    const loggedInResp = await axios.get(`/auth/loggedIn`);
    setLoggedIn(loggedInResp.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };