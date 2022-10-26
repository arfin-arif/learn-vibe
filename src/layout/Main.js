import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='home'> <Outlet></Outlet></div>
            <Footer></Footer>

        </div>
    );
};

export default Main;