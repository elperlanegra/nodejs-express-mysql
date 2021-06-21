const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse request of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extend: true }))


// simple route
app.get('/', (req, res)=>{
    res.json({message: "Welcome to manuelduarte077 application" })
})


// set por, listen for request
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})