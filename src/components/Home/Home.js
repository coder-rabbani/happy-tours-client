import React from 'react';
import Destinations from '../Destinations/Destinations';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div className="py-5">
            <Hero></Hero>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;