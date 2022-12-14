import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';


const Courses = () => {

    return (
        <div className='mt-3'>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10'>
                        <div className='row'>
                            <Course></Course>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Courses;