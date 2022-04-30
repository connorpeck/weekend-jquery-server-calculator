// requires
const express = require( 'express');
const app = express();
const numbers = require(' ./modules/numbers/numbers');


///// app uses
app.use( express.static ('./server/public'));
app.use ('/numbers', numbers);

/////globals
const port = 5001;

app.listen( port,() => {
    console.log('server is up on', port);
})