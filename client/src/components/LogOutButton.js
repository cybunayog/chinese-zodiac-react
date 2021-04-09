import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from 'context/AuthContext';
import { useHistory } from 'react-router';
import { apiUrl } from 'utils/constants';

export default function LogOutButton() {

  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  const logOut = async () => {
    // returns empty cookie
    await axios.get(`${apiUrl}/auth/logout`);
    await getLoggedIn();
    history.push("/");
  };

  return (
    <Button
      onClick={logOut}
    >
      Log Out
    </Button>
  )
}