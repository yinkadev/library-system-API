const express = require('express');
const router = express.Router();


 const { getBooks,getBookById, createBook,deleteBook, updateBook,  borrowBook, returnBook } = require('../controllers/bookController');
 
 router.post('/book', createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById)
router.delete('/book/:id', deleteBook);
router.put('/book/:id', updateBook);
router.patch('/book/:id/borrow', borrowBook);
router.patch('/book/:id/return', returnBook)




   module.exports = router;

