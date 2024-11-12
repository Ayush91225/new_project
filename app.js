const express = require('express');
const app = express();
const checkName = (req, res, next) => {
    if (req.query.name) {
        next();
    } else {
        res.status(404).end();
    }
};

app.get('/greet', checkName, (req, res) => {
    res.send(`Hello, ${req.query.name}!`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
