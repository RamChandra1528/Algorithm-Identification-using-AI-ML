
# Algorithm Identification Frontend

This repository contains the frontend code for the Algorithm Identification system. It is built using React.js and communicates with the backend service to upload cryptographic data and receive the identified algorithm.

## Project Structure

```
algorithm-identification-frontend/
│
├── public/
│   ├── index.html                      # Main HTML file rendered by React
├── src/
│   ├── components/
│   │   ├── FileUpload.js               # Component handling file upload to the backend
│   │   ├── Results.js                  # Component displaying the detected algorithm and accuracy
│   ├── App.js                          # Main application component
│   ├── index.js                        # Entry point for React app
├── package.json                        # React.js dependencies and metadata
├── README.md                           # Documentation for the frontend
```

## Prerequisites

To run the frontend, ensure you have the following installed:
- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Installation

1. Clone this repository:
   ```bash
   git clone <repo-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd algorithm-identification-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Frontend

1. Start the React development server:
   ```bash
   npm start
   ```

2. The frontend should now be running on `http://localhost:3000`.

## Components

### 1. FileUpload.js
This component allows users to select a file and upload it to the backend for cryptographic analysis. The file is sent via an HTTP request to the backend API.

### 2. Results.js
This component is responsible for displaying the identified algorithm and its associated accuracy, returned from the backend after processing.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client to make requests to the backend.
- **CSS**: Styling for the user interface.

## Notes

- Ensure the backend service is running on `http://localhost:5000` for the file upload to work correctly.
- The system is designed to work with cryptographic datasets and identify the encryption algorithm used.
