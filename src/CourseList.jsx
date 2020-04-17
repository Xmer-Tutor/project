import React from 'react';
import './courseList.css';

const CourseList = ({ addToCart, courseType, disabled }) => {
    console.log({disabled})

    const rows = courseType ? courseType.courses.map(course => {
        const imgUrl = `https://img.youtube.com/vi/${course.id}/0.jpg`;
        const isDisabled = disabled.indexOf(course.id) >= 0;

        return (
            <div
                key={course.id}
                className='course'
            >
                <img
                    alt='thumbnail'
                    src={imgUrl}
                />

                <h3>
                    {course.title}
                </h3>
                <div>
                    {course.description}
                </div>
                <div>
                    Price: ${course.price}
                </div>
                {!isDisabled && (
                    <button
                        onClick={() => {addToCart(course.id)}}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        )
    }) : [];

    return (
        <div className='courseType'>
            <h1>
                { courseType && courseType.type } Courses
            </h1>
            <div className='courseRows'>
                {rows}
            </div>
        </div>
    )
}

export default CourseList;