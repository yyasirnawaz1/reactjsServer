const fs = require('fs');
const path = require('path');

const getBooks = (req, res) => {
  const data = fs.readFileSync(
    path.join(__dirname, '../../tools/booksdb.json')
  );
  res.send(JSON.parse(data));
};

module.exports = { getBooks };
