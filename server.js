const express = require("express");
const fs = require("fs");
const database = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 3000;

require("./Routes/apiRoutes");
require("./Routes/htmlRoutes");

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
