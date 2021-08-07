import React, { useState } from "react";
import { Container } from "react-bootstrap";
import laundry01 from "../../../images/laundry01.png";
import laundry02 from "../../../images/laundry02.png";
import laundry03 from "../../../images/laundry03.png";
import chart_app01 from "../../../images/Capture.PNG";
import chart_app02 from "../../../images/Capture-1.PNG";
import chart_app03 from "../../../images/Capture-2.PNG";
import daily_mart01 from "../../../images/daily_mart01.png";
import daily_mart02 from "../../../images/daily_mart02.png";
import daily_mart03 from "../../../images/daily_mart03.png";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";
import Carousel from "react-bootstrap/Carousel";

const Main = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/project");
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="pb-5 my-5">
      <Container>
        <div>
          <h2 className="pb-3">Some of my work</h2>
          <div className="row">
            <div className="pb-4 col-lg-4 col-md-6">
              <div
                style={{ background: "#172A45", height: "530px" }}
                className="p-3 text-justify rounded shadow img-animation"
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={laundry01}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={laundry02}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={laundry03}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <h3>Go Wash</h3>
                <p>
                  A full-stack single-page web application where customers can
                  book a service for washing their dresses by pay the fees. The
                  website contains a separate dashboard for the admin and user
                </p>
                <div className="px-3 pb-2 row technology">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MOngoDB</span>
                  <span>Stripe.js</span>
                  <span>FontAwesome</span>
                  <span>Firebase</span>
                  <span>Bootstrap</span>
                </div>
                <a
                  style={{ fontSize: "30px", marginTop: "auto", marginBottom: "0", paddingRight: "20px" }}
                  target="_blank" rel="noreferrer"
                  href="https://github.com/SakhawatHossain55/GoWash"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank" rel="noreferrer"
                  href="https://laundry-service-48e19.web.app"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
            <div className="mb-4 col-lg-4 col-md-6">
              <div
                style={{ background: "#172A45", height: "530px" }}
                className="p-3 text-justify rounded shadow img-animation"
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={chart_app01}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={chart_app02}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={chart_app03}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <h3>Chart App</h3>
                <p>
                  This is a Communicating website where a person can contact
                  him/her friend & customer community. If a person wants to use
                  this website, he/she must first sign in to the Google
                  Authentication process. They can create Room and contact
                  easily.
                </p>
                <div className="px-3 pb-2 row technology">
                  <span>React Redux</span>
                  <span>Redux Toolkit</span>
                  <span>Style Component</span>
                  <span>Material-ui</span>
                  <span>Firebase</span>
                  <span>React Firebase Hook</span>
                </div>
                <div className="">
                  <a className="mt-auto mb-0"
                    style={{ fontSize: "30px", marginTop: "auto", marginBottom: "0", paddingRight: "20px" }}
                    target="_blank" rel="noreferrer"
                    href="https://github.com/SakhawatHossain55/chat-app"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    style={{ fontSize: "30px" }}
                    target="_blank" rel="noreferrer"
                    href="https://chat-app-team-78.web.app"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-4 col-lg-4 col-md-6">
              <div
                style={{ background: "#172A45", height: "530px" }}
                className="p-3 text-justify rounded shadow img-animation"
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={daily_mart01}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={daily_mart02}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{ height: "150px" }}
                      className="d-block w-100"
                      src={daily_mart03}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                <h3>Daily Mart</h3>
                <p>
                  A full-stack single page web application where users can
                  choose, explore and order food by submitting relevant
                  information.
                </p>
                <div className="px-3 pb-2 row technology">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MOngoDB</span>
                  <span>Stripe.js</span>
                  <span>FontAwesome</span>
                  <span>Firebase</span>
                  <span>React bootstrap</span>
                </div>
                <a
                  style={{ fontSize: "30px", paddingRight: "20px" }}
                  target="_blank" rel="noreferrer"
                  href="https://github.com/SakhawatHossain55/Daily-Mart"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  style={{ fontSize: "30px" }}
                  target="_blank" rel="noreferrer"
                  href="https://fresh-valley-e1a56.web.app"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </div>
          <button onClick={handleClick} className="mt-3 btn-brand">
            All Project
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Main;
