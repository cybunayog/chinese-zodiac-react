import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { register, login } from 'actions/auth';

const initialState = { email: '', password: '' };

export default function Auth() {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // reroute
    if (isSignup) {
      dispatch(register(form, history));
    } else {
      dispatch(login(form, history));
    }
  };
  
  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <div className="auth">
      <h1>{ isSignup ? 'Sign Up' : 'Sign In'}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleChange}
            />
        </Form.Group>
        <Button block size="lg" type="submit">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Button>
        <Button block size="lg" type="button" onClick={switchMode}>
          { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
        </Button>
      </Form>
    </div>
  );
}