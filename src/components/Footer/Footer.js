import React from 'react';
import logo from '../../images/happy-tours-logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className="w-50" src={logo} alt="" />
                        <p>World's Best Vacation Planner. Create a fully customized day by day itinerary for free</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Popular places</li>
                            <li>Your Destinations</li>
                            <li>Manage Destinations</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <h3>Get in touch</h3>
                        <p>Dhaka, Bangladesh <br/> hello@happytours.com <br /> +8801745865253</p>
                    </div>
                </div>
                <div className="copyright text-center pt-3">
                    <p>&copy; Happy Tours, All Rights Reserved. </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;