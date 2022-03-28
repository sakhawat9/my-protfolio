/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="pt-3">
      <Container>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-justify">
              <img
                className=" pb-5 w-100  rounded"
                src="https://res.cloudinary.com/medsy/image/upload/v1648138262/shakib_wnliik.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="">Hello, I'm Sakhawat Hossain</h3>
            <p>
              A self-motivated and enthusiastic web developer with a deep
              interest in JavaScript. To work in the Software industry with
              modern web technologies of different local & multinational
              Software/ IT agencies of Bangladesh and grow rapidly with
              increasing responsibilities.
            </p>
            <h2>My Skills</h2>
            <div className="pe-4 pb-3 skills">
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Typescript</span>
              <span>React Router</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Tailwind CSS</span>
              <span>Bootstrap</span>
              <span>React Bootstrap</span>
              <span>Stripe.js</span>
              <span>Material-ui</span>
              <span>FontAwesome</span>
              <span>React Icon</span>
              <span>Firebase</span>
              <span>vercel</span>
              <span>Netlify</span>
              <span>Heroku</span>
            </div>
            <div className="d-flex gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sakawat.hossain.338211"
              >
                <span className="mr-3 rounded-circle icon d-flex align-items-center justify-content-center">
                  <FaFacebookF
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
              </a>
              <a target="_blank" rel="noreferrer" href="/">
                <span className="mr-3 rounded-circle icon d-flex align-items-center justify-content-center">
                  <FaTwitter
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sakhawat9"
              >
                <span className="mr-3 rounded-circle icon d-flex align-items-center justify-content-center">
                  <FiGithub
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/shjsdev"
              >
                <span className="mr-5 rounded-circle icon d-flex align-items-center justify-content-center">
                  <FaLinkedinIn
                    style={{ width: "25px", height: "25px" }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
