"use strict";

const Model = require("../models/patients"); // importing our model

exports.postPatient = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, cpf, insurance } = req.body;
  const patient = await Model.create({ firstName, lastName, cpf, insurance });
  return res.status(201).send({ res: patient });
};