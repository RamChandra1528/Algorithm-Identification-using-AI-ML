const path = require('path');

exports.storeFile = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            return reject('File not provided');
        }
        const filePath = path.join(__dirname, '../uploads/', file.filename);
        resolve(filePath);
    });
};
