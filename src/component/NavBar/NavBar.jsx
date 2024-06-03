import "./NavBar.css";
import Logo from "../../assets/TestLogo.png";
import PatientLogo from "../../assets/patientLogo.png";
import DocLogo from "../../assets/doctor.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav-container">
      <div className="bar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <NavLink to={"/"} className="patient">
          <span className="patient-logo">
            <img src={PatientLogo} alt="" />
          </span>{" "}
          <span className="header">Patients</span>
        </NavLink>

        <div className="doctor-right">
          <img src={DocLogo} alt="" className="doc-log" />
          <div className="test-beside">
            <div className="name">Dr.Jose Simmons</div>
            <div className="post">General Practitioner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
