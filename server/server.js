// requires
const express = require( 'express');
const app = express();
const bodyParser = require('body-parser');
const calculate = require('./modules/calculate');


///// app uses
app.use( express.static ('./server/public'));
app.use( bodyParser.urlencoded( { extended: true}));
app.use ('/calculate', calculate);

/////globals
const port = 5001;

app.listen( port,() => {
    console.log('server is up on', port);
})