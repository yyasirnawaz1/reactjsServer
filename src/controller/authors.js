const fs = require('fs');
const path = require('path');

const getAurhors = (req, res) => {
  const data = fs.readFileSync(
    path.join(__dirname, '../../tools/aurhorsdb.json')
  );
  res.send(JSON.parse(data));
};

module.exports = { getAurhors };
