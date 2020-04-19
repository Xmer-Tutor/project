import React, { useState } from 'react';
import './courseList.css';

const CourseList = ({ addToCart, courseType, disabled }) => {
    const [ sort, setSort ] = useState(1);

    const rows = courseType ? courseType.courses
        .sort((a, b) => {
            const { price: aPrice } = a;
            const { price: bPrice } = b;

            return (aPrice - bPrice) * sort;
        })
        .map(course => {
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
                    {!isDisabled ? (
                        <button
                            onClick={() => {addToCart(course.id)}}
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div>
                            Already in Cart / Purchased
                        </div>
                    )}
                </div>
            )
        }) : [];

    return (
        <div className='courseType'>
            <h1>
                { courseType && courseType.type } Courses
            </h1>
            <select onChange={({ target }) => setSort(target.value)}>
                <option
                    value={1}
                >
                    Sort by Price: Low to High
                </option>
                <option
                    value={-1}
                >
                    Sort by Price: High to Low
                </option>
            </select>
            <div className='courseRows'>
                {rows}
            </div>
        </div>
    )
}

export default CourseList;