/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import image from "../../images/my picture 1.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <div className="p-5 text-justify">
              <img
                style={{ maxWidth: "350px" }}
                className="pb-5"
                src={image}
                alt=""
              />
              <h1>I'm Sakhawat Hossain</h1>
              <p>
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational
                Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>
              <div className="d-flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9"
                >
                  <span className="mr-3 rounded-circle icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      style={{ width: "25px", height: "25px" }}
                      icon={faFacebookSquare}
                    />
                  </span>
                </a>
                <a target="_blank" rel="noreferrer" href="/">
                  <span className="mr-3 rounded-circle icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      style={{ width: "25px", height: "25px" }}
                      icon={faTwitterSquare}
                    />
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sakhawat9"
                >
                  <span className="mr-3 rounded-circle icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      style={{ width: "25px", height: "25px" }}
                      icon={faGithubSquare}
                    />
                  </span>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/shjsdev"
                >
                  <span className="mr-5 rounded-circle icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon
                      style={{ width: "25px", height: "25px" }}
                      icon={faLinkedin}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 col-md-6">
            <h2>My Skills</h2>
            <div className="row skills">
              <span>JavaScript</span>
              <span>ES6</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MOngoDB</span>
              <span>Stripe.js</span>
              <span>FontAwesome</span>
              <span>Bootstrap</span>
              <span>tailwind css</span>
              <span>Material-ui</span>
              <span>HTML</span>
              <span>HTML5</span>
              <span>CSS</span>
              <span>Firebase</span>
              <span>vercel</span>
              <span>Netlify</span>
              <span>ImgBB</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
