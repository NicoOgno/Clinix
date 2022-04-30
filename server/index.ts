"use strict";

import express from "express"; // require the express server
const cors = require("cors"); // require cors
const app = express(); // instantiate the server
const port: number = 3001; // define the port number
import router from './router/index' // import the router file from the router folder

app.use(cors()); // turn on cors

app.use(express.json()); // turn on the body parser which allows us to receive json messages

app.use(router); // turn on the router

app.listen(port, () => {
  console.log(`WE ARE NOW LISTENING ON PORT # ${port}`);
}); // turn on the server at the defined port number