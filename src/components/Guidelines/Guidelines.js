import React from 'react';
import './Guidelines.scss'

const Guidlines = ({ guidelines }) => {
    return (
        <div>
       <h2>Guidlines</h2>
       <ul className='guidline__list'>
       {
        guidelines.map((guideline , index)=>(
            <li className='guidline__item' key={index}>{guideline}</li>
        ))
       }


       </ul>
 
        </div>
    );
};

export default Guidlines;