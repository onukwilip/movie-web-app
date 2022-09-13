/*import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              doloremque qui deleniti, et id a repellendus numquam quidem esse
              tempora ea. Aliquam voluptate omnis reprehenderit soluta iure
              excepturi molestias repellendus ullam doloribus voluptatum quasi
              praesentium quae magni ad, quam minima hic eum libero numquam
              totam iste accusantium. Consectetur, molestias rerum.
            </p>
          </div>
          <div className="box">
            <h3>Follow us</h3>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="box">
            <h3>Streamit App</h3>
            <div className="img flexSB">
              <img
                src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"
                alt=""
              />
              <span>App Store</span>
              <img
                src="https://img.icons8.com/fluency/48/000000/google-play.png"
                alt=""
              />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;*/
import React from "react";
import { homeData } from "../../dummyData";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Streamit Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="box">
            <h3>Streamit App</h3>
            <div className="img flexSB">
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <span>App Store</span>
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
