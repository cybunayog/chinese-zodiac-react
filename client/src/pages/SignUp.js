import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // After login go back home
  async function handleSubmit(event) {
    // call API to save the credentials
    event.preventDefault();
    
    try {
      const registerData = {
        email,
        password,
      };

      await axios.post('http://localhost:8080/auth/signup', registerData);
    } catch (e) {
      console.error(e);
    }
  }

  function validateForm() {

    return email.length > 0 && password.length > 0;
  }

  return (
  <div className="signup">
    <Form onSubmit={handleSubmit}>
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
      <Button block size="lg" type="submit" disabled={!validateForm()}>
        Create a new account
      </Button>
    </Form>
  </div>
  );
}