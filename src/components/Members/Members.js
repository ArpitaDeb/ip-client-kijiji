import React from 'react';

const Members = ({ members }) => {
    return (
        <div>
            <h2>Members</h2>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    );
};

export default Members;
