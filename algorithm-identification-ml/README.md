# Algorithm Identification Using AI/ML Techniques

## Project Overview
This project aims to recognize various encryption algorithms from cryptographic datasets using machine learning techniques.

## Project Structure
- `app.py`: Main Flask application for training and prediction.
- `requirements.txt`: Python dependencies.
- `data/`: Contains the dataset used for training.
- `model/`: Stores the trained model.

## Setup
1. Clone this repository.
2. Create a virtual environment and activate it.
3. Install the required packages:
   ```bash
   pip install -r requirements.txt


# Algorithm Identification using AI/ML Techniques - ML Module

## Overview
This is the Machine Learning module of the Algorithm Identification project. It focuses on the AI/ML part of the system, which uses datasets to train models for identifying cryptographic algorithms such as AES, DES, and RSA based on various parameters like encryption time, key size, and more.

## Key Features
- **Algorithm Identification**: Trained model identifies the algorithm used in a dataset based on the data's features.
- **Model Training**: Uses scikit-learn and other ML libraries to train models on cryptographic data.
- **Prediction API**: Provides an API endpoint to predict the algorithm for uploaded datasets.
- **Optimization**: Includes model optimization techniques for better accuracy and performance.

## Dependencies
- Python 3.x
- Flask
- scikit-learn
- pandas
- numpy
- TensorFlow (if using neural networks)
- joblib
- Other relevant libraries (check `requirements.txt`)

## Setup Instructions

1. Clone the repository and navigate to the `algorithm-identification-ml` directory:
   ```bash
   git clone <repository-url>
   cd algorithm-identification-ml
   ```

2. Create and activate a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # For Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Train the model using the training script:
   ```bash
   python train_model.py
   ```

5. Run the Flask app to serve predictions:
   ```bash
   flask run
   ```

## API Endpoints

### `/predict` (POST)
- **Description**: Takes an encrypted dataset and predicts the algorithm used.
- **Request**: A file upload containing the encrypted data.
- **Response**: JSON response with the predicted algorithm and accuracy score.


## Future Enhancements
- Add support for additional cryptographic algorithms.
- Improve prediction accuracy by experimenting with different machine learning techniques.
- Integrate more complex neural networks for handling large datasets.

## Authors
- Ram Chandra (AI/ML Developer)
- Ravi Rajput (Data Scientist)
- Saurabh Shandilya (Backend Developer)
- Deepak Prajapati (Frontend Developer)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
