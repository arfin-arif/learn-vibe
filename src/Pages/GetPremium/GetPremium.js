import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'


const GetPremium = () => {
    const course = useLoaderData();
    const { cover, instructor, title, info, ratings, id, price, category_id } = course;

    return (
        <div className='container d-flex justify-content-center align-items-center '>
            <div className='mb-5 mt-3'>

                <Card >
                    <Card.Img variant="top" src={cover} />
                    <Card.Body>



                        <span style={{ color: 'red', fontFamily: "cursive", fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Welcome You Have Enrolled', `${title}`]}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>


                        <Card.Text>
                            You will get an email from us with your credential . Keep it secret don't share it with anyone.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </div >
    );
};

export default GetPremium;