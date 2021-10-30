import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
    const { register, handleSubmit, reset} = useForm();
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
        <div className="destination-form py-5">
            <h2 className="text-center fw-bold">Please add a destination</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Destination title" required/>
                <textarea {...register("description")} placeholder="Add description" required/>
                <input type="number" {...register("price")} placeholder="Add price" required/>
                <input {...register("image")} placeholder="Add image url" required/>
                <input className="happy-btn" type="submit" value="Add Destination"/>
            </form>
        </div>
    );
};

export default AddDestination;