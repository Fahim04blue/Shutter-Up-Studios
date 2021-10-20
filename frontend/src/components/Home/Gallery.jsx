import StyledDash from 'components/common/StyledDash';
import { Col, Container, Row } from 'react-bootstrap';
import images from 'fakeData/galleryHome';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = () => (
  <div className="overflow-hidden">
    <h1 className="top__heading">Gallery</h1>
    <StyledDash />

    <h1 className="middle__heading">Our Work</h1>

    <Container className="mt-5">
      <Row>
        {images.map((img) => (
          <Col md={3} className="p-3 d-flex justify-content-center ">
            <LazyLoadImage
              key={img.name}
              src={img.image}
              height={400}
              width={300}
              effect="opacity"
            />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default Gallery;
