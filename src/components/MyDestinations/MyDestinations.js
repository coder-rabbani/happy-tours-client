import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import close from '../../images/close.png';
import './MyDestinations.css'

const MyDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/manageDestinations')
        .then(res=>setDestinations(res.data))
    }, []);

    //handle delete item
    const handleDeleteItem = id =>{
        axios.delete(`http://localhost:5000/manageDestinations/${id}`)
        .then(res=>{
            if(res.data.deletedCount){
                alert('Your destination deleted successfully');
                const remainingItem = destinations.filter(destination=>destination._id !== id);
                setDestinations(remainingItem);
            }
        })
    }
    return (
        <div>
            <Container className="order-area py-5">
                <h2 className="text-center pb-3">Manage Your Destinations</h2>
                {
                    destinations.map(destination=><div className="manage-order">
                    <div className="order-card">
                        <img src={destination.image} alt="" />
                        <h3>{destination.title}</h3>
                        <h3>Price: ${destination.price}</h3>
                    </div>
                    <button onClick={()=>handleDeleteItem(destination._id)}><img width="40" src={close} alt="" /></button>
                </div>)
                }
                
            </Container>
        </div>
    );
};

export default MyDestinations;