import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import { Helmet } from "react-helmet";
import "./home.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5522/api/get")
      .then((res) => setCosmetics(res.data));
  }, []);

  
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="section1">
        <div className="carousel">
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
          >
            <div className="carousel1">
              <div className="carousel1__text">
                <h1>THE VIEW ON REFRESHING</h1>
                <p>Phosfluorescently maintain impactful process.</p>
                <button>READ MORE</button>
              </div>
              <img src={image1} alt="yoxdu" />
            </div>
            <div className="carousel1">
              <div className="carousel1__text">
                <h1>ONLY EXQUISITE REFRESHING</h1>
                <p>Phosfluorescently maintain impactful process.</p>
                <button>READ MORE</button>
              </div>
              <img src={image2} alt="yoxdu" />
            </div>
            <div className="carousel1">
              <div className="carousel1__text">
                <h1>THE VIEW ON REFRESHING</h1>
                <p>Phosfluorescently maintain impactful process.</p>
                <button>READ MORE</button>
              </div>
              <img src={image3} alt="yoxdu" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="section2">
        <h1>About US</h1>
        <div className="about">
          <div className="about1">
            <i class="fa-regular fa-heart"></i>
            <h4>MADE WITH LOVE</h4>
            <p>
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </p>
          </div>
          <div className="about1">
            <i class="fa-regular fa-face-smile"></i>
            <h4>MADE WITH LOVE</h4>
            <p>
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </p>
          </div>
          <div className="about1">
            <i class="fa-regular fa-sun"></i>
            <h4>MADE WITH LOVE</h4>
            <p>
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </p>
          </div>
        </div>
      </div>
      <div className="section3">
        <img src={image1} alt="yoxdu" />
        <div className="section3__text">
          <h1>DEVOTED TO WONDERFUL BEAUTY</h1>
          <h4>With 30-minute premium treat</h4>
          <p>
            Phasellus faucibus vehicula rutrum in ante ligula vel arcu quis
            lacinia posuere metus eget ligula ipsum maximus lobortis nec
            imperdiet.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="section4">
        <h1>OUR PRODUCTS</h1>
        <button>Filter by Price</button>
        <input type="text" />
        <div className="section4__products">
          {cosmetics &&
            cosmetics.map((item) => (
              <div key={item._id} className="section4__products__1">
                <img src={item.image} alt="yoxdu" />
                <h5>{item.name}</h5>
                <p>${item.price}</p>
                <button
                  onClick={() =>
                    axios
                      .delete(`http://localhost:5522/api/delete/${item._id}`)
                      .then(() => {
                        axios
                          .get("http://localhost:5522/api/get")
                          .then((res) => setCosmetics(res.data));
                      })
                  }
                >
                  delete
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="section5">
        <div className="section5__left">
          <h3>CONTACT US</h3>
          <h4>To get special offers to your email</h4>
          <p>Amsterdam CA 90291</p>
          <p>email@site.com</p>
          <p>+1 (234) 56-78</p>
          <p>@natural.cosmetic</p>
        </div>
        <div className="section5__right">
          <div className="inputs">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Email*" />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            id="1"
            cols="100"
            rows="7"
          ></textarea>
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
