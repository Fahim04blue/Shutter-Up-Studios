import StyledDash from 'components/common/StyledDash';
import useAsync from 'Hooks/useAsync';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ProductService from 'services/ProductService';
import ServiceSkeleton from 'skeletons/ServiceSkeleton';
import { prettyPrintNumbers } from 'utils/utils';

const Services = () => {
  const { data: services, isLoading } = useAsync(
    ProductService.getPopularServices
  );
  const history = useHistory();

  return (
    <div className="services">
      <h1 className="top__heading">Services</h1>
      <StyledDash />

      <h1 className="middle__heading">What we shoot</h1>
      <Container className="mt-5">
        {isLoading && <ServiceSkeleton />}
        {!isLoading && (
          <Row>
            {services?.map((service) => (
              <Col md={3}>
                <div className="card">
                  <img
                    className="card-img"
                    src={service.image}
                    alt={service.name}
                  />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 className="card-title">{service.name}</h4>

                    <p className="card-text">{service.summary}</p>
                    <p className="card-text-price">
                      TK.
                      {prettyPrintNumbers(service?.price)}
                    </p>
                    <div className=" d-flex gap-2">
                      <Button
                        className="card__btn"
                        onClick={() => history.push('/services')}
                      >
                        View More
                      </Button>
                      <Button className="card__btn">Book Now</Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Services;
