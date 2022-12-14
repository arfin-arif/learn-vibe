import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://learn-vive-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            {
                categories.map(category => <p
                    className='left-nav '
                    key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link> </p>)
            }
        </div>
    );
};

export default LeftSideNav;