import React from 'react';

import { Card, Button } from 'react-bootstrap';

export default function ImageItem(props) {
  return (
    <Card style={{ width: '18rem' }} className="box">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <Button variant="primary">Go Somewhere</Button>
    </Card>
  );
}