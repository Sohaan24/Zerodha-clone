import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Awards from './Awards';
import Pricing from './Pricing';
import OpenAccount from '../../../OpenAccount';

function HomePage() {
    return (
    <>
        <Hero />
        <Awards />
        <Pricing />
        <Education />
        <OpenAccount />
    </>  );
}

export default HomePage;