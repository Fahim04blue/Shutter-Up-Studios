import {
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const path = useLocation()?.pathname;
  const location = path.split('/')[1];

  return (
    <footer className={`site-footer ${location} `}>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">ShutterUP Studios</div>

            <div className="col-xs-6 col-md-3">
              <h6>Dhaka Office</h6>
              <ul className="footer-links">
                <li>
                  <FaMapMarkerAlt className="icon" />

                  <span>
                    House #23, Road #1, Sector #9, Uttara. Dhaka, Bangladesh
                    1230
                  </span>
                </li>
                <li className="mt-2">
                  <FaEnvelope className="icon" />

                  <span>ShutterUpStudios19@gmail.com</span>
                </li>
                <li className="mt-2">
                  <FaPhoneAlt className="icon" />

                  <span>
                    <a href="tel:+880172222272">+880172222272</a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Chittagong Office</h6>
              <ul className="footer-links">
                <li>
                  <FaMapMarkerAlt className="icon" />

                  <span>
                    House #12, Road #02 , Nandan Kanan , DC Hill , Chattogram
                  </span>
                </li>
                <li className="mt-2">
                  <FaEnvelope className="icon" />
                  <span>ShutterUpStudios19@gmail.com</span>
                </li>
                <li className="mt-2">
                  <FaPhoneAlt className="icon" />{' '}
                  <span>
                    <a href="tel:+8801988888888">+8801988888888</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by
                <a href="#"> ShutterUP Studios</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <FaDribbble />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
