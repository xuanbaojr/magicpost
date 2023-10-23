
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 8017;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><hr>');
});

app.listen(port, hostname, () => console.log(`Hello PhanBao, I am running at http://${ hostname }:${ port }/`));

/**
 * end
 */
