import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/resident.css";

const Resident = () => {
  const location = useLocation();
  const [resident, setResident] = useState({});
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (Object.keys(location?.state?.resident)?.length > 0) {
      setResident(location.state.resident);
    }
  }, [location.state.resident]);

  return (
    <div className="container-fluid resident-container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="resident-header">{resident.name}</div>
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-9">
                <button onClick={handleBack} className="resident-button">
                  Back to Residents
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resident;
