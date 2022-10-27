import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';



const GetPremium = () => {
    const course = useLoaderData();
    const { cover, instructor, title, info, ratings, id, price, category_id } = course;

    return (
        <div className='container d-flex justify-content-center align-items-center '>
            <div className='mb-5 mt-3'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cover} />
                    <Card.Body>
                        <Card.Title>Welcome You Have Enrolled <br /> {title}</Card.Title>
                        <Card.Text>
                            You will get an email from us with your credential . Keep it secret don't share it with anyone.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default GetPremium;