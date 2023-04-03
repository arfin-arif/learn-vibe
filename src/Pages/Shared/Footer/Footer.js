import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="page-footer  font-small ">
            <div className="container-fluid p-4 bg-dark text-white text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Learn Vibe</h5>
                        <p>Learn anything you want from here </p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3  mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled ">
                            <li><Link to='/'>Link 1</Link></li>
                            <li><Link to='/'>Link 2</Link></li>
                            <li><Link to='/'>Link 3</Link></li>
                            <li><Link to='/'>Link 4</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Link 1</Link></li>
                            <li><Link to='/'>Link 2</Link></li>
                            <li><Link to='/'>Link 3</Link></li>
                            <li><Link to='/'>Link 4</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2022 Copyright-
                <Link to='https://arfinarif-fe6d3.web.app/'> Arfin Arif</Link>
            </div>

        </footer>

    );
};

export default Footer;