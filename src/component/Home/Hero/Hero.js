import React from "react";
import { Link, useHistory } from "react-router-dom";
import image from "../../../images/my picture 1.png";
import TypeWriterEffect from "react-typewriter-effect";
import { Container } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/about");
  };
  return (
    <div className="mt-5 pt-5 pb-5">
      <Container>
        <div className="pb-5 row">
          <div className="col-sm-6 d-flex align-items-center">
            <div>
              <p>Hy There...</p>
              <h1>I'M Sakhawat Hossain</h1>
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Roboto",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "1.5em",
                }}
                startDelay={2000}
                cursorColor="#fff"
                multiText={[
                  "Full-stack Web Developer",
                  "Web Developer",
                  "Front end developer",
                  "Full-stack Web Developer",
                ]}
                loop={true}
                multiTextDelay={1000}
                typeSpeed={150}
              />

              <p className="my-3 text-justify">
                An aspiring MERN Stack Developer with huge knowledge and
                proficiency in JavaScript and ReactJS as well as strong skills
                in writing clean and efficient codes.
              </p>
              <button
                onClick={handleClick}
                as={Link}
                to="/about"
                className="me-3 btn-brand"
              >
                About Me
              </button>
              <button className="mt-3 button-style btn-brand">
                <a href="https://drive.google.com/uc?export=download&id=16pfdkeTdG4VZh5VLwULO18M09kT35LBY">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className=" hero-image col-sm-6">
            <img src={image} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
