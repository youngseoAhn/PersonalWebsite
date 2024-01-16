import React from 'react';
import { Left } from './Components';
import { Right } from './Components';
import './Components.css'

const Home = () => (
    <div className='container' style={{ display: 'flex' }}>
        <Left/>
        <Right/>
    </div>
);

export default Home;