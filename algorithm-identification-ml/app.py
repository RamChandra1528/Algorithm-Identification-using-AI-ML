from flask import Flask, request, jsonify # type: ignore
import joblib # type: ignore
import pandas as pd # type: ignore
from sklearn.model_selection import train_test_split # type: ignore
from sklearn.ensemble import RandomForestClassifier # type: ignore
import os

app = Flask(__name__)

# Load the dataset for training (This part can be separated into a different function if preferred)
def load_and_train_model():
    data = pd.read_csv('data/encryption_dataset.csv')

    # Preprocess the data
    X = data.drop('algorithm', axis=1)
    y = data['algorithm']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train the Random Forest Classifier
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Save the model
    model_file = 'model/algorithm_detector.pkl'
    joblib.dump(model, model_file)
    print("Model trained and saved.")

# Load trained model
def load_model():
    model_file = 'model/algorithm_detector.pkl'
    if os.path.exists(model_file):
        model = joblib.load(model_file)
        return model
    else:
        raise FileNotFoundError("Model file not found. Please train the model first.")

# Load and train model when the script is run
load_and_train_model()

# Endpoint for detecting the encryption algorithm
@app.route('/detect', methods=['POST'])
def detect():
    # Get the JSON data from the request
    content = request.get_json()

    # Convert features to DataFrame
    features = pd.DataFrame(content['features'])

    # Load the model
    model = load_model()

    # Make predictions
    predictions = model.predict(features)

    # Return the predictions as a JSON response
    return jsonify({'predictions': predictions.tolist()})

if __name__ == '__main__':
    app.run(port=8000)
