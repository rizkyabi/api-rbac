const express = require("express");
const bodyParser = require("body-parser");
const route = require('../src/routes/index')

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use('/', route);

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on port " + port);
});

