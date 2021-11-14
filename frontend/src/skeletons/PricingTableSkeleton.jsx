import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PricingTableSkeleton = () => (
  <Row>
    {Array(12)
      .fill('')
      ?.map((product, index) => (
        <Col md={4} className="mt-3" key={index}>
          <Skeleton style={{ borderRadius: 20 }} height={780} width={320} />
        </Col>
      ))}
  </Row>
);

export default PricingTableSkeleton;
