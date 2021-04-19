import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { Col, Form, Button, Row } from 'react-bootstrap';

import { apiUrl, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_USER_ID } from 'utils/constants';

export default function ZodiacTest() {
  // Test form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");
  const [q7, setQ7] = useState("");
  const [q8, setQ8] = useState("");
  const [q9, setQ9] = useState("");
  const [q10, setQ10] = useState("");

  const sendForm = async res => {
    try {
      const formData = {
        name, email, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
      };

      // save data to db
      await axios.post(`${apiUrl}/api/form/submitted`, formData);
      // send form to email
      await emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, res.target, REACT_APP_EMAILJS_USER_ID);
      //ThankYou();
    } catch (err) {
      console.log(err);
    }
  }

  const ThankYou = () => {
    return (
      <div className="form-completed">
        <p>Thank you for filling this form!</p>
      </div>
    );
  }

  return (
    <div className="form">
      <h1>Zodiac Test</h1>
      <Form onSubmit={sendForm}>
        <Form.Group as={Row}>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              />
          </Col>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="mb-2"
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} controlId="questions">
            <Form.Label>Questions</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Which is the only reptile that is a sign in the Chinese Zodiac?"
              value={q1}
              onChange={e => setQ1(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Which sign is not part of the Chinese zodiac?"
              value={q2}
              onChange={e => setQ2(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Which sign is not part of the Chinese zodiac?"
              value={q3}
              onChange={e => setQ3(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Which is the only imaginary animal that is a sign in the Chinese zodiac?"
              value={q4}
              onChange={e => setQ4(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="The Chinese zodiac traditionally begins with which sign?"
              value={q5}
              onChange={e => setQ5(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="The Chinese zodiac associates a sign with each month."
              value={q6}
              onChange={e => setQ6(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="The Chinese zodiac signs each have an equivalent constellations, like those of the occidental zodiac."
              value={q7}
              onChange={e => setQ7(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="How many signs are in the Chinese zodiac?"
              value={q8}
              onChange={e => setQ8(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="The Chinese zodiac traditionally ends with which sign?"
              value={q9}
              onChange={e => setQ9(e.target.value)}
            />
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Chinese zodiac signs represent different types of personalities."
              value={q10}
              onChange={e => setQ10(e.target.value)}
            />
          </Form.Group>
        </fieldset>
        <Button block size="lg" type="submit">
          Submit Response
        </Button>
      </Form>
      <h5>This form will be sent to your email</h5>
    </div>
  );
}