import React from 'react';

const UpcomingEvents = ({ upcomingEvents }) => {
    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {upcomingEvents.map((event, index) => (
                    <li key={index}>
                        <p>{event.name}</p>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;