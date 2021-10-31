import React from 'react';
import './Contact.css';

const Conntact = () => {
    return (
        <div className="container contact-area">
            <h2 className="text-center pb-4">Feel free to contact us!</h2>
            <form class="row g-3">
                <div class="col-12">
                    <input type="text" class="form-control" placeholder="Your Name"/>
                </div>
                <div class="col-12">
                    <input type="email" class="form-control" placeholder="Your Email"/>
                </div>
                <div class="col-12">
                    <input type="number" class="form-control" placeholder="Your Phone"/>
                </div>
                <div class="col-12">
                    <textarea type="text" class="form-control" placeholder="Your Message"/>
                </div>
                <div class="col-12">
                    <button type="submit" class="happy-btn px-3 py-1">Contact Us</button>
                </div>
                </form>
        </div>
    );
};

export default Conntact;