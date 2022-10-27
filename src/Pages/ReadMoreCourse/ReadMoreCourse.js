import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf'



const ReadMoreCourse = () => {
    const course = useLoaderData();
    const { cover, instructor, title, info, ratings, duration, id, price, category, category_id } = course;

    const pdfGenerate = () => {
        let doc = new jsPDF('landscape', 'px', 'a4', 'false');

        doc.addImage(cover, 'JPEG', 15, 40, 180, 100)
        doc.text(40, 40, `Course Title :${title}`)
        doc.text(40, 60, `Course Category :${category}`)
        doc.text(40, 80, `Teacher :${instructor.name}`)
        doc.text(40, 100, `Public Ratings :${ratings}`)
        doc.text(40, 120, `Total Duration :${duration} days`)
        doc.text(40, 140, `Total Price :${price}`)

        doc.text(40, 160, `Course Details : ${info}`, { maxWidth: 550 });
        doc.save('details.pdf')
    }
    return (

        <div className='pb-5'>

            <Card className='container col-md-8 col-lg-6 col-xl-6 '>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button onClick={pdfGenerate} variant="dark">Download Detail </Button>
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