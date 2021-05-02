import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import image from '../../images/my picture 1.png'
import './About.css'

const About = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-5 text-justify">
                            <img style={{width : '350px'}} className="pb-5" src={image} alt=""/>
                            <h1>I'm Sakhawat Hossain</h1>
                            <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                            <button className="btn-github btn-brand"><a target="_blank" href="https://github.com/SakhawatHossain55">Github</a></button>
                            <button className="btn-linkedIn btn-brand"><a target="_blank" href="https://www.linkedin.com/in/sakhawat-hossain-95a57b203">LinkedIn</a></button>
                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <h2>My Skills</h2>
                        <div className="row skills">
                            <span>JavaScript</span>
                            <span>ES6</span>
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MOngoDB</span>
                            <span>Stripe.js</span>
                            <span>FontAwesome</span>
                            <span>Bootstrap</span>
                            <span>Material-ui</span>
                            <span>Firebase</span>
                            <span>Netlify</span>
                            <span>ImgBB</span>
                            <span>HTML</span>
                            <span>HTML5</span>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;