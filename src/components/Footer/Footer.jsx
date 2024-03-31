import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="main">
        <div className="logo row">
          <div className="footer-header">
            <img
              src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png"
              className="manik"
              alt="Manik Logo" // Add a descriptive alt text
            />
          </div>
          <div className="logo-des">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a href="#" className="btn-know">
              Know More
            </a>
          </div>
        </div>

        <div className="office row">
          <div className="footer-header">
            <h3>Office</h3>
          </div>
          <div className="office-des">
            <p>
              here are <br />
              many variations of passages<br />
              of Lorem Ipsum<br />
              available
            </p>
            <a href="#">manikmaity.haker2003@gmail.com</a>
            <p className="num">+91-9999999999</p>
          </div>
        </div>

        <div className="link row">
          <div className="footer-header">
            <h3>Links</h3>
          </div>
          <div className="link-des">
            <a href="#" className="footer-links">
              Home
            </a>
            <a href="#" className="footer-links">
              About
            </a>
            <a href="#" className="footer-links">
              Services
            </a>
            <a href="#" className="footer-links">
              Galary
            </a>
            <a href="#" className="footer-links">
              Contact
            </a>
          </div>
        </div>

        <div className="newsletter row">
          <div className="footer-header">
            <h3>Newsletter</h3>
          </div>
          <div className="newsletter-des">
            <div className="subcribe">
              <i className="sub-icon ri-mail-check-fill"></i>
              <input type="email" placeholder="Enter Email ID" required />
              <i className="sub-icon ri-arrow-right-line"></i>
            </div>
            <div className="icons">
              <a href="#">
                <i className="social-icon ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="social-icon ri-instagram-line"></i>
              </a>
              <a href="#">
                <i className="social-icon ri-linkedin-fill"></i>
              </a>
              <a href="#">
                <i className="social-icon ri-github-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>© Copyright 2022 Manik Maity.</p>
      </div>
    </footer>
  );
};

export default Footer;
