# Algorithm Identification Project

## Project Overview

This project is part of the Vultr Cloud Innovate Hackathon and focuses on identifying cryptographic algorithms using AI/ML techniques. It includes three main components: frontend, backend, and a machine learning model for algorithm detection.

## Project Structure

The project consists of three main parts:
1. **algorithm-identification-frontend**: React.js-based frontend for user interaction.
2. **algorithm-identification-backend**: Node.js/Express backend handling API requests.
3. **algorithm-identification-ml**: Python-based machine learning module for algorithm identification.

## Installation and Setup

### Prerequisites
- Node.js
- Python 3.x
- Virtual environment (`venv`) for Python
- MongoDB (for backend)
- React.js for frontend

### Step 1: Clone the Repository
\`\`\`bash
git clone <repository-url>
cd algorithm-identification
\`\`\`

### Step 2: Install Dependencies for Backend
Navigate to the backend folder:
\`\`\`bash
cd algorithm-identification-backend
npm install
\`\`\`

### Step 3: Install Dependencies for Frontend
Navigate to the frontend folder:
\`\`\`bash
cd algorithm-identification-frontend
npm install
\`\`\`

### Step 4: Set Up the ML Model
Navigate to the ML folder:
\`\`\`bash
cd algorithm-identification-ml
python3 -m venv venv
source venv/bin/activate (or .\\venv\\Scripts\\activate for Windows)
pip install -r requirements.txt
\`\`\`

### Step 5: Run the Application

#### Backend
\`\`\`bash
cd algorithm-identification-backend
npm start
\`\`\`
The backend will run at \`http://localhost:5000\`.

#### Frontend
\`\`\`bash
cd algorithm-identification-frontend
npm start
\`\`\`
The frontend will run at \`http://localhost:3000\`.

#### Machine Learning Model
To run the ML model service:
\`\`\`bash
cd algorithm-identification-ml
python app.py
\`\`\`
The ML service will run at \`http://localhost:5001\`.

## Features

- **Algorithm Detection**: Automatically detects the cryptographic algorithm from the dataset.
- **Auto-Optimization**: Suggests superior algorithms based on the data.
- **Interactive Visualization**: Shows algorithm comparison using visual tools.

## Integration

1. **Frontend**: Interacts with users and allows file upload for algorithm detection.
2. **Backend**: Receives requests from the frontend, processes the data, and communicates with the ML module.
3. **ML Module**: Detects the encryption algorithm from the dataset and returns the results to the backend.

## License
MIT License
