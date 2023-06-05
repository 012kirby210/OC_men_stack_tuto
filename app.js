const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/oc_men_back')
    .then(()=>console.log('connection ok'))
    .catch(()=>console.log('Failed to connect'));

app.use(express.json());
app.use( (req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);

module.exports = app;
