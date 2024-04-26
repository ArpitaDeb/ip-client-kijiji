import './RecomendedSellers.scss'
import React from 'react';

const RecomendedSellers = ({ recomendedSellers }) => {
    return (
        <div>
            <h2 className='seller__title'>Recomended Sellers</h2>
            <ul className='seller__list'>
                {recomendedSellers.map((recomendedSeller, index) => (
                    <li className='seller__item' key={index}>{recomendedSeller}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecomendedSellers;