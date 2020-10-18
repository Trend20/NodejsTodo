const express = require('express');
const app = express();

// define the port
const port = 5000;

// setting an ingine
app.set('view engine', 'ejs');

// routes
// GET

app.get('/', function(req, res) {
    res.send('Welcome to your first application using Nodejs');
});

// listen to the port
app.listen(port, function() {
    console.log('The server is running');
});