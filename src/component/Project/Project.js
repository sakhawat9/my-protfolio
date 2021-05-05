import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import laundry01 from '../../images/laundry01.png'
import laundry02 from '../../images/laundry02.png'
import laundry03 from '../../images/laundry03.png'
import fast_repair01 from '../../images/fast_repair01.png'
import fast_repair02 from '../../images/fast_repair02.png'
import fast_repair03 from '../../images/fast_repair03.png'
import daily_mart01 from '../../images/daily_mart01.png'
import daily_mart02 from '../../images/daily_mart02.png'
import daily_mart03 from '../../images/daily_mart03.png'
import five from '../../images/five_website.png';
import volunteer01 from '../../images/volunteer01.png'
import volunteer02 from '../../images/volunteer02.png'
import volunteer03 from '../../images/volunteer03.png'
import fast_ride01 from '../../images/fast_ride01.png'
import fast_ride02 from '../../images/fast_ride02.png'
import fast_ride03 from '../../images/fast_ride03.png'
import panda01 from '../../images/panda01.png'
import panda02 from '../../images/panda02.png'
import panda03 from '../../images/panda03.png'
import football01 from '../../images/football01.png'
import football02 from '../../images/football02.png'
import football03 from '../../images/football03.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel'



const Project = () => {

    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className="pb-5 my-5">
            <Container>
                <>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}} className="p-3 img-animation text-justify shadow rounded">
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={laundry01} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={laundry02} alt="Second slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100"src={laundry03} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                                <h3>Go Wash</h3>
                                <p>A full-stack single-page web application where customers can book a service for washing their dresses by pay the fees. The website contains a separate dashboard for the admin and user.</p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Material-ui</span>
                                    <span>Stripe.js</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>Bootstrap</span>
                                </div>
                               <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/GoWash"><FontAwesomeIcon icon={faGithub} /></a>
                               <a style={{fontSize: "30px"}} target="_blank" href="https://laundry-service-48e19.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}}  className="p-3 img-animation shadow rounded text-justify ">
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={fast_repair01} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={fast_repair02} alt="Second slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100"src={fast_repair03} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                                <h3>Fast Repair</h3>
                                <p>A full-stack single-page web application where customers can book a service for repairing their smart phone by pay the fees. The website contains a separate dashboard for admin and user.</p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Material-ui</span>
                                    <span>Stripe.js</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>React bootstrap</span>
                                </div>
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/fast-repair"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://fast-repair-c13c2.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}} className="p-3 img-animation text-justify shadow rounded">
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={daily_mart01} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={daily_mart02} alt="Second slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100"src={daily_mart03} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                                <h3>Daily Mart</h3>
                                <p>A full-stack single-page web application where users can choose, explore and order food by submitting relevant information.</p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Material-ui</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>React bootstrap</span>
                                </div>
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/Daily-Mart"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://fresh-valley-e1a56.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}} className="p-3 img-animation text-justify shadow rounded">
                                <figure><img className="mb-2 rounded" style={{width: '100%'}} src={five} alt=""/></figure>
                                <h3>Doctors Portal</h3>
                                <p>A single-page web app with a dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard.</p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Material-ui</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>React bootstrap</span>
                                </div>
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/doctors-portal-main"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://doctors-portal-ac941.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}} className="p-3 img-animation text-justify shadow rounded">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={volunteer01} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={volunteer02} alt="Second slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100"src={volunteer03} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                                <h3>volunteer_networks</h3>
                                <p>A single-page web app. Admin can add any event and he can see all events. Users can register for an event and see all registered event details. with a dashboard where people can pick the date and time and fix an appointment. </p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Material-ui</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>React bootstrap</span>
                                </div>
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/volunteer-network"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://volunteer-network-3bcf3.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}} className="p-3 img-animation text-justify shadow rounded">
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={fast_ride01} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={fast_ride02} alt="Second slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100"src={fast_ride03} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                                <h3>Fast_Ride</h3>
                                <p>A single-page web app with a dashboard where users can request a ride by selecting their pick-up location and their destination location and date.. </p>
                                <div className="row technology px-3 pb-2">
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MOngoDB</span>
                                    <span>Material-ui</span>
                                    <span>FontAwesome</span>
                                    <span>Firebase</span>
                                    <span>React bootstrap</span>
                                </div>
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/fast-ride"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://urban-riders-9bf60.web.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}} className="p-3 img-animation text-justify shadow rounded">
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={panda01} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={panda02} alt="Second slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100"src={panda03} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                                <h3>Panda Commerce</h3>
                                <p>A simple, static, and one-page e-commerce website design. It is an XD to HTML conversion.</p>
                                <div className="row technology px-3 pb-2">
                                    <span>HTML5</span>
                                    <span>CSS</span>
                                    <span>Bootstrap</span>
                                </div>
                                <div className="">
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/panda-commerce-boostrtrap"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://sakhawathossain55.github.io/panda-commerce-boostrtrap"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div style={{background: '#172A45', height: '530px'}} className="p-3 img-animation text-justify shadow rounded">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={football01} alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100" src={football02} alt="Second slide"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img style={{height: '150px'}} className="d-block w-100"src={football03} alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                                <h3>Football Facts</h3>
                                <p>Football Facts is a professional react web app what I made for programming hero's assignment #8. The project is totally simple and made using latest version functionality.</p>
                                <div className="row technology px-3 pb-2">
                                <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>ImgBB</span>
                                    <span>FontAwesome</span>
                                    <span>Heroku</span>
                                    <span>Bootstrap</span>
                                </div>
                                <div className="">
                                <a style={{fontSize: "30px", paddingRight: "20px"}} target="_blank" href="https://github.com/SakhawatHossain55/Football-Facts"><FontAwesomeIcon icon={faGithub} /></a>
                                <a style={{fontSize: "30px"}} target="_blank" href="https://cranky-visvesvaraya-ed5ebc.netlify.app"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Container>
        </div>
    );
};

export default Project;