
const express = require('express');
const router = express.Router();

const {
 getAuthors,
createAuthor,
updateAuthor,
  deleteAuthor,getAuthorById
} = require('../controllers/authorController');

router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthorById)

router.post('/author', createAuthor);
router.put('/author/:id', updateAuthor);
router.delete('/author/:id', deleteAuthor);


module.exports = router;
