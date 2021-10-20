import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = ({ review: { name, review, image } }) => (
  <Card className="my-4">
    <Card.Img variant="top" src={image} width="80" />
    <Card.Body className="text-center">
      <h5>
        {name}
        {' '}
      </h5>
      <Card.Text>{review.slice(0, 165)}</Card.Text>
    </Card.Body>
  </Card>
);

export default Testimonial;
