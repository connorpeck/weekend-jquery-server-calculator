const express = require( 'express');
const app = express();

app.use( express.static ('./server/public'));

const port = 5001;

app.listen( port,() => {
    console.log('server is up on', port);
})