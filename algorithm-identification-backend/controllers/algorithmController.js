const fileService = require('../services/fileService');
const mlService = require('../services/mlService');

// Upload dataset and send for algorithm detection
exports.uploadDataset = async (req, res) => {
    try {
        const file = req.file;
        const datasetPath = await fileService.storeFile(file);

        const mlResponse = await mlService.detectAlgorithm(datasetPath);
        res.status(200).json({
            success: true,
            algorithm: mlResponse.algorithm,
            accuracy: mlResponse.accuracy,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
