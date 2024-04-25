import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'; // Import the 'path' module
import notesRouter from './routes/notes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

// Serve static files from the build folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Define API routes for notes
app.use('/notes', notesRouter);

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
