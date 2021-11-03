const compression = require('compression');
const express = require("express");
const app = express();

app.use(compression());
app.use(express.static('public'));

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("Server is running on localhost:3000");
});
