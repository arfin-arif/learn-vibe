import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetPremium = () => {
    const course = useLoaderData();
    const { cover, instructor, title, info, ratings, id, price, category_id } = course;

    return (
        <div>
            <h2>This is premium</h2>
        </div>
    );
};

export default GetPremium;