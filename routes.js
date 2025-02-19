/**
 * Implement routs - CRUD - Create, Read, Update, Delete
 * functions for the routes
 */
const express = require('express');
const router = express.Router();
const book = require('./db');

router.get('/items', async (req, res) => {
    try {
        const myBooks = await book.find();
        res.status(200).json(myBooks);
    } catch (error) {
        res.status(404).json(`Resource not Found ${error}`);
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

router.put('/items/:id', async (req, res) => {
    try {
        const { title, author, pages } = req.body;
        if (!title || !author || !pages) {
            return res.status(400).send("All fields are required");
        }
        const updateBook = await book.findByIdAndUpdate(req.params.id, { title, author, pages }, { new: true });
        res.status(200).send(`Book Updated: ${updateBook}`);
    } catch (error) {
        res.status(500).send(`Error updating book ${error}`);
    }
});

router.delete('/items/:id', async (req, res) => {
    try{
        const deleteBook = await book.findByIdAndDelete(req.params.id);
        if(!deleteBook){
            return res.status(404).send("Book not found");
        }
        res.json(`Book Deleted: ${deleteBook}`);

    } catch(error){
        res.status(500).json(`Error deleting book ${error}`);
    }
});
    
module.exports = router;
