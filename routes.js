/**
 * Implement routs - CRUD - Create, Read, Update, Delete
 * functions for the routes
 */
const express = require('express');
const router = express.Router();
const book = require('./db');

router.get('/items', async (req, res) => {
    try{
        const myBooks = await book.find();
        res.status(200).send(myBooks);
    } catch(error) {
        res.status(404).send(`Resource not Found ${error}`);
    }
});

router.post('/items', async (req, res) => {
    try{
        const {title, author, pages} = req.body;
        if(!title || !author || !pages){
            return res.status(400).send("All fields are required");
        }
        const newBook = await new book({title, author, pages});
        await newBook.save();
        res.status(201).send(`Book Created: ${newBook}`);
    } catch(error){
        res.status(500).send(`Error creating book${error}`);
}
});
    
module.exports = router;