import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../../images/my picture 1.png'
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <Container>
            <div className="row pb-5">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <p>Hello, I'm</p>
                        <h1>Sakhawat Hossain</h1>
                        <p>Full-stack Web Developer</p>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <button className="btn-brand mr-3">About Me</button>
                        <button className="button-style btn-brand">Git in touch</button>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <img style={{width : '100%'}} src={image} alt=""/>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Hero;