const compression = require('compression');
const express = require("express");
const app = express();

app.use(compression());
app.use(express.static('public'))

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
