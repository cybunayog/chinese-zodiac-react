import React, { useState } from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const register = async e => {
    e.preventDefault();

    try {
      const registerData = {
        email, password, passwordVerify
      };
      await axios.post("http://localhost:8080/auth/", registerData);
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