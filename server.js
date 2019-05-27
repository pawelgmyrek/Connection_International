var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./public/route/html-routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
