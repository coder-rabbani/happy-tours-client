import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './SinglePlace.css';

const SinglePlace = () => {
    const [place, setPlace] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/places/${id}`)
        .then(res=>setPlace(res.data))
    }, []);
    console.log(place);

    const {title, image, description, price} = place;
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/destinations', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Destination Added Successfully');
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
                        <h2 className="pb-2 pt-4">{title}</h2>
                        <p>{description}</p>
                    </Col>
                    <Col md={4}>
                        <div className="booking-form">
                            <h2 className=" fw-bold">Book Your Vacation</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue={title} {...register("title")}/>
                                <input {...register("name")} placeholder="Your Name" required/>
                                <input {...register("email")} placeholder="Your Email" required/>
                                <input type="number" {...register("phone")} placeholder="Your Phone No" required/>
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