const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'react_first'
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});
app.listen(3002, () => {
    console.log("Server is running on port 3002!");
});

app.post('/register', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;
    const q = 'INSERT INTO users (username, email, password) VALUES (?,?,?)';
    const values = [sentUserName, sentEmail, sentPassword];

    db.query(q, values, (err, results) => {
        if (err) {
            console.error('Error inserting user: ' + err.message);
        } else {
            console.log('User inserted successfully!');
        }
    });
});
app.post('/', (req, res) => {
    const loginEmail = req.body.LoginEmail;
    const loginPassword = req.body.LoginPassword;
    const q = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const values = [loginEmail, loginPassword];

    db.query(q, values, (err, results) => {
        if (err) {
            console.error('Error querying database: ' + err.message);
            res.status(500).send('Internal Server Error');
        } else {
            if (results.length > 0) {
                res.send(results);
            } else {
                console.log('Credentials do not match!');
                res.status(401).send('Invalid credentials');
            }
        }
    });
})