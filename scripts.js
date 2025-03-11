document.addEventListener('DOMContentLoaded', function() {
    console.log("Website Loaded");
});
js/script.js
sever/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
