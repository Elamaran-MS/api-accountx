const mongoose = require('mongoose');
const mongoConnString = process.env.MONGODB_URI;
mongoose.connect(mongoConnString);

mongoose.connection.on('error', error =>{
    console.log(error)
});

mongoose.connection.on('connected', res =>{
    console.log('connected')
});