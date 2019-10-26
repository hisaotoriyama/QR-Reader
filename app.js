let express = require('express')
let app = express()

app.use(express.static('public'));
console.log("test")
// start application
app.listen(3000)