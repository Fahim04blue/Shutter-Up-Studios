import StyledDash from 'components/common/StyledDash';
import useAsync from 'Hooks/useAsync';
import { CardGroup } from 'react-bootstrap';
import ReviewService from 'services/ReviewService';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const { data: reviews } = useAsync(ReviewService.getReviews);
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <div className="testimonials">
      <h1 className="top__heading pt-5">Testimonials</h1>
      <StyledDash />

      <h1 className="middle__heading">Our Clients Say</h1>
      <CardGroup className="p-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <Testimonial review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardGroup>
    </div>
  );
};

export default Testimonials;
