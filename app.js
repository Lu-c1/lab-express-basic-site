const express = require("express")
const app = express()

app.use(express.static("public"));

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html")
});
app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html")
});

app.get("/works", (request, response, next) => {
    response.sendFile(__dirname + "/views/works.html")
});

app.get("/photo", (request, response, next) => {
    response.sendFile(__dirname + "/views/photo.html")

});

//localhost: 8000
app.listen(8000, () => console.log("I´m listening on port 8000"));