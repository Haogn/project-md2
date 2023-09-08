import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-services">
            <p>EXCLUSIVE SERVICES</p>
            <ul>
              <li>Gucci Services </li>
              <li>Gucci Osteria Beverly Hills da Massimo Bottura</li>
              <li>BooK An Appointment</li>
              <li>Collect In-Store</li>
            </ul>
          </div>
          <div className="footer-help">
            <p>NEED HELP?</p>
            <ul>
              <li>Contact Us</li>
              <li>Shipping Servises</li>
              <li>Payment Options</li>
              <li>Returns &amp; Exchanges</li>
              <li>Product Care</li>
              <li>FAQs</li>
              <li>Unsubscribe</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer-company">
            <p>THE COMPANY</p>
            <ul>
              <li>About Gucci</li>
              <li>Gucci Equilibrium</li>
              <li>Code of Ethics</li>
              <li>Gucci Garden</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Privacy &amp; Cookise</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="footer-find">
            <p>FIND US ON</p>
            <ul>
              <li>
                <i className="fa-brands fa-facebook" /> Facebook
              </li>
              <li>
                <i className="fa-brands fa-twitter" /> Twitter
              </li>
              <li>
                <i className="fa-brands fa-instagram" /> Instagram
              </li>
              <li>
                <i className="fa-brands fa-youtube" /> Youtube
              </li>
              <li>
                <i className="fa-solid fa-podcast" /> Guacci Podcast
              </li>
              <li>
                <i className="fa-brands fa-pinterest-p" /> Pinterest
              </li>
              <li>
                <i className="fa-brands fa-snapchat" /> Snapchat
              </li>
            </ul>
          </div>
          <div className="footer-signup">
            <p>SIGN UP FOR GUCCI UPDATES</p>
            <p>
              By entering your email address below, you consent to receiving our
              newsletter with access to our latest collections, events and
              initiatives. More details on this are provided in our{" "}
              <a href="https://www.gucci.com/us/en/st/privacy-landing" />
              Privacy Policy
            </p>
            <input type="text" placeholder="Email Address" /> <br /> <br />
            <p>STORE LOCATOR</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
