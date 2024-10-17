import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Results from './components/Results';

const App = () => {
    const [algorithm, setAlgorithm] = useState('');
    const [accuracy, setAccuracy] = useState('');

    const handleUpload = async (features) => {
        const response = await fetch('http://127.0.0.1:5000/detect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ features }),
        });

        const data = await response.json();
        if (response.ok) {
            setAlgorithm(data.algorithm);
            setAccuracy(data.accuracy || 'N/A'); // Handle optional accuracy
        } else {
            setAlgorithm('Error');
            setAccuracy(data.error || 'Unknown error occurred.');
        }
    };

    return (
        <div>
            <h1>Algorithm Identification using AI/ML</h1>
            <FileUpload onUpload={handleUpload} />
            <Results algorithm={algorithm} accuracy={accuracy} />
        </div>
    );
};

export default App;
