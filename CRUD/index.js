const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const submissions = [];

app.get('/', (req, res) => {
  res.render('form', { submissions });
});


app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  submissions.push({ name, email });
  res.redirect('/');
});

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
