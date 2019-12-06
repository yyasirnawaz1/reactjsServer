const fs = require('fs');
const path = require('path');

const getCourses = (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../../tools/db.json'));
  res.send(JSON.parse(data));
};

module.exports = { getCourses };
