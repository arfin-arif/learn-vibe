import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';






const ReadMoreCourse = () => {
    const course = useLoaderData();
    const { cover, instructor, title, info, ratings, id, price, category_id } = course;


    return (

        <div className='pb-5'>

            <Card className='container col-md-8 col-lg-6 col-xl-6 '>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button variant="dark">Download Detail </Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Img className='' src={cover} />
                    <Card.Text>
                        {info}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/course/premium/${id}`} ><Button variant="dark">Get premium </Button></Link>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default ReadMoreCourse;