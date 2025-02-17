const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes');
/*
get - fetching from serve
post - sending
Put - updating 
delete - deleting
*/

app.use(express.json());
app.use('/api', router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
/**
 * Install mongoose
 * 
 * Import mongoose on file
 * 
 * call connect(CONNECTION_KEY) from mongoose
 * 
 * Create an environment file, read from it on our app
 */
mongoose.connect(process.env.DATABASE_KEY)
.then(console.log("Database connected"))
.catch(err => console.log(err));