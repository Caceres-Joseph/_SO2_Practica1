const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3000;


 //socket
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function(socket){
    console.log('a user connected');
  });


  
//cors
var cors = require('cors');
app.use(cors()) 
app.listen(port, function () {
    console.log('CORS-enabled web server listening on port: '+port.toString())
});

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// problema con acces

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route