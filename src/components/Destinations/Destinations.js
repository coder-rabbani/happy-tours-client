import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]); 

    useEffect(()=>{
        axios.get('https://morning-mountain-71318.herokuapp.com/places')
        .then(res => {
            setDestinations(res.data);
        })
    },[]);
    return (
        <div>
            <Container className="py-5">
                <h2 className="text-center pb-4 pt-4 fw-bold">Most Popular Destinations</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        destinations.map(destination=><Destination
                            key={destination._id}
                            destination={destination}
                        ></Destination>)
                    }
                </Row>    
            </Container>
        </div>
    );
};

export default Destinations;