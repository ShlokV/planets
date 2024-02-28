import React from "react";

const PaginationButton = ({ onClick, isNext, label }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button className="mx-3 my-5" onClick={onClick}>
              {label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationButton;
