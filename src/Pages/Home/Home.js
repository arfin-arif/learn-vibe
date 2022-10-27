import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'

const Home = () => {
    return (
        <div className=''>

            <Container>
                <Row>

                    <Col lg='6' className='d-flex justify-content-center align-items-center mt-2'>
                        <div>

                            <span style={{ color: 'Black', fontFamily: "cursive", fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Learn With Learn Vibe']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                            <h1>Education Is A Path To Success In Life</h1>
                            <p>Education will help you to acquire whatever you want to earn.When people are educated, they can significantly contribute to their families and society in various aspects and fields, thus creating a stable and stimulating community !!!</p>
                        </div>

                    </Col>
                    <Col lg='6'>
                        <div>

                            <Image className='img-fluid' src='https://eduvibe.react.devsvibe.com/images/banner/banner-02/banner-01.png'></Image>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;