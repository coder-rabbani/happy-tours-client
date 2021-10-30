import React from 'react';
import {Card, Col} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Destination = (props) => {
    const {_id, title, description, image} = props.destination;

    const history = useHistory();

    const handleSinglePlace=id=>{
        const url = `/places/${id}`
        history.push(url);
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {`${description.slice(0, 100)} [...]`}
                        </Card.Text>
                         <button onClick={()=>handleSinglePlace(_id)} className="happy-btn w-100 py-2">Book Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Destination;