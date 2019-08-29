var express = require('express');
var app = express();

app.get('/', function(req,res){
res.send('<html><body><h1>Portal de noticias</h1></body></html>')
});

app.listen(4000, function(){
    console.log("Servidor Com express")
})