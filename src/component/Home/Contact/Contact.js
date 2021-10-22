import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./contact.css";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};
  return (
    <section>
      <Container
        className="p-5 mb-5 text-center"
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
          <Col md={7}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Your Name"
                name="name"
                {...register("name")}
                className="form-control"
                required
              />
              <br />
              <input
                className="form-control"
                name="email"
                {...register("email")}
                placeholder="Your Email"
                required
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                placeholder="Enter Message"
                cols="30"
                rows="5"
                {...register("message")}
                required
              ></textarea>
              <br />
              <input
                className="form-control"
                style={{ background: "#2053C9", color: "#fff" }}
                type="submit"
                value="Submit"
              />
            </form>
          </Col>
          <Col md={5}>
            <div className="p-4 mb-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle icon-style d-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "30px", height: "30px" }}
                  icon={faPhoneAlt}
                />
              </span>
              <span className="ps-4">
                <p>01849687969</p>
                <p>01811973362</p>
              </span>
            </div>
            <div className="p-4 mb-3 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle d-flex align-items-center icon-style justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "30px", height: "30px" }}
                  icon={faEnvelope}
                />
              </span>
              <span className="ps-4">
                <p>sakhawathossain6979@gmail.com</p>
                <p>sakhawathossain3362@gmail.com</p>
              </span>
            </div>
            <div className="p-4 rounded d-flex contactInfo">
              <span className="mr-5 rounded-circle d-flex icon-style align-items-center justify-content-center">
                <FontAwesomeIcon
                  style={{ width: "30px", height: "30px" }}
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
