import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";

const Article = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/project");
  };
  return (
    <>
      <Container>
        <div className="py-5 row">
          <div className="pr-5">
            <h2>Some of my articles</h2>
          </div>
          <div>
            <button onClick={handleClick} className="btn-brand">
              Article
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Article;
