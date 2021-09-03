import ParticlesBg from 'particles-bg';
import React, { Component} from 'react';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import './Home.css'

const Home = (Component) => {
    return (
        <div>
            <Hero />
            <Main />
            <Contact />
            <ParticlesBg type="cobweb" bg={true} />       
        </div>
    );
};

export default Home;