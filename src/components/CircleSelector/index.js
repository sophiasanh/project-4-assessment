import React from 'react';
import '../CircleSelector/styles.css';

const CircleSelector = ({ selectedCircle, circles, selectCircle }) => {
    return (
      <div className="CircleSelector">
        {circles.map(c => {
          return (
            <button
              className={selectedCircle === c ? 'selected' : ''}
              onClick={() => selectCircle(c)}
            >
              {selectedCircle === c
                ? `CIRCLE ${c} SELECTED`
                : `SELECT CIRCLE ${c}`}
            </button>
          );
        })}
      </div>
    );
  };

export default CircleSelector;

