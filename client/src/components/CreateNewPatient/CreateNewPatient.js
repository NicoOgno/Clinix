import { useRef } from "react";
import "./style.css";
import { patientService } from "../../services/patientService";
import back from "../../images/left-arrow.png";

export default function CreateNewPatient({ toggler }) {
  const firstName = useRef();
  const lastName = useRef();
  const cpf = useRef();
  const insurance = useRef();

  function handleAddPatient() {
    const first = firstName.current.value;
    const last = lastName.current.value;
    const id = cpf.current.value;
    const seguro = insurance.current.value;

    const newPatient = {
      firstName: first,
      lastName: last,
      cpf: id,
      insurance: seguro,
    };
    patientService.postPatient(newPatient);
    console.log(newPatient);
  }

  return (
    <div class="new-patient-container">
      <img
        src={back}
        alt="back button"
        class="back-arrow"
        onClick={() => toggler(false)}
      />
      <div class="new-form">
        <div className="input-group">
          <label htmlFor="first-name">First Name</label>
          <input name="first-name" ref={firstName} />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name</label>
          <input name="last-name" ref={lastName} />
        </div>
        <div className="input-group">
          <label htmlFor="cpf">CPF</label>
          <input name="cpf" ref={cpf} />
        </div>
        <div className="input-group">
          <label htmlFor="insurance">Insurance</label>
          <input name="insurance" ref={insurance} />
        </div>
        <div className="input-group">
          <button
            class="submission-button"
            type="button"
            onClick={handleAddPatient}
          >
            Register Patient
          </button>
        </div>
      </div>
    </div>
  );
}
