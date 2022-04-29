import React from "react";
import "./style.css";
import logo from "../../images/cardiogram.png";
import home from "../../images/home.png";
import schedule from "../../images/schedule.png";
import patients from "../../images/Patients.png";
import settings from "../../images/settings.png";
import help from "../../images/help.png";
import logOut from "../../images/LogOut.png";

export default function SideBar() {
  return (
    <nav class="nav-bar">
      <img src={logo} alt="chosen medical related logo" class="logo-img" />

      <div class="nav-bar-links">
        <ul>
          <li>
            <a href="#">
              <img src={home} alt="" class="icon-img" />
              <span class="nav-name">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={schedule} alt="" class="icon-img" />
              <span class="nav-name">Schedule</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={patients} alt="" class="icon-img" />
              <span class="nav-name">Patients</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={settings} alt="" class="icon-img" />
              <span class="nav-name">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={help} alt="" class="icon-img" />
              <span class="nav-name">Help</span>
            </a>
          </li>
          <li class="logout">
            <a href="#">
              <img src={logOut} alt="" class="icon-img" />
              <span class="nav-name">Log out</span>
            </a>
          </li>
        </ul>
        {/* <ul class="logout">
          <li>
            <a href="#">
              <img src={logOut} alt="" class="icon-img" />
              <span class="nav-name">Log out</span>
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
