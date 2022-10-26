import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaBook, FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log(error) })
    }

    return (
        <div className='header'>
            <Navbar collapseOnSelect className='' expand="lg" >
                <Container>
                    <Navbar.Brand> <Link to='/'><FaBook></FaBook> LEARN VIBE </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link > <Link to='/courses'>Courses</Link> </Nav.Link>
                            <Nav.Link > <Link to='/blog'>Blog</Link> </Nav.Link>
                            <Nav.Link > <Link to='/faq'>FAQ</Link> </Nav.Link>
                        </Nav>
                        <Nav className='d-flex  align-items-center'>
                            <Nav.Link>
                                {
                                    user?.uid ?
                                        <>
                                            <span> {user?.displayName}</span>
                                            <Button
                                                className='ms-1' variant='secondary' onClick={handleLogOut}>Log Out</Button>

                                        </>
                                        :
                                        <>
                                            <Link to='/login'>Login </Link>
                                            <Link to='/register'>Register </Link>
                                        </>
                                }

                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.photoURL ?
                                    <Image style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}></Image> : <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                        <div className=' d-lg-none '>
                            <LeftSideNav></LeftSideNav>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;