import React from 'react';
import { Container } from 'react-bootstrap';
import fast from '../../../images/fast_website.png';
import second from '../../../images/second_website.png';
import third from '../../../images/thaird_website.png';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Main.css'


const Main = () => {
    const history = useHistory()
    const handleClick = () => {
        console.log('click');
        history.push('/project')
    }
    return (
        <div className="pb-5 my-5">
            <Container>
                <div>
                <h2 className="pb-3">Some of my work</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div style={{background: '#172A45', height: '520px'}} className="p-3 img-animation text-justify shadow rounded">
                                <figure>
                                    <img className="mb-2 rounded" style={{width: '100%'}} src={fast} alt=""/>
                                </figure>
                                <h3>Go Wash</h3>
                                <p>A full-stack single-page web application where customers can book a service for washing their dresses by pay the fees. The website contains a separate dashboard for the admin and user</p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Stripe.js</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>Bootstrap</span>
                                </div>
                               <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/GoWash"><FontAwesomeIcon icon={faGithub} /></a>
                               <a style={{fontSize: "30px"}} target="_blank" href="https://laundry-service-48e19.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div style={{background: '#172A45', height: '520px'}}  className="p-3 img-animation shadow rounded text-justify ">
                                <figure>
                                    <img className="mb-2 rounded" style={{width: '100%'}} src={second} alt=""/>
                                </figure>
                                <h3>Fast Repair</h3>
                                <p>A full-stack single-page web application where customers can book a service for repairing their smart phone by pay the fees. The website contains a separate dashboard for admin and user</p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>React bootstrap</span>
                                </div>
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/fast-repair"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://fast-repair-c13c2.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div style={{background: '#172A45', height: '520px'}} className="p-3 img-animation text-justify shadow rounded">
                                <figure>
                                    <img className="mb-2 rounded" style={{width: '100%'}} src={third} alt=""/>
                                </figure>
                                <h3>Daily Mart</h3>
                                <p>A full-stack single page web application where users can choose, explore and order food by submitting relevant information.</p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Stripe.js</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>React bootstrap</span>
                                </div>
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/Daily-Mart"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://fresh-valley-e1a56.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        
                    </div>
                        <button onClick={handleClick} className="btn-brand mt-3">All Project</button>
                </div>
            </Container>
        </div>
    );
};

export default Main;