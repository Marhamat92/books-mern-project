const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');


//connect Database
connectDB();


// routes
const books = require('./routes/api/books');

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/books', books);


app.get('/', (req, res) => {
  res.send('Hello World ');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
})