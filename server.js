var app = require('express')();
var http = require('http').Server(app);

app.get('/',function(req, res){

  res.send('./client/index.html');
});
