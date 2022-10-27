import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaBook, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Header.css'
import { useState } from 'react';

const Header = () => {
    const [mood, setMood] = useState(localStorage.getItem('mood') || 'light')
    const { user, logOut } = useContext(AuthContext)
    // darkMood function
    const toggleMood = () => {
        if (mood === 'light') {
            setMood('dark');
        } else {
            setMood('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('mood', mood);
        document.body.className = mood;
    }, [mood]);


    //tooltip function
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );


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
                            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to=''></NavLink>

                            <div>
                                <NavLink to='/courses'>    Courses </NavLink>
                                <NavLink to='/blog'   >    Blog </NavLink>
                                <NavLink to='/faq'    >     FAQ  </NavLink>
                            </div>
                        </Nav>
                        <Nav className=''>
                            <Nav.Link>
                                {
                                    user?.uid ?
                                        <>

                                            <Button
                                                className='ms-1' variant='secondary' onClick={handleLogOut}>Log Out</Button>

                                        </>
                                        :
                                        <>
                                            <NavLink to='/login'>Login </NavLink>
                                            <NavLink to='/register'>Register </NavLink>
                                        </>
                                }
                            </Nav.Link>
                            {/* dark mood */}
                            <Nav.Link>
                                {
                                    mood === 'light' ?
                                        <>
                                            <FaMoon onClick={toggleMood}></FaMoon>
                                        </>
                                        :
                                        <>
                                            <FaSun onClick={toggleMood}></FaSun>
                                        </>
                                }
                            </Nav.Link>

                            <Nav.Link eventKey={2} >
                                {user?.photoURL ?
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                    >
                                        <Image style={{ height: '30px' }}
                                            roundedCircle
                                            src={user?.photoURL}></Image>
                                    </OverlayTrigger> : <FaUser></FaUser>
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