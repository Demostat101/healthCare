import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Patients from "./component/Patients/Patients";

function App() {

  return (
    <div className="original-width">
      <div className="app-jsx-container">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Patients />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
