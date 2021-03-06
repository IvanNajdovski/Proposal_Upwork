const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname + "/");

app.use(express.static(publicPath));

app.listen(port, () =>{
    console.log("Portal open on port 3000");
})