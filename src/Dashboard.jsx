import React from 'react';
import './dashboard.css';

const Dashboard = ({ courses }) => {
    console.log({courses})

    const rows = courses.map(({ type, videos }) => (
        <div
            key={type}
            className='courseRow'
        >
            <h3>
                {type}
            </h3>

            <div>
                {videos.map(video => {
                    const imgUrl = `https://img.youtube.com/vi/${video}/0.jpg`;
                    return (
                        <img
                            alt='thumbnail'
                            key={video}
                            src={imgUrl}
                        />
                    )
                })}
            </div>

            <hr />
        </div>
    ));

    return (
        <div className='dashboard'>
            {rows}
        </div>
    )
}

export default Dashboard;