import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    // fetch('http://localhost:8080/auth/login')
    //   .then(data => {
        
    //   })
  }, []);


  // After login go back home
  function handleSubmit(event) {
    // call API to save the credentials
    event.preventDefault();
  }

  function validateForm() {
    
    return email.length > 0 && pwd.length > 0;
  }

  return (
    <div className="login">
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
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}