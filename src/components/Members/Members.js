import React from 'react';
import './Member.scss'

const Members = ({ members }) => {
    return (
        <div className="member">
            <h2 className="member__heading">Members</h2>
            <ul className="member__list">
                {members.map((member, index) => (
                    <li className="member__wrap" key={index}>
                        <div className="member__avatar"></div>
                        <div className="member__name">{member}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Members;
