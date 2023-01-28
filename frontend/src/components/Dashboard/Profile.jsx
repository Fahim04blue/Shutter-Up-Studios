import { useAuth } from 'contexts/AuthContext';
import Avatar from 'react-avatar';
import { Col, Form, Image, Row } from 'react-bootstrap';

const Profile = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);
  return (
    <>
      <Row>
        <Col md={4} lg={3} className="text-center">
          {currentUser && (
            <>
              {currentUser.photoURL ? (
                <Image
                  src={currentUser.photoURL}
                  roundedCircle
                  alt={currentUser.displayName}
                  width={120}
                />
              ) : (
                <Avatar name={currentUser.displayName} round />
              )}
            </>
          )}
        </Col>
        <Col md={8} lg={9} className="pb-5 pt-3">
          <Form>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <p>{currentUser.displayName}</p>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <p>{currentUser.email}</p>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
