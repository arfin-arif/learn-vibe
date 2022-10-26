import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const ReadMoreCourse = () => {
    const c = useLoaderData();
    // const { cover, instructor, title, info, ratings, id, price } = course;
    console.log(c)

    return (
        <Card >
            {/* {course.length}
            <Card.Img variant="top" src={cover} /> */}
            <Card.Body>
                {/* <Card.Title>{title}</Card.Title> */}
                <Card.Text>
                    {/* {info} */}
                </Card.Text>
                {/* <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All News In This Category </Button>
                </Link> */}
            </Card.Body>
        </Card>
    );
};

export default ReadMoreCourse;