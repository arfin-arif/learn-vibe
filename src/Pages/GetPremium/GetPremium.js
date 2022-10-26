import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const GetPremium = () => {
    const course = useLoaderData();
    const { cover, instructor, title, info, ratings, id, price, category_id } = course;

    return (
        <div className='d-flex justify-content-center align-items-center login-container'>
            <div className='log-in'>
                <CardGroup>
                    <Card>
                        <Card.Img className='img-fluid' style={{ height: '250px', width: '250px' }} variant="top" src={cover} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {info}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default GetPremium;