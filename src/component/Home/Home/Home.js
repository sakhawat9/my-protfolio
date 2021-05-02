import React from 'react';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Hero />
            <Main />
            <Contact />
        </div>
    );
};

export default Home;