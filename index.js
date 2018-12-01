var express = require('express');
var app = express();
app.use(express.static('client'));
app.get('/', function (req, res) {
   res.sendFile('client/login.html', { root : __dirname})
})

app.post('/login', function (req, res) {
   var username = req.query.username;
   var password = req.query.password;
   console.log(username, password);

   res.send(username + ' login success')
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})