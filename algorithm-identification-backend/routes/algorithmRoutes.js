const express = require('express');
const multer = require('multer');
const algorithmController = require('../controllers/algorithmController');

const router = express.Router();

// Setup Multer for file upload handling
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

// POST route for uploading and detecting the algorithm
router.post('/upload', upload.single('dataset'), algorithmController.uploadDataset);

module.exports = router;
