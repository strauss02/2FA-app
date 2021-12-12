const express = require('express');
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
app.use(express.json());
app.use(cors());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

const users = [];
app.post('/', (req, res) => {
  const { userName, password } = req.body;
  users.push({ userName, password });
  res.send('user details added to users array');
});

app.get('/register', (_req, res) => {
  res.send('register');
});
