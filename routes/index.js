const express = require('express');
const router = express.Router();
const bookRoute = require('./book')

/* register all routers */
router.use('/book', bookRoute);

module.exports = router;
