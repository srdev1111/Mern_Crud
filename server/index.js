// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const UserController = require('./controllers/userController');
const router = express.Router();
const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use('/api',router);
// // Connect to MongoDB
connectDB();

// // Enable CORS for specific origin
// // app.use(cors({ 
// //   origin: ["*"],
// // }));

// // Middleware

// API routes
router.get('/aaa', (req, res) => {
  res.send('List of users');
});
router.get('/users', UserController.getAllUsers);
router.post('/addUser', UserController.createUser);
router.delete('/users/:userId', UserController.deleteUser);
router.put('/users/:userId', UserController.updateUser);
// Handle preflight requests for all routes

app.options('*', cors());

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});