import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className="container pt-3 pb-3">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Do Learn Vibe Offer Online Education?</Accordion.Header>
                    <Accordion.Body>
                        Learn Vibe is Completely Online based platform . Where You can learn any topic related to tech or business or any other
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How I Can Purchase a Course?</Accordion.Header>
                    <Accordion.Body>
                        To Buy a course visit our <strong><Link to='/courses'>Courses</Link></strong> Page where you will find every courses that we are offering now.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Who should take an Online Course?</Accordion.Header>
                    <Accordion.Body>
                        Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
                        <li>  Advance your skill-set or begin a career change.</li>
                        <li>Take the next step in your formal education.</li>
                        <li> Ease the transition before entering a full-time academic program.</li>
                        <li>Enjoy learning a new topic.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Are there prerequisites or language requirements?</Accordion.Header>
                    <Accordion.Body>
                        There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.
                        All courses are conducted in English and Bengali.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header> Can I take more than one course at a time?</Accordion.Header>
                    <Accordion.Body>
                        If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header> What should I do if I need to start the course late?</Accordion.Header>
                    <Accordion.Body>
                        It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header> How do I register?</Accordion.Header>
                    <Accordion.Body>
                        Registration is available on our website. Just follow the <strong><Link to='/register'>Registration Page</Link></strong>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;