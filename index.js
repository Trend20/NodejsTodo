const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

// define the port
const port = 5000;

// setting an ingine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// styles
app.use(express.static(__dirname + '/public'));

// routes
// GET

app.get("/", function(req, res) {
    res.render("index");
});

// POST
app.post('/newtasks', (req, res) => {
    res.render('newtasks');
});


// listen to the port
app.listen(port, function() {
    console.log('The server is running');
});