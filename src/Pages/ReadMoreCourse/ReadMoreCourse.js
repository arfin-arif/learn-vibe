import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const ReadMoreCourse = () => {
    const course = useLoaderData();
    const { cover, instructor, title, info, ratings, id, price, category_id } = course;


    return (
        <Card className='container'>
            <Card.Title>{title}</Card.Title>

            <Card.Body>
                <Card.Img className='' src={cover} />
                <Card.Text>
                    {info}
                </Card.Text>
                {/* <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All News In This Category </Button>
                </Link> */}
                <div className='d-flex justify-content-between align-items-center'>
                    <Button variant="dark">Download Detail </Button>

                    <Link to={`/course/premium/${id}`} ><Button variant="dark">Get premium </Button></Link>
                </div>

            </Card.Body>
        </Card>
    );
};

export default ReadMoreCourse;