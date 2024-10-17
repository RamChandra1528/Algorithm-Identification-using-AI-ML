
# Algorithm Identification Backend

This is the backend service for the **Algorithm Identification** project. It facilitates uploading encrypted files, processing them through a machine learning model, and returning the identified algorithm with accuracy metrics.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- File upload for cryptographic algorithm identification.
- Interacts with the ML service for processing.
- Returns identified algorithm, accuracy, and other metrics.
- Uses Vultr Cloud for scalable backend deployment.

## Technologies

- **Node.js**: Backend runtime environment.
- **Express**: Server framework for building REST APIs.
- **Vultr Cloud**: Cloud hosting and infrastructure service.
- **Multer**: Middleware for handling file uploads.

## Project Structure

```bash
algorithm-identification-backend/
│
├── controllers/
│   ├── fileController.js       # Handles file upload and interaction with the ML model
├── models/
│   ├── algorithmModel.js       # Communicates with the ML service to identify the algorithm
├── routes/
│   ├── api.js                  # Defines the API routes for uploading and fetching results
├── config/
│   ├── vultrConfig.js          # Vultr API configuration
├── uploads/
│   └── (empty)                 # Temporary storage for uploaded files
├── app.js                      # Main server configuration (Express.js setup)
├── package.json                # Dependencies and project metadata
└── README.md                   # Documentation for the backend
```

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14+): [Install Node.js](https://nodejs.org/)
- **npm** (v6+): npm is included with Node.js.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/algorithm-identification-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd algorithm-identification-backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Vultr API key and port:
   ```bash
   PORT=5000
   VULTR_API_KEY=your_vultr_api_key
   ```

## Running the Application

To start the backend server:

1. Ensure that the ML service (algorithm-identification-ml) is running.
2. Run the server:
   ```bash
   npm start
   ```

3. The server will start on `http://localhost:5000`. You should see a message like:
   ```
   Server is running on http://localhost:5000
   ```

## API Endpoints

### 1. Upload File - `POST /upload`

- **Description**: Upload an encrypted file for algorithm identification.
- **Request**: Multipart Form Data
  - Key: `file`
  - Value: (File to upload)

**Example Request**:

```bash
curl -X POST http://localhost:5000/upload   -F "file=@path_to_file/crypto_file.txt"
```

**Response**:

```json
{
  "algorithm": "AES",
  "accuracy": "96%"
}
```

### 2. Get Results - `GET /results`

- **Description**: Retrieve the results after processing.
- **Response**:
  ```json
  {
      "algorithm": "RSA",
      "accuracy": "98%",
      "time": "2.2s"
  }
  ```

## Environment Variables

Create a `.env` file in the project root directory with the following variables:

- `PORT`: Port number for the Express server (default: 5000).
- `VULTR_API_KEY`: Your Vultr API key for cloud services.

Example `.env`:

```bash
PORT=5000
VULTR_API_KEY=your_vultr_api_key
```

## Testing

You can test the API using:

- [Postman](https://www.postman.com/)
- [Curl](https://curl.se/)

1. **Test file upload**:
   - Use Postman or Curl to `POST` an encrypted file to `http://localhost:5000/upload`.
   - The response will return the identified algorithm and accuracy.

2. **Test results retrieval**:
   - Send a `GET` request to `http://localhost:5000/results` to fetch the last processed result.

## Troubleshooting

- **Cannot GET /**: Ensure your routes are correctly set up and the server is running.
- **File upload errors**: Make sure the `uploads/` directory has the right permissions, and you are using valid files for upload.

## License

This project is licensed under the MIT License.
