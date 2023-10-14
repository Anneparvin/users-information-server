const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.port || 5000;

const userinfo = require('./data/user.json');

// middleware
app.use(cors());
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/userinfo', (req, res) =>{
  res.send(userinfo);
})

app.get('/userinfo/:id', (req, res)=>{
  const id=parseInt(req.params.id);
  console.log(id);
  const selectInfo =userinfo.find(userinfo => userinfo.id === id);
  console.log(selectInfo);
  res.send(selectInfo);
})



app.listen(port, ()=>{
    console.log(`user information server is running on port ${port}`)
})
