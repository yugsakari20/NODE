const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const data = {
        title: 'Welcome to EJS!',
        user: 'sakariya yug',
        items: ['Apple 1.3', 'chrey', 'Orange']
    };
    res.render('index', data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
