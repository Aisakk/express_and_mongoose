const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testing')
    .then(()=>console.log('database is connect'))
    .catch(err=>console.error('This is the erro: ', err))