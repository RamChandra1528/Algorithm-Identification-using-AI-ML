
# Algorithm Identification Project

## Project Overview

This project, developed for the Vultr Cloud Innovate Hackathon, focuses on identifying cryptographic algorithms using AI/ML techniques. It includes three main components: a frontend, a backend, and a machine learning model for algorithm detection.

## Project Structure

The project consists of the following parts:
1. **algorithm-identification-frontend**: A React.js-based frontend for user interaction.
2. **algorithm-identification-backend**: A Node.js/Express backend handling API requests.
3. **algorithm-identification-ml**: A Python-based machine learning module for algorithm identification.

## Installation and Setup

### Prerequisites
- **Node.js**: Ensure Node.js is installed (preferably version 14.x or later).
- **Python 3.x**: Python 3.x must be installed on your system.
- **Virtual Environment (`venv`)**: Python virtual environments are recommended for managing dependencies.
- **MongoDB**: This project requires a MongoDB database for the backend.
- **React.js**: Required for frontend development.

### Step 1: Clone the Repository
Clone the repository to your local machine:
\`\`\`bash
git clone https://github.com/RamChandra1528/Algorithm-Identification-using-AI-ML.git
cd Algorithm-Identification-using-AI-ML
\`\`\`

### Step 2: Install Dependencies for Backend
Navigate to the backend folder and install the dependencies:
\`\`\`bash
cd algorithm-identification-backend
npm install
\`\`\`

### Step 3: Install Dependencies for Frontend
Navigate to the frontend folder and install the dependencies:
\`\`\`bash
cd algorithm-identification-frontend
npm install
\`\`\`

### Step 4: Set Up the ML Model
Navigate to the ML folder and set up a Python virtual environment:
\`\`\`bash
cd algorithm-identification-ml
python3 -m venv venv
source venv/bin/activate  # For macOS/Linux
# OR
.\venv\Scripts\activate  # For Windows
pip install -r requirements.txt
\`\`\`

### Step 5: Run the Application

#### Backend
Start the backend server:
\`\`\`bash
cd algorithm-identification-backend
npm start
\`\`\`
The backend will run at \`http://localhost:5000\`.

#### Frontend
Start the frontend application:
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
- **Interactive Visualization**: Displays algorithm comparisons using visual tools.

## Integration
- **Frontend**: Interacts with users, allowing file uploads for algorithm detection.
- **Backend**: Receives requests from the frontend, processes the data, and communicates with the ML module.
- **ML Module**: Detects the encryption algorithm from the dataset and returns the results to the backend.

## Authors
- **Ram Chandra** – AI/ML Developer
- **Ravi Rajput** – Data Scientist
- **Saurabh Shandilya** – Backend Developer
- **Deepak Prajapati** – Frontend Developer

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
