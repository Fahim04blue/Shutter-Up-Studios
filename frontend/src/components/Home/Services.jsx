import StyledDash from 'components/common/StyledDash';
import services from 'fakeData/service';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

const Services = () => (
  <div className="services">
    <h1 className="top__heading">Services</h1>
    <StyledDash />

    <h1 className="middle__heading">What we shoot</h1>
    <Container className="mt-5">
      <Row>
        {services.map((service) => (
          <Col md={3}>
            <div className="card">
              <img
                className="card-img"
                src={service.image}
                alt={service.name}
              />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">{service.name}</h4>

                <p className="card-text">{service.shortDescription}</p>
                <div className=" d-flex gap-2">
                  <Button className="card__btn">View More</Button>
                  <Button className="card__btn">Buy Now</Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Services;
