import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Home/Header/Header";
import Home from "./component/Home/Home/Home";
import Project from "./component/Project/Project";
import Contact from "./component/Home/Contact/Contact";
import Footer from "./component/Footer/Footer";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
