const path = require('path');
const express = require('express');


//this module helps to change the path that the express 
//server takes so that instead of going into 'server', back out of 
//'server' and then into 'public', it starts up at 'node-chat-app'
//and then straight into public.
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})