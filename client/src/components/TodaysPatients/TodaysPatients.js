import React from "react";
import PatientCard from "../PatientCard/PatientCard";
import "./style.css";

export default function TodaysPatients() {
  return (
    <>
      <div class="patients-container">
        <div class="todays-patients">Today's Appointments</div>
        <PatientCard />
        <PatientCard />
        <PatientCard />
      </div>
    </>
  );
}