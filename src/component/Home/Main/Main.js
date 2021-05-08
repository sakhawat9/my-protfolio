import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import laundry01 from '../../../images/laundry01.png'
import laundry02 from '../../../images/laundry02.png'
import laundry03 from '../../../images/laundry03.png'
import fast_repair01 from '../../../images/fast_repair01.png'
import fast_repair02 from '../../../images/fast_repair02.png'
import fast_repair03 from '../../../images/fast_repair03.png'
import daily_mart01 from '../../../images/daily_mart01.png'
import daily_mart02 from '../../../images/daily_mart02.png'
import daily_mart03 from '../../../images/daily_mart03.png'
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Main.css'
import Carousel from 'react-bootstrap/Carousel'


const Main = () => {
    const history = useHistory()
    const handleClick = () => {
        console.log('click');
        history.push('/project')
    }

        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return (
        <div className="pb-5 my-5">
            <Container>
                <div>
                <h2 className="pb-3">Some of my work</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 pb-4">
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
                        <div className="col-lg-4 col-md-6 pb-4">
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
                        <div className="col-lg-4 col-md-6 pb-4">
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