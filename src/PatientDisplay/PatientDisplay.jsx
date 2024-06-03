import "./PatientDisplay.css";
import MoreLogo from "../assets/more.png";
import { patientContext } from "../UserContext";

const PatientDisplay = ({ name, profile_picture, gender, age }) => {
  const { handleClick } = patientContext();

  return (
    <div>
      <div className="allData">
        <button onClick={handleClick} value={name} className="all">
          <div className="pic-name-age-container">
            <img src={profile_picture} alt="" className="picture" />

            <div className="name-age">
              <div className="patient-name">{name}</div>
              <div className="patient-gender-age">
                {gender},{age}
              </div>
            </div>
          </div>
          <img src={MoreLogo} alt="" className="more-image" />
        </button>
      </div>
    </div>
  );
};

export default PatientDisplay;
