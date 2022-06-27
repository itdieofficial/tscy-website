import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer className="footer fp-auto-height fp-section fp-table" id="footer">
      <div className="footer-wrapper">
        <div className="footer-left">
          <div
            className="footer-logo aniamte"
            data-animation="fadeInUp"
            data-duration={100}
          >
            <img
              src="/ar/assets/svg/logo/tsc-logo-white.svg"
              alt="footer-logo"
            />
          </div>
        </div>
        <div className="footer-middle">
          <ul className="footer-links">
            {/* <li class="footer-item animate" data-animation="fadeInUp" data-duration="100">
                <a href="bedroom2.php" class="footer-link">Buy Now</a>
            </li> */}
            <li
              className="footer-item animate"
              data-animation="fadeInUp"
              data-duration={200}
            >
              <a href="news.php" className="footer-link">
                Newsroom
              </a>
            </li>
            <li
              className="footer-item animate"
              data-animation="fadeInUp"
              data-duration={300}
            >
              <a href="career.php" className="footer-link">
                Careers
              </a>
            </li>
            {/* <li class="footer-item animate" data-animation="fadeInUp" data-duration="400">
                <a href="/ar/" class="footer-link">Project Updates</a>
            </li> */}
            <li
              className="footer-item animate"
              data-animation="fadeInUp"
              data-duration={500}
            >
              <a href="about-us.php" className="footer-link">
                About Us
              </a>
            </li>
            <li
              className="footer-item animate"
              data-animation="fadeInUp"
              data-duration={600}
            >
              <a href="contact-us.php" className="footer-link">
                Contact Us
              </a>
            </li>
            <li
              className="footer-item animate"
              data-animation="fadeInUp"
              data-duration={700}
            >
              <a href="/ar/" className="footer-link">
                FAQs
              </a>
            </li>
            <li
              className="footer-item animate"
              data-animation="fadeInUp"
              data-duration={800}
            >
              <a href="register.php" className="footer-link">
                Broker Registration
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="newsletter-sec">
            <div
              className="newsletter__head animate"
              data-animation="fadeInUp"
              data-duration={800}
            >
              <h4>
                Stay Updated
                <span>Sign up for our newsletter</span>
              </h4>
            </div>
            <div
              className="newsletter__form animate"
              data-animation="fadeInUp"
              data-duration={900}
            >
              <form className="footer__input-container footer__sign-up">
                <input
                  className="footer__input"
                  type="email"
                  name="your-email"
                  placeholder="Email Address"
                  required="required"
                />
                <button className="footer__submit common-anchor">
                  Sign up
                </button>
              </form>
            </div>
          </div>
          <div className="footer-social">
            <ul className="social-icon white--social">
              <li
                className="social-item animate"
                data-animation="fadeInUp"
                data-duration={100}
              >
                <a href="https://twitter.com/?lang=en" target="_blank">
                  <div className="icon-img">
                    <img
                      className="svg-convert"
                      src="/ar/assets/svg/social-icons/twitter.svg"
                      alt="footer-social-img"
                    />
                  </div>
                </a>
              </li>
              <li
                className="social-item animate"
                data-animation="fadeInUp"
                data-duration={200}
              >
                <a href="https://www.facebook.com/" target="_blank">
                  <div className="icon-img">
                    <img
                      className="svg-convert"
                      src="/ar/assets/svg/social-icons/facebook.svg"
                      alt="footer-social-img"
                    />
                  </div>
                </a>
              </li>
              <li
                className="social-item animate"
                data-animation="fadeInUp"
                data-duration={300}
              >
                <a href="https://www.instagram.com/" target="_blank">
                  <div className="icon-img">
                    <img
                      className="svg-convert"
                      src="/ar/assets/svg/social-icons/instagram.svg"
                      alt="footer-social-img"
                    />
                  </div>
                </a>
              </li>
              {/* <li class="social-item animate" data-animation="fadeInUp" data-duration="400">
                    <a href="https://www.youtube.com/" target="_blank">
                        <div class="icon-img">
                            <img class="svg-convert" src="/ar/assets/svg/social-icons/youtube.svg" alt="footer-social-img">
                        </div>
                    </a>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
