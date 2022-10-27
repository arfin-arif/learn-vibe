import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CategoryPageCard = () => {
    const allCoursesByCAtegory = useLoaderData()
    const courses = allCoursesByCAtegory[0]
    const { cover, instructor, title, info, ratings, id, price } = courses;

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default CategoryPageCard;