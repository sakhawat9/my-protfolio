import React from "react";
import blogImg01 from "../../images/1_o_4tse4mlxkkzYSiOio8Yg.png";
import blogImg02 from "../../images/1_cgv7fZWAHk10Tc2Vsc7OGg.jpg";
import blogImg03 from "../../images/1_jDAbCxUTFv1u3sLZlnRGdg.png";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="my-5 pt-5">
      <Container>
      <h1 className="pb-3 text-center">ALL Blogs</h1>
        <div className="row">
          <div className="my-5 col-md-4">
            <div className="p-3 rounded" style={{ background: "#172A45" }}>
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href="https://sakhawathossain7969.medium.com/top-10-javascript-interview-questions-2e1d2f106443"
                rel="noreferrer"
              >
                <img
                  className="mb-3 rounded"
                  style={{ width: "100%", height: "233px" }}
                  src={blogImg01}
                  alt=""
                />
                <h3>Top 10 JavaScript Interview Questions</h3>
              </a>
            </div>
          </div>

          <div className="py-5 col-md-4">
            <div className="p-3 rounded" style={{ background: "#172A45" }}>
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href="https://sakhawathossain7969.medium.com/react-js-fundamental-10-concepts-f1bb1780df1f"
                rel="noreferrer"
              >
                <img
                  className="mb-3 rounded"
                  style={{ width: "100%", height: "233px" }}
                  src={blogImg02}
                  alt=""
                />
                <h3>Top 10 JavaScript Interview Questions</h3>
              </a>
            </div>
          </div>
          <div className="py-5 col-md-4">
            <div className="p-3 rounded" style={{ background: "#172A45" }}>
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                href="https://sakhawathossain7969.medium.com/javascript-es6-block-binding-385781357080"
                rel="noreferrer"
              >
                <img
                  className="mb-3 rounded"
                  style={{ width: "100%", height: "233px" }}
                  src={blogImg03}
                  alt=""
                />
                <h3>Top 10 JavaScript Interview Questions</h3>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
