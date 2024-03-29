const path = require('path');
const express = require('express');
const chalk = require('chalk');
const cors = require('cors');

const courseRoutes = require('./routes/coursesRoutes');
const booksRoutes = require('./routes/booksRoutes');
const authorsRoutes = require('./routes/authorRoutes');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(cors());

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/url', (req, res, next) => {
  res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});

// const fs = require('fs');
// app.get('/courses', (req, res) => {
//   const data = fs.readFileSync(path.join(__dirname, '../tools/db.json'));
//   res.send(JSON.parse(data));
// });

app.use('/courses', courseRoutes);
app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);

app.listen(3001, () => {
  console.log(chalk.green('application is running.....'));
});
