let express = require('express')
let Res = require('express-resource')
let cp = require('cookie-parser')
let session = require('express-session')

let path = require('path')
let login = require('./routes/login')
let logout = require('./routes/logout')

let bodyParser = require('body-parser');

// 重要
let app = express()



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000
    }
  }));
app.use(cp())
app.use(express.json())

app.use('/login', login)
app.use('/logout', logout)

app.use(express.static('public'));
app.resource('addstoreditems', require('./controllers/addstoreditem'), {id: 'id'})
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

let sessionCheck = (req, res, next) => {
        console.log(">>"+req.cookies.login)
        if(req.session.name) {
            next();  // これによりapp.use isLoginのあと(next)のexpress.static( path.join( __dirname, '/private' )) に移る。
        } else {
        //windows.alert("NameないしPasswordが異なっています")//→alert使えない。なぜ？？？？
        // redirectはサーバーサイド、main.jsのlocation.hrefはブラウザサイド 
            res.redirect('/login.html')
        }
    }

    
// 下記の意味がよくわからない
app.use('/secure', sessionCheck, express.static(path.join( __dirname, '/public' )) );

server.listen(port);

