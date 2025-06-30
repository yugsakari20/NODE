const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/submit-form', (req, res) => {
  const submittedData = req.body;
  res.render('table', { submittedData });
});

app.get('/table', (req, res) => {
  res.render('table', { submittedData: null });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
