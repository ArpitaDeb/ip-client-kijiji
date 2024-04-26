import './RecomendedSellers.scss'
import React from 'react';

const RecomendedSellers = ({ recomendedSellers }) => {
    return (
        <div>
            <h2>Recomended Sellers</h2>
            <ul>
                {recomendedSellers.map((recomendedSeller, index) => (
                    <li key={index}>{recomendedSeller}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecomendedSellers;