import React, { useState } from 'react';

const FileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError('');  // Reset error on file change
    };

    const handleUpload = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                try {
                    const content = event.target.result;
                    // Assume content is in JSON format
                    const features = JSON.parse(content);
                    await onUpload(features);
                } catch (e) {
                    setError('Invalid file format. Please upload a valid JSON file.');
                }
            };
            reader.readAsText(file);
        } else {
            setError('Please select a file to upload.');
        }
    };

    return (
        <div>
            <input type="file" accept=".json" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default FileUpload;
