import React, { useState } from "react";
import laundry01 from "../../../images/laundry01.png";
import laundry02 from "../../../images/laundry02.png";
import laundry03 from "../../../images/laundry03.png";
import chart_app01 from "../../../images/Capture.PNG";
import chart_app02 from "../../../images/Capture-1.PNG";
import chart_app03 from "../../../images/Capture-2.PNG";
import fashion from "../../../images/Screenshot_23.png";
import fashion2 from "../../../images/Screenshot_24.png";
import fashion3 from "../../../images/Screenshot_25.png";
import { useHistory } from "react-router";
import { GrView } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
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
    <div className="pb-5 mt-5">
      <div className="container">
        <h2 className="pb-3">Some of my work</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 dark">
          <div className="col">
            <div
              className="card h-100 p-3 text-justify rounded shadow img-animation"
              style={{ background: "#172A45" }}
            >
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={laundry01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={laundry02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={laundry03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="card-body">
                <h3>Go Wash</h3>
                <p>
                  A full-stack single-page web application where customers can
                  book a service for washing their dresses by pay the fees. The
                  website contains a separate dashboard for the admin and user
                </p>
                <div className="pe-4 pb-3 technology">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MOngoDB</span>
                  <span>Stripe.js</span>
                  <span>FontAwesome</span>
                  <span>Firebase</span>
                  <span>Bootstrap</span>
                </div>
              </div>
              <div className="card-footer ">
                <div className="d-flex gap-3 justify-content-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sakhawat9/GoWash"
                  >
                    <FiGithub
                      style={{ fontSize: "40px" }}
                      className="p-2 rounded-circle bg-light github-icon"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://laundry-service-48e19.web.app"
                  >
                    <GrView
                      style={{ fontSize: "40px" }}
                      className="p-2 rounded-circle bg-light"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100 p-3 text-justify rounded shadow img-animation"
              style={{ background: "#172A45" }}
            >
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={fashion}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={fashion2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={fashion3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="card-body">
                <h3>Fstore</h3>
                <p>
                  Fstore is a professional dynamic e-commerce web application
                  where users can choose and explore product details. Users can
                  select items and can add them to the cart section. Finally can
                  order them from the checkout section.
                </p>
                <div className="px-3 pb-2 technology">
                  <span>React.js</span>
                  <span>React-redux</span>
                  <span>Typescript</span>
                  <span>React icon</span>
                  <span>React bootstrap</span>
                  <span>sass</span>
                  <span>eslint</span>
                  <span>vercel</span>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-3 justify-content-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sakhawat9/ecommerce_store"
                  >
                    <FiGithub
                      style={{ fontSize: "40px" }}
                      className="p-2 rounded-circle bg-light github-icon"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://ecommercestore-alpha.vercel.app"
                  >
                    <GrView
                      style={{ fontSize: "40px" }}
                      className="p-2 rounded-circle bg-light"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card h-100 p-3 text-justify rounded shadow img-animation"
              style={{ background: "#172A45" }}
            >
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={chart_app01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={chart_app02}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={{ height: "180px" }}
                    className="d-block w-100"
                    src={chart_app03}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="card-body">
                <h3>Chart App</h3>
                <p>
                  This is a Communicating website where a person can contact
                  him/her friend & customer community. If a person wants to use
                  this website, he/she must first sign in to the Google
                  Authentication process. They can create Room and contact
                  easily.
                </p>
                <div className="px-3 pb-2 technology">
                  <span>React Redux</span>
                  <span>Redux Toolkit</span>
                  <span>Style Component</span>
                  <span>Material-ui</span>
                  <span>Firebase</span>
                  <span>React Firebase Hook</span>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-3 justify-content-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sakhawat9/chat-app"
                  >
                    <FiGithub
                      style={{ fontSize: "40px" }}
                      className="p-2 rounded-circle bg-light github-icon"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://chat-app-team-78.web.app"
                  >
                    <GrView
                      style={{ fontSize: "40px" }}
                      className="p-2 rounded-circle bg-light"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleClick} className="mt-3 btn-brand">
          All Project
        </button>
      </div>
    </div>
  );
};

export default Main;
