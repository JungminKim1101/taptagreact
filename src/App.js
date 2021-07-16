import React from "react";
import "./App.css";
import about from "./image/best-about-us-pages.jpg";
import hardware from "./image/hardware.png";
import stand from "./image/stnad.png";
import background1 from "./image/1.png";
import background2 from "./image/2.png";
import background3 from "./image/3.png";
import Slider from "react-animated-slider";
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "react-animated-slider/build/horizontal.css";
import ScrollToTop from "react-scroll-to-top";
import {
  FaShieldAlt,
  FaUniversalAccess,
  FaCopy,
  FaLock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const content = [
  {
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Download Now",
    image: background1,
  },
  {
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Download Now",
    image: background2,
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Download now",
    image: background3,
  },
];

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="scrollToTop-btn">
          <i className="fas fa-angle-up"></i>
        </div>

        <header>
          <a href="#" className="brand">
            TapTag
          </a>
          <ScrollToTop smooth color="#6f00ff" />
          <div className="menu-btn"></div>
          <div className="navigation">
            <a href="#Main">Main</a>
            <a href="#Services">Services</a>
            <a href="#About">About Us</a>
            <a href="#Contact">Contact Us</a>
          </div>
        </header>

        <section className="Main" id="Main">
          <Slider className="slider-wrapper">
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                }}
              >
                <div className="inner">
                  <h3>{item.description}</h3>
                  <a href="https://www.google.com">
                    <button className="download">{item.button}</button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section className="why" id="why">
          <h2 className="section-title">Why TapTag</h2>
          <div className="all">
            <div className="oneandtwo">
              <div className="fact1">
                <div className="icon">
                  <FaShieldAlt size={70} style={{ fill: "#003459" }} />
                </div>
                <div className="info">
                  <h3>Solid Durability</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque molestias iste tenetur. Rem veniam perspiciatis
                    voluptatum, repellendus ex, necessitatibus atque itaque
                    nihil voluptatem ipsam delectus blanditiis cupiditate
                    voluptas eum quidem!
                  </p>
                </div>
              </div>
              <div className="fact2">
                <div className="icon">
                  <FaUniversalAccess size={70} style={{ fill: "#003459" }} />
                </div>
                <div className="info">
                  <h3>Easy Accessibility</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque molestias iste tenetur. Rem veniam perspiciatis
                    voluptatum, repellendus ex, necessitatibus atque itaque
                    nihil voluptatem ipsam delectus blanditiis cupiditate
                    voluptas eum quidem!
                  </p>
                </div>
              </div>
            </div>
            <div className="threeandfour">
              <div className="fact3">
                <div className="icon">
                  <FaCopy size={70} style={{ fill: "#003459" }} />
                </div>
                <div className="info">
                  <h3>Hard to Replicate</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque molestias iste tenetur. Rem veniam perspiciatis
                    voluptatum, repellendus ex, necessitatibus atque itaque
                    nihil voluptatem ipsam delectus blanditiis cupiditate
                    voluptas eum quidem!
                  </p>
                </div>
              </div>
              <div className="fact4">
                <div className="icon">
                  <FaLock size={70} style={{ fill: "#003459" }} />
                </div>
                <div className="info">
                  <h3>Good Security</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque molestias iste tenetur. Rem veniam perspiciatis
                    voluptatum, repellendus ex, necessitatibus atque itaque
                    nihil voluptatem ipsam delectus blanditiis cupiditate
                    voluptas eum quidem!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="HDandApp" id="HDandApp">
          <h2 className="section-title">Hardware VS App</h2>
          <div className="all">
            <div style={{ display: "block", width: 700, padding: 30 }}>
              <OverlayTrigger
                placement="left"
                trigger="click"
                overlay={
                  <Popover>
                    <Popover.Title as="h3">Hardware</Popover.Title>
                    <Popover.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque molestias iste tenetur. Rem veniam perspiciatis
                      voluptatum, repellendus ex, necessitatibus atque itaque
                      nihil voluptatem ipsam delectus blanditiis cupiditate
                      voluptas eum quidem!
                    </Popover.Content>
                  </Popover>
                }
              >
                <img
                  src={hardware}
                  alt=""
                  style={{ width: "350px", float: "right", padding: "20px" }}
                ></img>
              </OverlayTrigger>
            </div>
            <div className="VS">
              <h1 className="hvsa">VS</h1>
            </div>
            <div style={{ display: "block", width: 700, padding: 30 }}>
              <OverlayTrigger
                placement="right"
                trigger="click"
                overlay={
                  <Popover>
                    <Popover.Title as="h3">App</Popover.Title>
                    <Popover.Content>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque molestias iste tenetur. Rem veniam perspiciatis
                      voluptatum, repellendus ex, necessitatibus atque itaque
                      nihil voluptatem ipsam delectus blanditiis cupiditate
                      voluptas eum quidem!
                    </Popover.Content>
                  </Popover>
                }
              >
                <img
                  src={hardware}
                  alt=""
                  style={{ width: "350px", padding: "20px" }}
                ></img>
              </OverlayTrigger>
            </div>
          </div>
        </section>

        <section className="TabsRedirection" id="TabsRedirection">
          <h2 className="section-title">Services Provided by TapTag</h2>
          <div className="all">
            <div className="info">
              <h3 className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illum voluptas totam beatae tempora? Soluta modi quae,
                mollitia obcaecati eum voluptas. Optio corporis, odio fugit
                quasi esse quam odit quibusdam?
              </h3>
              <a href="https://google.com">
                <div className="more">
                  <button
                    className="learnmore"
                    onclick="window.open('css/page/contact.html')"
                  >
                    <p>Learn More</p>
                  </button>
                </div>
              </a>
            </div>
            <img src={stand} alt=""></img>
          </div>
        </section>

        <section className="News" id="News">
          <h2 className="section-title">Recent News Information</h2>
          <div className="container">
            <div className="card">
              <img src={about} alt=""></img>
              <div className="information">
                <h3 className="title">
                  <span>News1Title</span>
                </h3>
                <p className="description">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque molestias iste tenetur. Rem veniam perspiciatis
                    voluptatum, repellendus ex, necessitatibus atque itaque
                    nihil voluptatem ipsam delectus blanditiis cupiditate
                    voluptas eum quidem!
                  </span>
                </p>
                <div className="more">
                  <p>
                    <a
                      href="https://www.nfcw.com/nfc-world/wine-company-uses-nfc-to-tackle-counterfeiting-and-enhance-customer-experience/"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={about} alt=""></img>
              <div className="information">
                <h3 className="title">
                  <span>News2Title</span>
                </h3>
                <p className="description">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque molestias iste tenetur. Rem veniam perspiciatis
                    voluptatum, repellendus ex, necessitatibus atque itaque
                    nihil voluptatem ipsam delectus blanditiis cupiditate
                    voluptas eum quidem!
                  </span>
                </p>
                <div className="more">
                  <p>
                    <a
                      href="https://securityboulevard.com/2021/04/nfc-and-rfid-explained-for-consumers-avast/"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={about} alt=""></img>
              <div className="information">
                <h3 className="title">
                  <span>News3Title</span>
                </h3>
                <p className="description">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque molestias iste tenetur. Rem veniam perspiciatis
                    voluptatum, repellendus ex, necessitatibus atque itaque
                    nihil voluptatem ipsam delectus blanditiis cupiditate
                    voluptas eum quidem!
                  </span>
                </p>
                <div className="more">
                  <p>
                    <a
                      href="https://www.packaging-gateway.com/features/safety-drivers-poise-nfc-packaging-for-growth-in-2021/?utm_source=Army%20Technology&utm_medium=website&utm_campaign=Must%20Read&utm_content=Image"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="map">
            <span className="phoneemail">
              <a href="https://google.com">
                <button
                  className="phone"
                  onclick="window.open('http://google.com','_blank')"
                >
                  <FaPhone size={20} style={{ fill: "white" }} />
                  <p>010-123-4567</p>
                </button>
              </a>
              <a href="https://google.com">
                <button className="email">
                  <FaEnvelope size={20} style={{ fill: "white" }} />
                  <p>abcde@gmail.com</p>
                </button>
              </a>
            </span>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.022004832123!2d127.0973418153073!3d37.412954779826926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca79225af4c0f%3A0x981af319582c6793!2z7YyQ6rWQ7LC97KGw6rK97KCc67C466asIOq4sOyXheyngOybkO2XiOu4jA!5e0!3m2!1sen!2skr!4v1625104528210!5m2!1sen!2skr"
              style={{
                width: "400",
                height: "300",
                border: "0",
                allowfullscreen: "true",
                loading: "lazy",
              }}
            ></iframe>
          </div>
          <h3>TapTag</h3>
          <p>
            Copyright @2021 <a href="#">TapTag</a>. All Rights Reserved.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
