const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Server hosting at port 3000
const app = express(); // Instanciate nee express application for middleware 
const port = 3000; // variables of the port
app.listen(port, () => {
    console.log(`Temp server running at http://localhost:${port}`);
});

// Middleware Set up
app.use(bodyParser.json());
 //adds a middleware where HTTP requests in JSON are parsed as req.body
app.use(bodyParser.urlencoded({ extended: false }));
// adds a midleware where URL-enocded payload from the form are parsed as req.body & does not parse object datatypes
app.use(express.static(path.join(__dirname)));
 // Serve static files from 'public' folder so that the browser can acess all files within this directory
 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});