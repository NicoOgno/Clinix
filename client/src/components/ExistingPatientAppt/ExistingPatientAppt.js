import React from "react";
import "./style.css";
import back from "../../images/left-arrow.png";

export default function ExistingPatientAppt({ toggler }) {
  return (
    <div class="cpf-search">
      <img
        src={back}
        alt="back button"
        class="back-arrow"
        onClick={() => toggler(false)}
      />
      <div className="input-group">
        <label htmlFor="cpf-search">Search For Patient By CPF</label>
        <input name="cpf-search" />
      </div>
      <button class="submission-button" type="button">
        Register Patient
      </button>
    </div>
  );
}