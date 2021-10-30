import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from '../../images/hero-home.svg';
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <Container>
                <Row className="hero-area">
                    <Col md={6}>
                        <h1 className="hero-title">World's Best Vacation Planner</h1>
                        <p>The new way to plan your next vacation!</p>
                    </Col>
                    <Col md={6}>
                        <Image src={banner} fluid></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;