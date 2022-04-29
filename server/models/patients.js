"use strict";

const mongoose = require("./index.js"); // importing our database connection to the model where we now create the db schema

//creating our database schema
const patientsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  cpf: String,
  insurance: String,
});

module.exports = mongoose.model("patients", patientsSchema); // exporting the database schema