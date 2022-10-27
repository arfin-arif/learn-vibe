import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CategoryPageCard = () => {
    const allCourseByCategory = useLoaderData()

    return (
        <div>
            <h2>{allCourseByCategory.category}</h2>
        </div>
    );
};

export default CategoryPageCard;