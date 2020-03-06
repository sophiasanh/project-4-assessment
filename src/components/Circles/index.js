import React from 'react';
import '../Circles/styles.css';


const Circles = ({selectCircle, circles}) => {
return (
    <div className="Circles">
        {circles.map(c => (
            <div
            className={selectCircle === c ? 'selected': ''}
            // onClick={() => selectedCircle(c)}
            >
            {c}
            </div>
        ))}
        </div>
    );
};

export default Circles;
