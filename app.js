let express = require('express')
let app = express()

app.use(express.static('public'));
// start application
//app.listen(3000)
var https = require('https');
var fs = require('fs');
var ssl_server_key = 'server_key.pem';
var ssl_server_crt = 'server_crt.pem';
var port = 3000;
 
var options = {
        key: fs.readFileSync(ssl_server_key),
        cert: fs.readFileSync(ssl_server_crt)
};
 
let server = https.createServer(options, app)
server.listen(port);
