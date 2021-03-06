import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import laundry01 from "../../images/laundry01.png";
import laundry02 from "../../images/laundry02.png";
import laundry03 from "../../images/laundry03.png";
import fashion from "../../images/Screenshot_23.png";
import fashion2 from "../../images/Screenshot_24.png";
import fashion3 from "../../images/Screenshot_25.png";
import fstore from "../../images/fstore.png";
import fstore2 from "../../images/fstore2.png";
import fstore3 from "../../images/fstore3.png";
import fast_repair01 from "../../images/fast_repair01.png";
import fast_repair02 from "../../images/fast_repair02.png";
import fast_repair03 from "../../images/fast_repair03.png";
import daily_mart01 from "../../images/daily_mart01.png";
import daily_mart02 from "../../images/daily_mart02.png";
import daily_mart03 from "../../images/daily_mart03.png";
import doctors_portal01 from "../../images/doctors_portal01.png";
import doctors_portal02 from "../../images/doctors_portal02.png";
import doctors_portal03 from "../../images/doctors_portal03.png";
import volunteer01 from "../../images/volunteer01.png";
import volunteer02 from "../../images/volunteer02.png";
import volunteer03 from "../../images/volunteer03.png";
import fast_ride01 from "../../images/fast_ride01.png";
import fast_ride02 from "../../images/fast_ride02.png";
import fast_ride03 from "../../images/fast_ride03.png";
import panda01 from "../../images/panda01.png";
import panda02 from "../../images/panda02.png";
import panda03 from "../../images/panda03.png";
import chart_app01 from "../../images/Capture.PNG";
import chart_app02 from "../../images/Capture-1.PNG";
import chart_app03 from "../../images/Capture-2.PNG";
import movie_app01 from "../../images/Capture13.PNG";
import movie_app02 from "../../images/Capture14.PNG";
import movie_app03 from "../../images/Capture15.PNG";
import portfolio from "../../images/Screenshot_7.png";
import portfolio2 from "../../images/Screenshot_19.png";
import portfolio3 from "../../images/Screenshot_21.png";
import Carousel from "react-bootstrap/Carousel";
import "./Project.css";

