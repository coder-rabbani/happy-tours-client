import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ManageDestinations.css';

const ManageDestinations = () => {
    const [allDestinations, setAllDestinations] = useState([]);
    useEffect(()=>{
        axios.get('https://morning-mountain-71318.herokuapp.com/manageDestinations')
        .then(res=>setAllDestinations(res.data))
    },[]);
    return (
        <div>
            <Container className="order-area py-5">
                <h2 className="text-center pb-3">Manage All Destinations</h2>
                {
                    allDestinations.map(destination=><div className="order-card">
                    <img src={destination.image} alt="" />
                    <h3>{destination.title}</h3>
                    <h3>Price: ${destination.price}</h3>
                </div>)
                }
                
            </Container>
        </div>
    );
};

export default ManageDestinations;