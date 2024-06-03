import { patientContext } from "../../UserContext";
import { FaSearch } from "react-icons/fa";

import "./Left.css";

const Left = () => {
  const { result, result2 } = patientContext();
  const { handleInputChange, value } = patientContext();

  return (
    <div className="combined">
      <div className="title-input">
        <input
          className="input"
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Search Patient by Name"
        />{" "}
        <FaSearch />
      </div>

      <div className="left-container">{result}</div>
      <div className="right-component">{result2}</div>
    </div>
  );
};

export default Left;
