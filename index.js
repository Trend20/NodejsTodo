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

app.post('/newtasks', (req, res) => {
    res.render('newtasks');
});

// task array
var task = ["buy socks", "practise with nodejs"];

app.post('/addtask', function(req, res) {
    var newTask = req.body.newtask;
    //add the new task from the post route into the array

    task.push(newTask);

    //after adding to the array go back to the root route
    res.redirect("/");
});

// listen to the port
app.listen(port, function() {
    console.log('The server is running');
});