import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = ({ courses: courseList }) => {
    const rows = courseList.map(({ type, courses }, idx) => {
        const imgUrl = `https://img.youtube.com/vi/${courses[0].id}/0.jpg`;

        return (
            <Link
                key={type}
                className='courseType'
                to={`/courseType/${idx}`}
            >
                <img
                    alt='thumbnail'
                    src={imgUrl}
                />

                <h3>
                    {type}
                </h3>
            </Link>
        )
    });

    return (
        <div className='dashboard'>
            {rows}
        </div>
    )
}

export default Dashboard;