const data = [
  {
    title: "Go Wash",
    descriptor:
      "A full-stack single-page web application where customers can book a service for washing their dresses by pay the fees. The  website contains a separate dashboard for the admin and user.",
    image: [`${laundry01}`, `${laundry02}`, `${laundry03}`],
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MOngoDB",
      "Material-ui",
      "Stripe.js",
      "FontAwesome",
      "Firebase",
      "Bootstrap",
    ],
    github: "https://github.com/sakhawat9/GoWash",
    liveLink: "https://laundry-service-48e19.web.app",
  },
  {
    title: "Fstore",
    descriptor:
      "Fstore is a professional dynamic e-commerce web application where users can choose and explore product details. Users can select items and can add them to the cart section. Finally can order them from the checkout section.",
    image: [`${fashion}`, `${fashion2}`, `${fashion3}`],
    technology: [
      "React.js",
      "React-redux",
      "Typescript",
      "React icon",
      "React bootstrap",
      "sass",
      "eslint",
      "vercel",
    ],
    github: "https://github.com/sakhawat9/fstore",
    liveLink: "https://ecommercestore-alpha.vercel.app",
  },
  {
    title: "Nilam",
    descriptor:
      "Nilam is a professional and minimal-looking domain selling template. Nilam is made with working contact forms with Google SMTP. It comes with six unique layouts which include tons of sections, customization options, and features for multiple purposes.      ",
    image: [`${fstore}`, `${fstore2}`, `${fstore3}`],
    technology: [
      "React.js",
      "Next.js",
      "Typescript",
      "React icon",
      "Tallwind CSS",
      "Nodemailer",
      "react-toastify",
      "axios",
      "vercel",
    ],
    github: "https://github.com/foysalimran/nilam",
    liveLink: "https://nilam-demo.vercel.app",
  },
  {
    title: "Chart App",
    descriptor:
      "This is a Communicating website where a person can contact him/her friend & customer community. If a person wants to use this website, he/she must first sign in to the Google Authentication process. They can create Room and contact easily.",
    image: [`${chart_app01}`, `${chart_app02}`, `${chart_app03}`],
    technology: [
      "React.js",
      "React Redux",
      "Redux Toolkit",
      "Material-ui",
      "Style Component",
      "Firebase",
      "React Firebase Hook",
    ],
    github: "https://github.com/sakhawat9/chat-app",
    liveLink: "https://chat-app-team-78.web.app",
  },
  {
    title: "Fast Repair",
    descriptor:
      "A full-stack single-page web application where customers can book a service for repairing their smart phone by pay the fees. The website contains a separate dashboard for admin and user.",
    image: [`${fast_repair01}`, `${fast_repair02}`, `${fast_repair03}`],
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MOngoDB",
      "React bootstrap",
      "Material-ui",
      "Stripe.js",
      "FontAwesome",
      "Firebase",
    ],
    github: "https://github.com/sakhawat9/fast-repair",
    liveLink: "https://fast-repair-c13c2.web.app",
  },
  {
    title: "Daily Mart",
    descriptor:
      "A full-stack single-page e-commerce web application where users can choose, explore and order food by submitting relevant information.",
    image: [`${daily_mart01}`, `${daily_mart02}`, `${daily_mart03}`],
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MOngoDB",
      "React bootstrap",
      "Material-ui",
      "FontAwesome",
      "Firebase",
    ],
    github: "https://github.com/sakhawat9/Daily-Mart",
    liveLink: "https://fresh-valley-e1a56.web.app",
  },
  {
    title: "Doctors Portal",
    descriptor:
      "A single-page web app with a dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.",
    image: [
      `${doctors_portal01}`,
      `${doctors_portal02}`,
      `${doctors_portal03}`,
    ],
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MOngoDB",
      "React bootstrap",
      "Material-ui",
      "FontAwesome",
      "Firebase",
    ],
    github: "https://github.com/sakhawat9/doctors-portal-main",
    liveLink: "https://doctors-portal-ac941.web.app",
  },
  {
    title: "volunteer_networks",
    descriptor:
      "A single-page web app. Admin can add any event and he can see all events. Users can register for an event and see all registered event details. with a dashboard where people can pick the date and time and fix an appointment.",
    image: [`${volunteer01}`, `${volunteer02}`, `${volunteer03}`],
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MOngoDB",
      "React bootstrap",
      "Material-ui",
      "FontAwesome",
      "Firebase",
    ],
    github: "https://github.com/sakhawat9/volunteer-network",
    liveLink: "https://volunteer-network-3bcf3.web.app",
  },
  {
    title: "Portfolio Website",
    descriptor:
      "A frontend single-page web application. Which is a developer portfolio application. All the function of the site works smoothly including contact form. This amazing - minimalistic - animated application is made using Next.js, Tailwind CSS & Framer Motion.",
    image: [`${portfolio}`, `${portfolio2}`, `${portfolio3}`],
    technology: [
      "Next.js",
      "Typescript",
      "Nodemailer",
      "React Toastify",
      "React Hook Form",
      "Tailwind CSS",
      "React-icons",
    ],
    github: "https://github.com/sakhawat9/sakhawat-hossain",
    liveLink: "https://sakhawat-hossain.vercel.app",
  },
  {
    title: "Fast_Ride",
    descriptor:
      "A single-page web app with a dashboard where users can request a ride by selecting their pick-up location and their destination location and date..",
    image: [`${fast_ride01}`, `${fast_ride02}`, `${fast_ride03}`],
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MOngoDB",
      "Material-ui",
      "FontAwesome",
      "Firebase",
      "React bootstrap",
    ],
    github: "https://github.com/sakhawat9/fast-ride",
    liveLink: "https://urban-riders-9bf60.web.app",
  },
  {
    title: "Panda Commerce",
    descriptor:
      "A simple, static, and one-page e-commerce website design. It is an XD to HTML conversion.",
    image: [`${panda01}`, `${panda02}`, `${panda03}`],
    technology: ["HTML5", "CSS", "Bootstrap"],
    github: "https://github.com/sakhawat9/panda-commerce-boostrtrap",
    liveLink: "https://sakhawathossain55.github.io/panda-commerce-boostrtrap",
  },
  {
    title: "Movie Website",
    descriptor:
      "Frontend movie website by using HTML, pure CSS, and Vanilla JavaScript.",
    image: [`${movie_app01}`, `${movie_app02}`, `${movie_app03}`],
    technology: ["HTML5", "CSS", "JavaScript", "FontAwesome"],
    github: "https://github.com/sakhawat9/movie_website_html_css_javascript",
    liveLink:
      "https://60ddbae061cc05144df63679--inspiring-colden-4dfc5f.netlify.app",
  },
];

const Project = () => {
  console.log("project", data);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="py-5 mt-5">
      <div className="container">
        <h2 className="pb-3 text-center">Some of my work</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 dark">
          {data.map((projects) => (
            <div className="col">
              <div
                className="card h-100 p-3 text-justify rounded shadow img-animation"
                style={{ background: "#172A45" }}
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {projects.image.map((img) => (
                    <Carousel.Item>
                      <img
                        style={{ height: "180px" }}
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <div className="card-body">
                  <h3>{projects.title}</h3>
                  <p>{projects.descriptor}</p>
                  <div className="px-3 pb-2 technology">
                    {projects.technology.map((te) => (
                      <span>{te}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex gap-3 justify-content-center">
                    <a target="_blank" rel="noreferrer" href={projects.github}>
                      <FiGithub
                        style={{ fontSize: "40px" }}
                        className="p-2 rounded-circle bg-light github-icon"
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={projects.liveLink}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
