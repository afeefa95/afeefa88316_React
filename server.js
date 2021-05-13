const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//allow port:
var corsOptions = {

    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json()); 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// simple route:http://localhost:3500/
app.get("/", (req, res) => {
     res.json({ message: "Welcome to esparkinfo application." });    
  });

//http://localhost:3500/api/user
require('./app/router')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});