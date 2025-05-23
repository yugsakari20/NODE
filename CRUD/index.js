const express = require('express');
const app = express();
const port = 8090;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let studentData = [];

app.get('/', (req, res) => {
    return res.render('form', { student: studentData });
});

app.get('/form', (req, res) => {
    return res.render('form', { student: studentData });
});

app.post('/insertData', (req, res) => {
    const userid = parseInt(req.body.id);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const obj = { userid, name, email, password };
    studentData.push(obj);

    console.log("Student added:", obj);
    return res.redirect('/form');
});

app.get('/editData', (req, res) => {
    const userEditId = parseInt(req.query.id);
    const editData = studentData.find(val => val.userid === userEditId);

    return res.render('edit', { editData });
});

app.post('/editUser', (req, res) => {
    const editId = parseInt(req.body.editId);

    studentData = studentData.map(user => {
        if (user.userid === editId) {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
        }
        return user;
    });

    console.log("User updated:", editId);
    return res.redirect('/form');
});

app.get('/deleteData', (req, res) => {
    const userDeleteId = parseInt(req.query.id);

    studentData = studentData.filter(user => user.userid !== userDeleteId);
    return res.redirect('/form');
});

app.listen(port, (err) => {
    if (err) {
        console.error('Server error:', err);
    } else {
        console.log(`Server started on${port}`);
    }
});
