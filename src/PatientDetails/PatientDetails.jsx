import "./PatientDetails.css";
import Heart from "./image/HeartBPM.png";
import Respiratory from "./image/respiratory.png";
import Temperature from "./image/temperature.png";
import BirthIcon from "./image/BirthIcon.png";
import FemaleIcon from "./image/FemaleIcon.png";
import InsuranceIcon from "./image/InsuranceIcon.png";
import PhoneIcon from "./image/PhoneIcon.png";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const PatientDetails = ({
  name,
  profile_picture,
  gender,
  date_of_birth,
  diagnosis_history,
  diagnostic_list,
  phone_number,
  lab_results,
  insurance_type,
  emergency_contact,
}) => {
  const data = {
    labels: diagnosis_history.slice(0, 6).map((val) => {
      return `${val.month} ${val.year}`;
    }),

    datasets: [
      {
        labels: "Systolic",
        data: diagnosis_history.slice(0, 6).map((vals) => {
          return vals.blood_pressure.systolic.value;
        }),
        fill: false,
        borderColor: "#E66FD2",
        tension: 0.1,
      },

      {
        labels: "Diastolic",
        data: diagnosis_history.slice(0, 6).map((val) => {
          return val.blood_pressure.diastolic.value;
        }),
        fill: false,
        borderColor: "#8C6FE6",
        tension: 0.1,
      },
    ],
  };

  const options = {};

  return (
    <div className="patient-details-container">
      <div className="container1">
        <div className="sub-upper-container1">
          <h2 className="diag-history">Diagnosis History</h2>
          <div className="upper-bottom">
            <div className="graph-part">
              <div className="graph">
                <Line options={options} data={data} />
              </div>
              <div className="result-output">
                <div className="systolic">
                  <div className="sys-circle">
                    <div className="circle1"></div>
                    <div className="sys">Systolic</div>
                  </div>
                  <div className="rate">
                    {diagnosis_history.slice(0, 1).map((val) => {
                      return (
                        <div key={Math.random()}>
                          {val.blood_pressure.systolic.value}
                        </div>
                      );
                    })}
                  </div>

                  <div className="levels">
                    {diagnosis_history.slice(0, 1).map((val) => {
                      return (
                        <div key={Math.random()}>
                          {val.blood_pressure.systolic.levels}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr />

                <div className="diastolic">
                  <div className="sys-circle">
                    <div className="circle2"></div>
                    <div className="sys">Diastolic</div>
                  </div>
                  <div className="rate">
                    {diagnosis_history.slice(0, 1).map((val) => {
                      return (
                        <div key={Math.random()}>
                          {val.blood_pressure.diastolic.value}
                        </div>
                      );
                    })}
                  </div>
                  <div className="levels">
                    {diagnosis_history.slice(0, 1).map((val) => {
                      return (
                        <div key={Math.random()}>
                          {val.blood_pressure.diastolic.levels}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="heart-rate-box">
              <div className="respiratory">
                <div className="respiratory-logo">
                  <img src={Respiratory} alt="" />
                </div>
                <div className="respiratory-rate">Respiratory Rate</div>
                <div className="res-rate-result">
                  {diagnosis_history.slice(0, 1).map((val) => {
                    return val.respiratory_rate.value;
                  })}{" "}
                  BPM
                </div>

                <div className="res-rate-category">
                  {diagnosis_history.slice(0, 1).map((val) => {
                    return val.respiratory_rate.levels;
                  })}
                </div>
              </div>

              <div className="temperature">
                <div className="respiratory-logo">
                  <img src={Temperature} alt="" />
                </div>
                <div className="respiratory-rate">Temperature</div>
                <div className="res-rate-result">
                  {diagnosis_history.slice(0, 1).map((val) => {
                    return val.temperature.value;
                  })}{" "}
                  ℉
                </div>

                <div className="res-rate-category">
                  {diagnosis_history.slice(0, 1).map((val) => {
                    return val.temperature.levels;
                  })}
                </div>
              </div>
              <div className="heart-rate">
                <div className="respiratory-logo">
                  <img src={Heart} alt="" />
                </div>
                <div className="respiratory-rate">Heart Rate</div>
                <div className="res-rate-result">
                  {diagnosis_history.slice(0, 1).map((val) => {
                    return val.heart_rate.value;
                  })}{" "}
                  BPM
                </div>

                <div className="res-rate-category">
                  {diagnosis_history.slice(0, 1).map((val) => {
                    return val.heart_rate.levels;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-bottom-container1">
          <h2 className="diag-list-title">Diagnostic List</h2>

          <div className="diagnostic-header">
            <div className="header1">Problem/Diagnosis</div>
            <div className="header2">Description</div>
            <div className="header3">Status</div>
          </div>

          <div className="diag-list-body">
            <div className="diag-list-body-inner">
              <div className="first-diag">
                <div className="problem1">
                  {diagnostic_list.slice(0, 1).map((val) => val.name)}
                </div>

                <div className="descript1">
                  {diagnostic_list.slice(0, 1).map((val) => val.description)}
                </div>

                <div className="status1">
                  {diagnostic_list.slice(0, 1).map((val) => val.status)}
                </div>
              </div>

              <div className="first-diag">
                <div className="problem1">
                  {diagnostic_list.slice(1, 2).map((val) => val.name)}
                </div>

                <div className="descript1">
                  {diagnostic_list.slice(1, 2).map((val) => val.description)}
                </div>

                <div className="status1">
                  {diagnostic_list.slice(1, 2).map((val) => val.status)}
                </div>
              </div>

              <div className="first-diag">
                <div className="problem1">
                  {diagnostic_list.slice(2, 3).map((val) => val.name)}
                </div>

                <div className="descript1">
                  {diagnostic_list.slice(2, 3).map((val) => val.description)}
                </div>

                <div className="status1">
                  {diagnostic_list.slice(2, 3).map((val) => val.status)}
                </div>
              </div>

              <div className="first-diag">
                <div className="problem1">
                  {diagnostic_list.slice(3).map((val) => val.name)}
                </div>

                <div className="descript1">
                  {diagnostic_list.slice(3).map((val) => val.description)}
                </div>

                <div className="status1">
                  {diagnostic_list.slice(3).map((val) => val.status)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="container2-top">
          <div className="image-name">
            <div className="image-name-container">
              <img src={profile_picture} alt="" className="container2-image" />
              <h3 className="image-name">{name}</h3>
            </div>
          </div>

          <div className="bottom-details">
            <div className="date-of-birth">
              <img src={BirthIcon} alt="" className="imglogo" />
              <div className="d0b">
                <div className="date">Date of Birth</div>
                <div className="dob-value">{date_of_birth}</div>
              </div>
            </div>

            <div className="date-of-birth">
              <img src={FemaleIcon} alt="" className="imglogo" />
              <div className="d0b">
                <div className="date">Gender</div>
                <div className="dob-value">{gender}</div>
              </div>
            </div>

            <div className="date-of-birth">
              <img src={PhoneIcon} alt="" className="imglogo" />
              <div className="d0b">
                <div className="date">Contact Info</div>
                <div className="dob-value">{phone_number}</div>
              </div>
            </div>

            <div className="date-of-birth">
              <img src={PhoneIcon} alt="" className="imglogo" />
              <div className="d0b">
                <div className="date">Emergency Contact</div>
                <div className="dob-value">{emergency_contact}</div>
              </div>
            </div>

            <div className="date-of-birth">
              <img src={InsuranceIcon} alt="" className="imglogo" />
              <div className="d0b">
                <div className="date">Insurance Provider</div>
                <div className="dob-value">{insurance_type}</div>
              </div>
            </div>

            <div className="btn">
              <div className="image-name-container">
                <button className="show-all">Show All Information</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container2-bottom">
          <div className="bottom-title">Lab Results</div>

          <div className="analysis-result">
            <div className="bottom-scroll">
              <div className="result-show">{lab_results[0]}</div>
              <div className="result-show">{lab_results[1]}</div>
              <div className="result-show">{lab_results[2]}</div>
              <div className="result-show">{lab_results[3]}</div>
              <div className="result-show">{lab_results[4]}</div>
              <div className="result-show">{lab_results[5]}</div>
              <div className="result-show">{lab_results[6]}</div>
              <div className="result-show">{lab_results[7]}</div>
              <div className="result-show">{lab_results[8]}</div>
              <div className="result-show">{lab_results[9]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
