import Banner from 'components/Home/Banner';
import Gallery from 'components/Home/Gallery';
import Services from 'components/Home/Services';
import Testimonials from 'components/Home/Testimonials';

import React from 'react';

const Home = () => (
  <div>
    <Banner />
    <Services />
    <Gallery />
    <Testimonials />
  </div>
);

export default Home;
