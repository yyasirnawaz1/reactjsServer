const express = require('express');
const router = express.Router();

const { getCourses } = require('../controller/courses');

router.get('/', getCourses);

module.exports = router;
