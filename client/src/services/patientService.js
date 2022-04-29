const url = "http://localhost:3001";

function pullPatients() {
  return fetch(`${url}/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function postPatient(event) {
  return fetch(`${url}/`, {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}
export const patientService = {
  pullPatients,
  postPatient,
};
