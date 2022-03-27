import React, { useState } from "react";
import cheesyKitchen1 from "../../../images/cheesyKitchen1.png";
import cheesyKitchen2 from "../../../images/cheesyKitchen2.png";
import cheesyKitchen3 from "../../../images/cheesyKitchen3.png";
import academist from "../../../images/academist.png";
import academist2 from "../../../images/academist2.png";
import academist3 from "../../../images/academist3.png";
import watchShop from "../../../images/watchShop.png";
import watchShop2 from "../../../images/watchShop2.png";
import watchShop3 from "../../../images/watchShop3.png";
import { useHistory } from "react-router";
import { GrView } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import "./Main.css";
import Carousel from "react-bootstrap/Carousel";
import { Modal, Button } from "react-bootstrap";
import { MdOutlinePreview } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Main = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  function handleShow2(breakpoint2) {
    setFullscreen(breakpoint2);
    setShow2(true);
  }
  function handleShow3(breakpoint3) {
    setFullscreen(breakpoint3);
    setShow3(true);
  }

  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/project");
  };

  return (
    <div className="pb-5 mt-5">
      <div className="container">
        <h2 className="pb-3">Some of my work</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 dark">
          <div className="col">
            <div className="card h-100">
              <div className="card-img-hover">
                <img src={cheesyKitchen1} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h3 className="card-title">Cheesy__Kitchen</h3>
                <p className="card-text">
                  Cheesy Kitchen is a full-stack single-page web application
                  where users can order foods.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 fw-bold link-btn"
                      onClick={() => handleShow2(v)}
                    >
                      More About Cheesy__Kitchen
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show2}
                    fullscreen={fullscreen}
                    onHide={() => setShow2(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Cheesy__Kitchen</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="container">
                      <div
                        className="row single-project d-flex align-items-center details"
                        data-aos="flip-left"
                        data-aos-duration="2000"
                      >
                        <div className="col-md-6">
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={cheesyKitchen1}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={cheesyKitchen2}
                                alt="second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={cheesyKitchen3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                          <div className="project-link pt-5  text-center">
                            <a
                              href="https://sungalss-shop.firebaseapp.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="btn link-btn fw-bold px-3 py-2">
                                <MdOutlinePreview /> Live
                              </button>
                            </a>
                            <a
                              href="https://github.com/monirul-fahad/sunglass-store-app-client"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="btn link-btn fw-bold px-3 py-2">
                                <FaGithub /> Github
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h3>Cheesy__Kitchen</h3>
                          <div>
                            <ul>
                              <li>
                                Cheesy Kitchen is a full-stack single-page web
                                application where users can order foods.
                              </li>

                              <li>
                                There is a powerful feature like an admin
                                dashboard where the admin can post and update
                                food items, edit and delete items by crude
                                operation
                              </li>
                              <li>
                                Normal users will be treated as customers. They
                                can browse the home page and can order any item
                                from all food items added by the admin. The
                                selected item will be added to the cart. And
                                there use can checkout selected items.
                              </li>
                            </ul>
                          </div>
                          <h4 className="my-2 fw-bold">Technology</h4>
                          <div className="px-3 pb-2 technology">
                            <span>Next.js</span>
                            <span>MongoDB</span>
                            <span>Mongoose</span>
                            <span>Node.js</span>
                            <span>Typescript</span>
                            <span>React icons</span>
                            <span>Tailwind css</span>
                            <span>Node sass</span>
                            <span>React hook form</span>
                            <span>React multi carousel</span>
                            <span>Slick carousel</span>
                            <span>Nodemailer</span>
                            <span>Vercel</span>
                            <span>Sweetalert2</span>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-img-hover">
                <img src={academist} className="card-img-top" alt="..." />
              </div>

              <div className="card-body">
                <h3 className="card-title">Academist</h3>
                <p className="card-text">
                  Academist is a learning management website like Udemy where
                  instructors can post their course and a student can enroll in
                  it.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 fw-bold link-btn"
                      onClick={() => handleShow(v)}
                    >
                      More About Academist
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Academist</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="container">
                      <div
                        className="row single-project d-flex align-items-center details"
                        data-aos="flip-left"
                        data-aos-duration="2000"
                      >
                        <div className="col-md-6">
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={academist}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={academist2}
                                alt="second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={academist3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                          <div className="project-link pt-5  text-center">
                            <a
                              href="https://academist.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="btn link-btn fw-bold px-3 py-2">
                                <MdOutlinePreview /> Live
                              </button>
                            </a>
                            <a
                              href="https://github.com/sakhawat9/Academist"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="btn link-btn fw-bold px-3 py-2">
                                <FaGithub /> Github
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h3>Academist</h3>
                          <div>
                            <ul>
                              <li>
                                Academist is a learning management website like
                                Udemy where instructors can post their course
                                and a student can enroll in it.
                              </li>
                              <li>
                                There are three different dashboard layouts for
                                three different types of users like Student,
                                Instructor, Admin.
                              </li>
                              <li>
                                It is a fully functional website where all the
                                functionality like payment gateway, course
                                update, delete, etc work dynamically.
                              </li>
                            </ul>
                          </div>
                          <h4 className="my-2 fw-bold">Technology</h4>
                          <div className="px-3 pb-2 technology">
                            <span>Next.js</span>
                            <span>Typescript</span>
                            <span>Axios</span>
                            <span>MOngoDB</span>
                            <span>Mongoose</span>
                            <span>React-testify</span>
                            <span>Js-cookie</span>
                            <span>Tailwind CSS</span>
                            <span>Node-sass</span>
                            <span>Cloudinary</span>
                            <span>Sweetalert2</span>
                            <span>React Toastify</span>
                            <span>React-icons</span>
                            <span>Vercel</span>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-img-hover">
                <img src={watchShop} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">WATCH_SHOP</h5>
                <p className="card-text">
                  Watch_Shop is an e-commerce website where users can see
                  watches on the basis of category, can add watches to cart and
                  watchlist.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 fw-bold link-btn"
                      onClick={() => handleShow3(v)}
                    >
                      More About WATCH_SHOP
                      {typeof v === "string" && `below ${v.split("-")[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show3}
                    fullscreen={fullscreen}
                    onHide={() => setShow3(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title className="details-title">WATCH_SHOP</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="container">
                      <div
                        className="row single-project d-flex align-items-center details"
                        data-aos="flip-left"
                        data-aos-duration="2000"
                      >
                        <div className="col-md-6">
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={watchShop}
                                alt="First slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={watchShop2}
                                alt="second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={watchShop3}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                          <div className="project-link pt-5  text-center">
                            <a
                              href="https://watch-shop-ruddy.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                style={{
                                  background: "#ff4a57",
                                  border: "none",
                                  color: "#1f2235",
                                }}
                                className="btn link-btn fw-bold px-3 py-2"
                              >
                                <MdOutlinePreview /> Live
                              </button>
                            </a>
                            <a
                              href="https://github.com/sakhawat9/watch_shop"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button
                                style={{
                                  background: "#ff4a57",
                                  border: "none",
                                  color: "#1f2235",
                                }}
                                className="btn link-btn fw-bold px-3 py-2"
                              >
                                <FaGithub /> Github
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h2>WATCH_SHOP</h2>
                          <div>
                            <ul>
                              <li>
                                Watch_Shop is an e-commerce website where users
                                can see watches on the basis of category, can
                                add watches to cart and watchlist.
                              </li>
                              <li>
                                A user can manage his profile and can update all
                                details of him. As well as can order products by
                                giving shipping address and payment info.
                              </li>
                              <li>
                                Admin can add new products, manage orders,
                                manage users, and also has the authority of CRUD
                                operation.
                              </li>
                            </ul>
                          </div>
                          <h4 className="my-2 fw-bold">Technology</h4>
                          <div className="px-3 pb-2 technology">
                            <span>Next.js</span>
                            <span>MongoDB</span>
                            <span>Mongoose</span>
                            <span>Node.js</span>
                            <span>React icons</span>
                            <span>Tailwind css</span>
                            <span>Node sass</span>
                            <span>React hook form</span>
                            <span>React multi carousel</span>
                            <span>slick carousel</span>
                            <span>Nodemailer</span>
                            <span>Vercel</span>
                            <span>Sweetalert2</span>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
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
