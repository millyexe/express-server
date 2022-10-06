const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world</h1>");

});
app.get("/contact", function(req, res){
res.send("contact me at: milenalobko.com");
});

app.get("/about", function(req, res){
res.send("hi, this is Milly, this is my try of learning express. i really badly want my translator to work.")

app.get("/hobbies", function(req, res){

    res.send("<ul><li>Coding</ul></li><ul><li>Gaming</ul></li>");
});

});
app.listen(3000, function(){
console.log("Server started on port 3000");
});
