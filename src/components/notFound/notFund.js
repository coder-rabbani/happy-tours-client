import React from 'react';
import { Link } from 'react-router-dom';
import nomatch from '../../images/not-found.svg'

//not found component
const NotFound = () => {
    return (
        <div className="text-center mb-5 mt-5">
            <img width="500" className="img-fluid notfound mb-3" src={nomatch} alt="not found" />
            <h2 className="mb-3">Ops! We are sorry, page not found. </h2>
            <Link to="/"><button className="happy-btn px-4 py-1">Go Back</button></Link>
        </div>
    );
};

export default NotFound;