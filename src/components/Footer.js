import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faYoutube,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="info mb-5">
              <img src="logo.png" className="mb-4" alt="logo" />
              <p className="mb-5">
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
              <div className="copyright">
                Created By
                <span> Graphberry</span>
                <div>
                  &copy; 2023 - <span>Bondi Inc</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">Links</h5>
              <ul className="list-unstyled lh-lg">
                <li>Home</li>
                <li>Our Services</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Support</li>
                <li>Terms And Condition</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5 className="text-light">About Us</h5>
              <ul className="list-unstyled lh-lg">
                <li>Sign in</li>
                <li>Register</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="contact">
              <h5 className="text-light">Contact Us</h5>
              <p className="lh-lg mb-5 mt-3">
                Get in touch with us via mail phone.We are waiting for your call
                or message
              </p>
              <button className="btn btn-primary rounded-pill  width-100">
                Graphberry@gmail.com
              </button>
              <ul className="list-unstyled d-flex mt-5 gap-3">
                <li>
                  <a href="#" className="text-light d-block">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="p-2 facebook rounded-circle"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light d-block">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="p-2 twitter rounded-circle"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light d-block">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="p-2 linkedin rounded-circle"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light d-block">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="p-2 youtube rounded-circle"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
