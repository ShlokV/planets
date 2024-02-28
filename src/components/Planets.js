import React, { useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";
import { useNavigate } from "react-router-dom";
import "../styles/planets.css";

const Planets = () => {
  const [response, setResponse] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const getPlanets = (page) => {
    try {
      fetch(`https://swapi.dev/api/planets/?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          setResponse(data);
          setCurrentPage(page);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.count / data.results.length));
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    getPlanets(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    getPlanets(currentPage + 1);
  };

  const handlePreviousPage = () => {
    getPlanets(currentPage - 1);
  };

  return (
    <div className="container-fluid planet-home">
      <div className="row">
        <div className="col-12 ol-md-8 col-sm-12">
          <div className="header">Planets</div>
          <div className="planets-container">
            {response.results &&
              response.results.map((planet) => (
                <div
                  key={planet.name}
                  className="planet-card"
                  onClick={() =>
                    navigate(`/residents`, {
                      state: { residents: planet.residents },
                    })
                  }
                >
                  <h3>{planet.name}</h3>
                  <p>Population: {planet.population}</p>
                  <p>Climate: {planet.climate}</p>
                  <p>Terrain: {planet.terrain}</p>
                </div>
              ))}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="pagination-area">
                  {currentPage !== 1 && (
                    <PaginationButton
                      onClick={handlePreviousPage}
                      label="Previous"
                    />
                  )}
                  {currentPage !== totalPages && (
                    <PaginationButton onClick={handleNextPage} label="Next" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planets;
