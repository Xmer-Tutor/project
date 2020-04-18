import React from 'react';

const MyLearning = ({ courses, items }) => {
    const videos = courses.reduce((list, type) => {
        const selected = type.courses.filter(({ id }) => items.indexOf(id) >= 0);

        if(selected.length === 0) {
            return list;
        }

        return [...list, {
            type: type.type,
            courses: selected
        }];
    }, [])
    .map(({ type, courses }) => (
        <div className='type' key={type}>
            <h3>{type}</h3>
            {courses.map(({id, title}) => (
                <div className='row' key={id}>
                    <div>
                        {title}
                    </div>
                    <iframe
                        title={title}
                        width="576"
                        height="317"
                        src={`https://www.youtube.com/embed/${id}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
            ))}
        </div>
    ));

    return (
        <div className='cart'>
            <h1>
                My Learning
            </h1>
            <div className='videos'>
                {videos}
            </div>
        </div>
    )
}

export default MyLearning;