import React from 'react';

const Reviews = () => {
    return (
        <div className="container pt-3 pb-5">
            <h2 className="fw-bold text-center pb-3">What our client says</h2>
            <div className="row">
                <div className="col-md-4">
                    <p>"As an avid traveler, I’ve never been so excited to discover this site. It was like discovering the best tool I had been subconsciously hoping to find." </p>
                    <p className="author">- Mike Hussy </p>
                </div>
                <div className="col-md-4">
                    <p>"I booked a day trip to Giethoorn from Amsterdam through and TripHobo even extended me a discount. The tour company we went with was marvelous and everything" </p>
                    <p className="author">- Steven Franz </p>
                </div>
                <div className="col-md-4">
                    <p>"This was a wonderful tour. An easy and comfortable drive out from Portland with an extremely knowledgeable tour guide - Evan, who was very passionate about his"</p>
                    <p className="author">- Andrea </p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;