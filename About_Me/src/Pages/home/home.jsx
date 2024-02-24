import React from 'react'
import "./home.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import BasePage from '../../components/base_page';


const Home = () => {

    const maincontent = (
    <div style={{width:'100vw', height:'90vh'}}>

    </div>
    )
    return <BasePage maincontent={maincontent} />;
}
export default Home