import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Card, Button } from 'react-bootstrap';

export default function CardItem(props) {
  return (
    <Card style={{ width: '18rem' }} className="box">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
      <LinkContainer to={{pathname: `/zodiac-animal-info/${props.id}`, state: { data: props.data }}}>
       <Button variant="primary">View {props.name}</Button>
      </LinkContainer>
    </Card>
  );
}