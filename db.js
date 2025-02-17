/**
 * Connect MongoDB*
 * 
 * db
 * collections - tables in  SQL
 * 
 * documents - rows in SQL
 * 
 * mongoose - ORM - Functions that helps interact with our MongoDB
 * 
 * OBject Relational Mapper - Allows with database without writing the database language.
 */
const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    pages:{
        type: Number,
        required: true
    },
});


module.exports = mongoose.model('Book', bookSchema);

