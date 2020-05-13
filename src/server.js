const express = require('express');

const http = require('http');



const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 4000);

app.use(express.static('build'));

server.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})