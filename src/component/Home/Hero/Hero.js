import React from "react";
import { Link, useHistory } from "react-router-dom";
import image from "../../../images/my picture 1.png";
import TypeWriterEffect from "react-typewriter-effect";
import "./Hero.css";

const Hero = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/about");
  };
  return (
    <>
      <div className="container-md">
        <div className="pb-5 row">
          <div className="col-sm-6 d-flex align-items-center">
            <div>
              <p>Hello, I'm</p>
              <h1>Sakhawat Hossain</h1>
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
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational
                Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>
              <button
                onClick={handleClick}
                as={Link}
                to="/about"
                className="mr-3 btn-brand"
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
      </div>
    </>
  );
};

export default Hero;
