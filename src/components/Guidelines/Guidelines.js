import React from 'react';
import './Guidelines.scss'

const Guidlines = ({ guidelines }) => {
    return (
        <div>
       <h2>Guidlines</h2>
       <ul>
       {
        guidelines.map((guideline , index)=>(
            <li key={index}>{guideline}</li>
        ))
       }


       </ul>
 
        </div>
    );
};

export default Guidlines;