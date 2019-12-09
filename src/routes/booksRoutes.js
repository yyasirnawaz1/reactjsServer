const express = require('express');
const router = express.Router();

const { getBooks } = require('../controller/books');

router.get('/', getBooks);

module.exports = router;
