import React from 'react';
import './UpcomingEvents.scss';

const UpcomingEvents = ({ upcomingEvents }) => {
    return (
        <div>
            <h2 className='event__title'>Upcoming Events</h2>
            <ul className='eevent__list'>
                {upcomingEvents.map((event, index) => (
                    <li className='event__item' key={index}>
                        <p className='event__info'>{event.name}</p>
                        <p className='event__info'>{event.date}</p>
                        <p className='event__info'>{event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;