const express = require('express');
const router = express.Router();
const BookController = require('../../controllers/books.controller');


router.get('/', BookController.getAllBook);
router.post('/', BookController.addBook);
router.get('/:id', BookController.getBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);


module.exports = router;