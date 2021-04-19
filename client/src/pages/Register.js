import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import AuthContext from 'context/AuthContext';
import { apiUrl } from 'utils/constants';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const register = async e => {
    e.preventDefault();

    try {
      const registerData = {
        email, password, passwordVerify
      };
      await axios.post(`${apiUrl}/auth/`, registerData, {
        withCredentials: true
      });
      await getLoggedIn();
      console.log("Registered!");
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <Form onSubmit={register}>
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
        <Form.Group size="lg" controlId="passwordVerify">
          <Form.Label>Verify Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordVerify}
            onChange={e => setPasswordVerify(e.target.value)}
            />
        </Form.Group>
        <Button block size="lg" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}