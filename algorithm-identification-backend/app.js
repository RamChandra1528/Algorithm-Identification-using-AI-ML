const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const algorithmRoutes = require('./routes/algorithmRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', algorithmRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
