import React from 'react';
import Conntact from '../Contact/Conntact';
import Destinations from '../Destinations/Destinations';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className="py-5">
            <Hero></Hero>
            <Destinations></Destinations>
            <Reviews></Reviews>
            <Conntact></Conntact>
        </div>
    );
};

export default Home;