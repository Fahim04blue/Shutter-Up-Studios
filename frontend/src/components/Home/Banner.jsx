import { Carousel, Button } from 'react-bootstrap';
import banner1 from 'asset/images/banner1.jpg';
import banner2 from 'asset/images/banner2.jpg';
import banner3 from 'asset/images/banner3.jpg';

const Banner = () => (
  <Carousel fade controls={false} interval={2000}>
    <Carousel.Item className="carousel__item">
      <img className="d-block w-100 " src={banner1} alt="First slide" />
      <Carousel.Caption>
        <h1>
          Capturing
          {' '}
          <span className="top__caption">Memories</span>
        </h1>
        <div className="text-light">
          <p className="bottom__caption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <span className="d-block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              aperiam!
            </span>
          </p>
        </div>
        <Button className="carousel__btn">View Gallery</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carousel__item">
      <img className="d-block w-100" src={banner2} alt="Second slide" />

      <Carousel.Caption>
        <h1>
          Capturing
          {' '}
          <span className="top__caption">Memories</span>
        </h1>
        <div className="text-light">
          <p className="bottom__caption">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <span className="d-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, dolorum.
            </span>
          </p>
        </div>
        <Button className="carousel__btn">View Gallery</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carousel__item">
      <img className="d-block w-100" src={banner3} alt="Third slide" />

      <Carousel.Caption>
        <h1>
          Capturing
          {' '}
          <span className="top__caption">Memories</span>
        </h1>
        <div className="text-light">
          <p className="bottom__caption">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <span className="d-block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veniam, ducimus!
            </span>
          </p>
        </div>
        <Button className="carousel__btn">View Gallery</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Banner;
