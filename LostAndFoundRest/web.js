/**
 * Created by Com on 28/03/2015.
 */
var db = require('./config/db')();
var app = require('./config/express')();
var PORT = 3000;

require('./config/routes.js')(app);

app.listen(PORT);
console.log('Listening on port: '+PORT);