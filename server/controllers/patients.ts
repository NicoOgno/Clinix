"use strict";

import Model from '../models/patients'

interface Patient {
  firstName: string
  lastName: string
  cpf: string
  insurance: string
}

export const postPatient = async (req: { body: Patient}, res: any) => {
  const { firstName, lastName, cpf, insurance } = req.body;
  const patient = await Model.create({ firstName, lastName, cpf, insurance });
  // console.log(req.IncomingMessage.rawHeaders, 'my res'); //Could not get just the headers
  return res.status(201).send({ res: patient });
};
