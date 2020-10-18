const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
// define the port
const port = 5000;

// setting an ingine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

// routes
// GET

app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete });
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