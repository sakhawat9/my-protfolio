import React from 'react';
import Article from '../Article/Article';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Hero />
            <Main />
            <Article />
        </div>
    );
};

export default Home;