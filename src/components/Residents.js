import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/residents.css";

const Residents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [residents, setResidents] = useState([]);
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (location?.state?.residents?.length > 0) {
      const fetchPromises = location.state.residents.map((url) =>
        fetch(url).then((response) => response.json())
      );

      Promise.all(fetchPromises)
        .then((responses) => {
          const responseData = responses.map((response) => response);
          setResidents(responseData);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [location.state.residents]);

  return (
    <div className="container-fluid residents-home">
      <div className="row">
        <div className="col-12">
          <div className="header">Residents</div>
          <div className="residents-container">
            {residents.length > 0 &&
              residents.map((resident) => (
                <div
                  key={resident.name}
                  className="residents-card"
                  onClick={() =>
                    navigate(
                      `/resident/${resident.url.split("/").reverse()[1]}`,
                      {
                        state: { resident },
                      }
                    )
                  }
                >
                  <h3>{resident.name}</h3>
                  <p>Height: {resident.height}</p>
                  <p>Mass: {resident.mass}</p>
                  <p>Gender: {resident.gender}</p>
                </div>
              ))}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="residents-button">
                  <button onClick={handleBack} className="back-button my-5">
                    Back to Planets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residents;
