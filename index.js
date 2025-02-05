const express = require('express');
const { resolve } = require('path');
const connectDB = require('./config/db');

const app = express();
const port = 3010;

app.use(express.json())

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/menu', require("./routes/menuRoute"));


app.listen(port, async () => {
  try{
    await connectDB();
    console.log('MongoDB connected to the server')
  } catch(err){
    console.error(err.message);
  }

  console.log(`Example app listening at http://localhost:${port}`);
});
