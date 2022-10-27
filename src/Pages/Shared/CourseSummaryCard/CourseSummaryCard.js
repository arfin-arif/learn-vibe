import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaDollarSign, FaFacebook, FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseSummaryCard.css'

const CourseSummaryCard = ({ course }) => {

    const { cover, instructor, title, info, ratings, id, price } = course;
    const { name, profile } = instructor;
    return (
        <Card className="mb-5 col-12 col-sm-5 col-lg-5  ms-lg-5 ms-sm-4 card-bg">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        className='me-2'
                        roundedCircle
                        src={profile}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>   {name}</p>

                    </div>
                </div>
                <div>
                    <FaFacebook></FaFacebook>
                    <FaRegHeart className='ms-1'></FaRegHeart>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={cover}></Card.Img>
                <Card.Text>
                    {
                        info.length > 50 ?
                            <p>{info.slice(0, 100) + '...'} <Link to={`/courses/${id}`}><Button variant="outline-secondary">View More</Button></Link> </p>
                            : <p>{info}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="">
                <div className='d-flex   justify-content-between align-items-center'>
                    <div>
                        <FaDollarSign className='me-2'></FaDollarSign>
                        <span>{price}</span>
                    </div>
                    <div className=''>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{ratings}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseSummaryCard;