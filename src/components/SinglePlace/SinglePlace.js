import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SinglePlace.css';

const SinglePlace = () => {
    const [place, setPlace] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://morning-mountain-71318.herokuapp.com/places/${id}`)
        .then(res=>setPlace(res.data))
    }, []);

    const {title, image, description, price} = place;
    const {user} = useAuth();
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/booking', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Successfully Booked! Thanks');
                reset();
            }
        })
    };
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col md={8}>
                        <img className="w-100" src={image} alt="" />
                        <h2 className="pb-2 pt-4 fw-bold">{title}</h2>
                        <h3>Price: ${price}</h3>
                        <p>{description}</p>
                    </Col>
                    <Col md={4}>
                        <div className="booking-form">
                            <h2 className=" fw-bold">Book Your Vacation</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={title} {...register("title", { required: true })} required/>
                                <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" required/>
                                <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" required/>
                                <input defaultValue={price} {...register("price", { required: true })} placeholder="Price"/>
                                <input defaultValue={image} {...register("image", { required: true })} required/>
                                <input type="number" {...register("phone", { required: true })} placeholder="Your Phone No" required/>
                                <input  {...register("address", { required: true })} placeholder="Your Address" required/>
                                <input className="happy-btn" type="submit" value="Book Now"/>
                            </form>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SinglePlace;