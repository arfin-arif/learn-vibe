import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div className=''>

            <Container>
                <Row>

                    <Col lg='6' className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h1>Education Is A Path To Success In Life</h1>
                            <p>Education will help u to accquire whatever you want to earn</p>
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