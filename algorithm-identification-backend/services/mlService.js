const axios = require('axios');

exports.detectAlgorithm = async (datasetPath) => {
    try {
        const mlServiceURL = 'http://localhost:8000/detect-algorithm';
        const response = await axios.post(mlServiceURL, { dataset: datasetPath });
        return response.data;
    } catch (error) {
        throw new Error('Error connecting to ML service: ' + error.message);
    }
};
