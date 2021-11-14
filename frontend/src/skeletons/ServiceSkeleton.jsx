import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ServiceSkeleton = () => (
  <Row>
    {Array(4)
      .fill('')
      ?.map((product, index) => (
        <Col md={3} className="mb-3" key={index}>
          <Skeleton style={{ borderRadius: 20 }} height={480} />
        </Col>
      ))}
  </Row>
);

export default ServiceSkeleton;
