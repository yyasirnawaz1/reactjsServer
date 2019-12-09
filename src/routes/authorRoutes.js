const express = require('express');
const router = express.Router();

const { getAurhors } = require('../controller/authors');

router.get('/', getAurhors);

module.exports = router;
