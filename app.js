var express = require("express")
var app = express();


app.get("/",function(res,res){
    res.send("<h1>Hey guys</h1>")
})








app.listen(3000,function(){
    console.log("Listening to port 3000");
})