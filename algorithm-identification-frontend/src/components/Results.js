import React from 'react';

const Results = ({ algorithm, accuracy }) => {
    return (
        <div>
            <h2>Detected Algorithm: {algorithm}</h2>
            {accuracy && <p>Accuracy: {accuracy}</p>}
        </div>
    );
};

export default Results;
