const express = require("express");
const app = express();
const body_parser = require("body-parser")
var urlencodedParser = body_parser.urlencoded({ extended: false }); 

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/pages/index.html")
})

let data = app.post('/', urlencodedParser,(request, response) => {
    response.sendFile(__dirname + "/pages/index.html");
    console.log(request.body);
})

app.listen(3000, () => {
    console.log("[express_listening]")
})