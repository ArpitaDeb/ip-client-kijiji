import React, { useState } from 'react';
import './HomePage.scss'
import community from '../../assets/image/community.png';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="homepage-container">
            <div className="dropdown">
                <button className="dropdown__toggle" onClick={toggleDropdown}>
                    See all in Community ▼
                </button>
                {isOpen && (
                    <div className="dropdown__menu">
                        <ul>
                            <li>Activities & Groups</li>
                            <li>Artists & Musicians</li>
                            <li>Classes & Lessons</li>
                            <li>Events</li>
                            <li>Friendship & Networking</li>
                            <li>Groups</li>
                            <li>Long Lost Relationships</li>
                            <li>Lost & Found</li>
                            <li>Missed Connections</li>
                            <li>Rideshare</li>
                            <li>Sports Teams</li>
                            <li>Volunteers</li>
                            <li>Other</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="homepage-image-container">
                <img className='homepage__image'
                    src={community}
                    alt='people drawing'
                />
            </div>
        </div>
    );
};

export default HomePage;
