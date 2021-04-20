import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import AuthContext from 'context/AuthContext';
import { apiUrl } from 'utils/constants';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const login = async e => {
    e.preventDefault();

    try {
      const loginData = {
        email, password, 
      };
      await axios.post(`${apiUrl}/auth/login`, loginData, {
        withCredentials: true
      });
      await getLoggedIn();
      console.log("Logged in!");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <h1>Log In</h1>
      <Form onSubmit={login}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        </Form.Group>
        <Button block size="lg" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}