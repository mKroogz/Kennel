import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
        {props.location.area}: <span className="card-locname">{props.location.address}</span>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;