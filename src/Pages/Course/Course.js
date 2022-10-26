import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Course = () => {
    const courses = useLoaderData()

    return (
        <>

            {courses.map(course => <CourseSummaryCard
                key={course.id}
                course={course}></CourseSummaryCard>)}
        </>
    );
};

export default Course;