const express = require('express');
const router = express.Router();
const BookController = require('../../controllers/books.controller');


router.get('/', BookController.getAllBook);
router.post('/', BookController.addBook);


module.exports = router;