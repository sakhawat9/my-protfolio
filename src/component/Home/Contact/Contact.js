import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9yx52tg",
        "template_0m4amai",
        e.target,
        "user_cjJIEadZRrm3Msru6gwso"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <Container
        className="p-5 my-5 text-center"
        style={{ background: "#172A45" }}
      >
        <div>
          <h1>Get In Touch</h1>
          <p className="pb-2">
            I'd love to hear from you. Whether you have a question or just want
            to say hi, feel free to drop a message. I'll try my best to get{" "}
          </p>
        </div>
        <Row className="rounded ">
          <Col md={6} lg={7}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                className="form-control"
              />
              <br />
              <input
                className="form-control"
                type="email"
                name="usr_email"
                placeholder="Your Email"
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                placeholder="Enter Message"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <input
                className="mb-3 form-control"
                style={{ background: "#2053C9", color: "#fff" }}
                type="submit"
                value="Submit"
              />
            </form>
          </Col>
          <Col md={6} lg={5}>
            <div className="p-3 mb-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle icon-style d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faPhoneAlt}
                />
              </span>
              <span className="ps-4">
                <p>01849687969</p>
                <p>01811973362</p>
              </span>
            </div>
            <div className="p-3 mb-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle d-flex align-items-center icon-style justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faEnvelope}
                />
              </span>
              <span className="ps-4">
                <p>sakhawathossain6979@gmail.com</p>
                <p>sakhawathossain3362@gmail.com</p>
              </span>
            </div>
            <div className="p-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle d-flex icon-style align-items-center justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faMapMarkerAlt}
                />
              </span>
              <span className="ps-4">
                <p>15/E, lake circus, kalabagan</p>
                <p>Dhaka, Bangladesh</p>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
