const express = require('express');
require('dotenv').config();
require('./db');
const apiRoutes = require('./routes/api.routes');
const app = express();
app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());
app.use('/api', apiRoutes);
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server Started at ${process.env.PORT}`)
});