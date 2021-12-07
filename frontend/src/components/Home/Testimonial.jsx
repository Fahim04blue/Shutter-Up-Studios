import { useAuth } from 'contexts/AuthContext';
import React from 'react';
import Avatar from 'react-avatar';
import { Card } from 'react-bootstrap';

const Testimonial = ({ review: { name, review } }) => {
  const { currentUser } = useAuth();
  return (
    <Card className="my-4">
      {currentUser && (
        <>
          {currentUser.photoURL ? (
            <Card.Img variant="top" src={currentUser.photoURL} width="80" />
          ) : (
            <Avatar name={currentUser.displayName} round />
          )}
        </>
      )}

      <Card.Body className="text-center">
        <h5>{name} </h5>
        <Card.Text>{review.slice(0, 165)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Testimonial;
