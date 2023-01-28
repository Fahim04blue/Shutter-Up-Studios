import Banner from 'components/Home/Banner';
import Gallery from 'components/Home/Gallery';
import Services from 'components/Home/Services';
import Testimonials from 'components/Home/Testimonials';
import MetaData from 'components/common/MetaData';

const Home = () => (
  <div>
    <MetaData title="Home" />
    <Banner />
    <Services />
    <Gallery />
    <Testimonials />
  </div>
);

export default Home;
