// To Require cors
const vCors = require('cors'); 
// To Require Express
const vExpress = require('express');
// To Require body-parser
const vBodyParser = require('body-parser');
// Start up an instance of app
const app = vExpress();

// Making port & host
const port = 4800;
const host = "127.0.0.1";


// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Testing Server
app.listen(port,host, () => {
    console.log(`Server Running On: http://${host}:${port}/`);
});

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(vBodyParser.urlencoded({ extended: false }));
app.use(vBodyParser.json());

// Cors for cross origin allowance
app.use(vCors());

// Initialize the main project folder
app.use(vExpress.static('website'));

// Require Express to run server and routes

// Get all success data (200 refer to success)
app.get('/getAll', (_req, res) => {
    res.send(projectData).status(200);
});


// posting data
app.post('/postData', (req, res) => {
    projectData={
        //to read the temp from page
        temp:req.body.temp,
        //to read the date from page
        date:req.body.date,
        //to read  the content from page
        content:req.body.content,
    };
    // to Response with success data
    res.send(projectData).status(200);
});

