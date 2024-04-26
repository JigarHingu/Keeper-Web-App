# Keeper Web App

Keeper Web App is a simple note-taking application built with a frontend in React and a backend in Node.js with Express and MongoDB.

## Features

- Create, Read, Update, and Delete (CRUD) operations for notes.
- Serve static files using Express.
- Use MongoDB as the database.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js and npm
- MongoDB
- Git (optional, for version control)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/JigarHingu/keeper-web-app
   
2. Navigate to the frontend folder:

   ```bash
   cd frontend
   
3. Install frontend dependencies:

   ```bash
   npm install

4. Navigate to the backend folder:
   
   ```bash
   cd ../backend

5. Install backend dependencies:

      ```bash
   npm install

## Configuration

1. Create a .env file in the backend directory and add the following:

      ```bash
   DATABASE_URL=<your-mongodb-connection-string> 
- Replace <your-mongodb-connection-string> with your MongoDB connection string.

## Usage

1.  Start the backend server:

     ```bash
     npm install
     
2.  Start the frontend server:

     ```bash
     cd ../frontend
     npm start

3.  Visit http://localhost:3000 in your browser to use the application.
      
## Live Site

- Check out the live site here.

## Backend API Routes

- GET /notes: Retrieve all notes.
- POST /notes: Create a new note.
- PUT /notes/:id: Update a note by ID.
- DELETE /notes/:id: Delete a note by ID.

## Contribution

- Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.
