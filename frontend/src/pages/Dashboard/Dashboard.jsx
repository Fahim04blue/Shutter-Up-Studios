import NavTitle from 'components/Dashboard/NavTitle';
import Sidebar from 'components/Dashboard/Sidebar';
import MetaData from 'components/common/MetaData';
import { Col, Container, Row } from 'react-bootstrap';

const Dashboard = () => (
  <Container className="mt-4 py-4 py-md-5">
    <div className="wrapper ">
      <MetaData title="Dashboard" />
      <Row className="pt-4">
        <Col lg={3} className="profile-navigation mb-3">
          <Sidebar />
        </Col>
        <Col lg={9}>
          <div id="content">
            <NavTitle />
          </div>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Dashboard;
