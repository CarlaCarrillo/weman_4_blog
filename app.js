var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var rtr = require('./routes/index.js');
const port = 3000
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', rtr);
app.use(express.static('views'));
app.listen(port, () => console.log(`app listening on port ${port}!`))